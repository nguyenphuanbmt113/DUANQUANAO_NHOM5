import React from "react";
import { useParams } from "react-router-dom";
import { useGetDetailOrderQuery } from "../../service/orderService";
import { discount } from "../../ulties/discount";
import currency from "currency-formatter";
export const OrderDetail = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetDetailOrderQuery(id);
  let details = data?.details || {};
  console.log("data:", data);
  const total =
    discount(
      data?.details?.productId?.price,
      data?.details?.productId?.discount
    ) * data?.details?.quantities;
  return (
    <div>
      <span className="inline-block mb-5 font-lg font-bold p-2 bg-white text-gray-500 rounded-md">
        Order Number: #{details._id}
      </span>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 items-start">
        <div className="lg:col-span-3 bg-white p-3 rounded-md">
          <table className="table-auto w-full">
            <thead className="text-xs font-semibold uppercase text-white bg-gray-500 ">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Image</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Quantities</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Price</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Total</div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              <tr>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-medium text-gray-500">
                    <img
                      src={`/images/${data?.details?.productId?.image1}`}
                      alt="name"
                      className="w-[50px] h-[50px] rounded-md object-cover"
                    />
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-medium text-gray-500">
                    {" "}
                    {data?.details?.quantities}
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-medium text-gray-500">
                    {currency.format(
                      discount(
                        data?.details?.productId?.price,
                        data?.details?.productId?.discount
                      ),
                      { code: "USD" }
                    )}
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-medium text-gray-500">
                    {currency.format(total, { code: "USD" })}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lg:col-span-1 bg-white p-3 rounded-md">
          <div className="border-b pb-3 border-b-gray-300">
            <span className="capitalize text-gray-500 font-bold">
              Nguười Đặt Hàng
            </span>
            <span className="text-blue-400 text-base font-bold capitalize mt-2 block">
              {data?.details?.userId?.firstname}{" "}
              {data?.details?.userId?.lastname}
            </span>
          </div>

          <div className="border-b py-3 border-b-gray-300">
            <h4 className="capitalize text-gray-500 font-bold">Tên Sản Phẩm</h4>
            <span className="text-blue-400 text-base font-bold capitalize mt-2 block">
              {data?.details?.productId?.title}
            </span>
          </div>
          <div className="py-3">
            <h4 className="capitalize text-gray-500 font-bold">
              Địa Chỉ Nhận Hàng
            </h4>
            <div className="mt-2">
              <span className="text-blue-400 text-base font-bold capitalize mt-2 block">
                {data?.details?.address?.city}, {data?.details?.address?.line1},{" "}
                {data?.details?.address?.line2}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};