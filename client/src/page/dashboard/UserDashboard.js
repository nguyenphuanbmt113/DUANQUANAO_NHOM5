import React, { useEffect, useState } from "react";
import { Spinner } from "../../components/Spinner/Spinner";
import { useGetUsersQuery } from "../../service/authJson";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
export const UserDashboard = () => {
  const [keyword, setKeyWord] = useState("");
  const navigate = useNavigate();
  const [params, setParams] = useState({});
  const { data, isFetching, refetch } = useGetUsersQuery(params);
  console.log("data:", data);
  const handlerSearch = () => {
    setParams({
      ...params,
      name: keyword,
    });
    navigate({
      pathname: "/dashboard/user",
      search: `?name=${keyword}`,
    });
    refetch();
  };
  return (
    <>
      <div>
        <div className="flex items-center gap-4">
          <Link
            to="/dashboard/create-product"
            className="px-3 py-2 bg-blue-500 text-white rounded-md"
          >
            Tạo Sản Phẩm
          </Link>
          <div className="w-[300px] h-[40px] bg-white px-3 relative rounded-md">
            <input
              type="text"
              className="w-full h-full uppercase"
              placeholder="Tìm kiếm"
              value={keyword}
              onChange={(e) => setKeyWord(e.target.value)}
            />
            <div
              className="absolute top-[50%] right-3 -translate-y-1/2 cursor-pointer"
              onClick={handlerSearch}
            >
              <BsSearch></BsSearch>
            </div>
          </div>
        </div>
        {!isFetching && data?.user?.length > 0 ? (
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
                          <div className="font-semibold text-left">Họ</div>
                        </th>
                        <th className="p-2 whitespace-nowrap text-black text-md">
                          <div className="font-semibold text-left">Tên</div>
                        </th>
                        <th className="p-2 whitespace-nowrap text-black text-md">
                          <div className="font-semibold text-left">Email</div>
                        </th>
                        <th className="p-2 whitespace-nowrap text-black text-md">
                          <div className="font-semibold text-left">
                            Thao tác
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-100">
                      {data &&
                        data?.user.map((item, index) => (
                          <tr key={index}>
                            <td className="p-2 whitespace-nowrap text-black text-md">
                              <div className="text-left font-medium text-gray-500">
                                {item?.firstname}
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap text-black text-md">
                              <div className="text-left font-medium text-gray-500">
                                {item?.lastname}
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap text-black text-md">
                              <div className="text-left font-medium text-gray-500">
                                {item?.email}
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap text-black text-md flex items-center gap-3">
                              <div className="cursor-pointer px-2 py-1 bg-blue-500 text-white rounded-sm">
                                Chỉnh sửa
                              </div>
                              <div className=" cursor-pointer px-2 py-1 bg-red-500 text-white rounded-sm">
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
          </>
        ) : (
          <Spinner></Spinner>
        )}
      </div>
    </>
  );
};
