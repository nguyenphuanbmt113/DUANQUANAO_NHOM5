import React from "react";
import { Link } from "react-router-dom";
export const Product = () => {
  return (
    <div>
      <Link
        to="/dashboard/create-product"
        className="px-3 py-2 bg-blue-500 text-white rounded-sm"
      >
        Create Product
      </Link>
    </div>
  );
};
