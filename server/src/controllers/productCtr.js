import asyncHandler from "express-async-handler";
var slugify = require("slugify");
import _ from "lodash";
const fs = require("fs");
const path = require("path");
const formidable = require("formidable");
const { v4: uuidv4 } = require("uuid");
import Product from "../model/productModal";
export const createProduct = asyncHandler(async (req, res) => {
  const form = formidable({ multiples: true });
  form.parse(req, async (err, fields, files) => {
    if (!err) {
      console.log("files:", files);
      console.log("fields:", fields);
      const parsedData = JSON.parse(fields.data);
      console.log("parsedData:", parsedData);
      const images = {};
      for (let i = 0; i < Object.keys(files).length; i++) {
        const mimeType = files[`image${i + 1}`].mimetype;
        const extension = mimeType.split("/")[1].toLowerCase();
        if (
          extension === "jpeg" ||
          extension === "jpg" ||
          extension === "png"
        ) {
          const imageName = uuidv4() + `.${extension}`;
          const __dirname = path.resolve();
          const newPath = __dirname + `/../client/public/images/${imageName}`;
          images[`image${i + 1}`] = imageName;
          fs.copyFile(files[`image${i + 1}`].filepath, newPath, (err) => {
            if (err) {
              console.log(err);
            }
          });
        }
      }
      try {
        const response = await Product.create({
          title: parsedData.title,
          slug: slugify(parsedData.title, "-"),
          price: parseInt(parsedData.price),
          discount: parseInt(parsedData.discount),
          stock: parseInt(parsedData.stock),
          category: parsedData.category,
          colors: parsedData.colors,
          sizes: parsedData.sizesList,
          image1: images["image1"],
          image2: images["image2"],
          image3: images["image3"],
          description: fields.description,
        });
        return res.status(200).json({ msg: "Product has created", response });
      } catch (error) {
        console.log(">>>>>>>.check :", error);
      }
    }
  });
});