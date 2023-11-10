import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Pagination } from "../../components/Pagination/Pagination";
import { Spinner } from "../../components/Spinner/Spinner";
import { BsSearch } from "react-icons/bs";
import {
  useDeleteProductMutation,
  useGetProductQuery,
} from "../../service/productService";

export const Product = () => {
  let { page } = useParams();
  const [keyword, setKeyWord] = useState("");
  if (!page) {
    page = 1;
  }
  const navigate = useNavigate();
  const { data, isFetching } = useGetProductQuery({ page });
  const [deleteProduct] = useDeleteProductMutation();
  const handleUpdate = (dataUpdate) => {
    navigate(`/dashboard/product/edit/${dataUpdate._id}`);
  };
  const handleDelete = (item) => {
    if (window.confirm("do you want to delete")) {
      deleteProduct(item._id);
    }
  };
   //search
   const tosearch = () => {

   }
   useEffect(() => {
 
   }, [])
  return (
    <div>
        <div className="flex items-center gap-4">
        <Link
          to="/dashboard/create-product"
          className="px-3 py-2 bg-blue-500 text-white rounded-sm">
          Tạo Sản Phẩm
        </Link>
        <div className="w-[300px] h-[40px] bg-white px-3 relative">
          <input
            type="text"
            className="w-full h-full uppercase"
            placeholder="Tìm kiếm"
            value={keyword}
            onChange={(e) => setKeyWord(e.target.value)}
          />
          <div
            className="absolute top-[50%] right-3 -translate-y-1/2"
            onClick={tosearch}>
            <BsSearch></BsSearch>
          </div>
        </div>
      </div>
      <Link
        to="/dashboard/create-product"
        className="px-3 py-2 bg-blue-500 text-white rounded-sm">
        Tạo Sản Phẩm
      </Link>
      {!isFetching && data?.products.length > 0 ? (
        <>
          <div className="mt-5 w-full bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800">Sản Phẩm</h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap text-black text-md">
                        <div className="font-semibold text-left">Tên</div>
                      </th>
                      <th className="p-2 whitespace-nowrap text-black text-md">
                        <div className="font-semibold text-left">Giá cả</div>
                      </th>
                      <th className="p-2 whitespace-nowrap text-black text-md">
                        <div className="font-semibold text-left">
                          Số lượng lưu trữ
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap text-black text-md">
                        <div className="font-semibold text-left">
                          Hình ảnh minh họa
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap text-black text-md">
                        <div className="font-semibold text-left">Thao tác</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {data &&
                      data?.products.map((item, index) => (
                        <tr key={index}>
                          <td className="p-2 whitespace-nowrap text-black text-md">
                            <div className="text-left font-medium text-gray-500">
                              {item?.title}
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap text-black text-md">
                            <div className="text-left font-medium text-gray-500">
                              ${item?.price}
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap text-black text-md">
                            <div className="text-left font-medium text-gray-500">
                              {item?.stock}
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap text-black text-md">
                            <div className="text-left font-medium text-gray-500">
                              <img
                                src={`/images/${item?.image1}`}
                                alt=""
                                className="w-[50px] h-[50px] object-cover"
                              />
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap text-black text-md flex items-center gap-3">
                            <div
                              className="cursor-pointer px-2 py-1 bg-blue-500 text-white rounded-sm"
                              onClick={() => handleUpdate(item)}>
                              Chỉnh sửa
                            </div>
                            <div
                              className=" cursor-pointer px-2 py-1 bg-red-500 text-white rounded-sm"
                              onClick={() => handleDelete(item)}>
                              Xóa
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