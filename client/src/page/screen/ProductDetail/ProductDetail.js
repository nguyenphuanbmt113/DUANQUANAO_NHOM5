import React from "react";
import { useParams } from "react-router-dom";
import { DetailProductCard } from "../../components/DetailCard/DetailProductCard";
import { NavHome } from "../../components/NavHome/NavHome";
import { useGetProductByIdQuery } from "../../service/productService";

export const ProductDetail = () => {
  const { id } = useParams();
  const { data = [], isLoading } = useGetProductByIdQuery(id);
  console.log("data:", data);
  return (
    <>
      <NavHome></NavHome>
      <div className="my-container px-5 mt-8">
        {<DetailProductCard product={data}></DetailProductCard>}
      </div>
    </>
  );
};