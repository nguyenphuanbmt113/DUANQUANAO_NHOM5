import cors from "cors";
import express from "express";
import initRoutes from "./src/route";
require("dotenv").config();
import dbConnect from "../server/src/config/connectDB";
const app = express();
app.use(cors());
//đọc đc data
app.use(express.json());
//đọc đc data object
app.use(express.urlencoded({ extended: true }));
//set route
initRoutes(app);
dbConnect();
const port = process.env.PORT || 8888;
const listener = app.listen(port, () => {
  console.log(`Server is running on the port ${listener.address().port}`);
});
