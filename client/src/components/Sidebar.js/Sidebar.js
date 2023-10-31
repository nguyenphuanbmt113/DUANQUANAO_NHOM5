import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { sidebarMenu } from "../../ulties/menu";
export const Sidebar = () => {
  return (
    <div>
      <div className="p-3 border flex items-center justify-center gap-3">
        <span className=" text-2xl font-bold text-blue-500 inline-block">
          Clothes Hunter{" "}
        </span>
        <AiFillCheckCircle color="#537FE7" size={20}></AiFillCheckCircle>
      </div>
      <div className="mt-5 flex flex-col text-sm">
        {sidebarMenu.length > 0 &&
          sidebarMenu.map((item) => {
            return (
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive === true
                    ? "py-2 px-[25px] font-medium text-[#205295] flex gap-3 items-center hover:bg-gray-200 bg-gray-200"
                    : "py-2 px-[25px] font-medium text-[#32323d] flex gap-3 items-center hover:bg-gray-200"
                }
                key={item.id}>
                {item.icon}
                <span>{item.text}</span>
              </NavLink>
            );
          })}
      </div>
    </div>
  );
};
