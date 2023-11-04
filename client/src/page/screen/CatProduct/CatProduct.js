import React from "react";
import { useParams } from "react-router-dom";
import { NavHome } from "../../../components/NavHome/NavHome";
import { useGetProductCategoryQuery } from "../../../service/productService";

export const CatProduct = () => {
  const { page = 1, name } = useParams();
  const { data, isLoading } = useGetProductCategoryQuery(name, page);
  console.log("data:", data);
  return (
    <>
      <NavHome></NavHome>
    </>
  );
};