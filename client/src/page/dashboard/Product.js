import React from "react";
import { Link, useParams } from "react-router-dom";
import { Pagination } from "../../components/Pagination/Pagination";
import { Spinner } from "../../components/Spinner/Spinner";
import { useGetProductQuery } from "../../service/productService";

export const Product = () => {
  let { page } = useParams();
  console.log("page:", page);
  if (!page) {
    page = 1;
  }
  const { data, isFetching } = useGetProductQuery({ page });
  console.log("data:", data);
  return (
    <div>
      <Link
        to="/dashboard/create-product"
        className="px-3 py-2 bg-blue-500 text-white rounded-sm">
        Create Product
      </Link>
      {!isFetching && data?.products.length > 0 ? (
        <>
          <div className="mt-5 w-full bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800">Product</h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Name</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Price</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Stock</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Images</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Actions</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {data &&
                      data?.products.map((item, index) => (
                        <tr key={index}>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left font-medium text-gray-500">
                              {item?.title}
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left font-medium text-gray-500">
                              ${item?.price}
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left font-medium text-gray-500">
                              {item?.stock}
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left font-medium text-gray-500">
                              <img
                                src={`/images/${item?.image1}`}
                                alt=""
                                className="w-[50px] h-[50px] object-cover"
                              />
                              {/* {item?.stock} */}
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap flex items-center gap-3">
                            <div className="cursor-pointer px-2 py-1 bg-blue-500 text-white rounded-sm">
                              Update
                            </div>
                            <div className=" cursor-pointer px-2 py-1 bg-red-500 text-white rounded-sm">
                              Delete
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Pagination
            page={parseInt(page)}
            totalPage={parseInt(data.totalPage)}
            count={parseInt(data.counts)}
            path="dashboard/product"></Pagination>
        </>
      ) : (
        <Spinner></Spinner>
      )}
    </div>
  );
};
