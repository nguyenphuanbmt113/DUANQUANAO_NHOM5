import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useCreateCategoryMutation } from "../../service/categoryService";
import "./Category.scss";
import { TableCategory } from "./TableCategory";
export const Category = () => {
  const [category, setCateory] = useState("");
  const [createCategory, response] = useCreateCategoryMutation();
  console.log("response:", response);
  const handleSubmit = () => {
    createCategory(category);
  };
  useEffect(() => {
    const errorMes = response?.error?.data?.mes;
    const successMes = response?.data?.mes;
    if (errorMes) {
      toast.error(errorMes);
    } else {
      toast.success(successMes);
    }
  }, [response?.data?.mes, response?.error?.data?.mes]);
  return (
    <div className="">
      <div className="w-1/2 text-field">
        <input
          autoComplete="off"
          type="text"
          placeholder="Enter name"
          value={category}
          onChange={(e) => setCateory(e.target.value)}
        />
      </div>
      <div
        className="mt-3 inline-block px-2 py-1 bg-blue-500 text-white cursor-pointer"
        onClick={(e) => handleSubmit(e)}>
        Create
      </div>
      <div className="mt-8">
        <TableCategory></TableCategory>
      </div>
    </div>
  );
};
