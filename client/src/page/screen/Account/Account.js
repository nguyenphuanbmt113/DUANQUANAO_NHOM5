import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { NavHome } from "../../../components/NavHome/NavHome";
import { menuAccount } from "../../../ulties/menu";
import { useSearchParams } from "react-router-dom";
export const Account = () => {
  const [params] = useSearchParams();
  return (
    <div>
      <div>
        <NavHome></NavHome>
      </div>
      <div className="flex">
        <div className="h-[85vh] lg:w-[300px] bg-gray-200 border">
          <ul className="flex flex-col item-center">
            {menuAccount &&
              menuAccount.length > 0 &&
              menuAccount.map((item) => {
                return (
                  <NavLink
                    to={item.path}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "bg-blue-400 text-white" : ""
                    }>
                    <li className="p-3 flex items-start gap-3 hover:bg-blue-400 hover:text-white hover:transition-all">
                      <div>{item.icon}</div>
                      <div>{item.text}</div>
                    </li>
                  </NavLink>
                );
              })}
          </ul>
        </div>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};
