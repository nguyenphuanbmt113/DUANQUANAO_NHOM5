import React from "react";
import { Outlet } from "react-router-dom";
import { NavContent } from "../../components/NavContent/NavContent";
import { Sidebar } from "../../components/Sidebar.js/Sidebar";

export const DashBoard = () => {
  return (
    <div className="flex">
      <div className="flex-none w-[250px] h-[100vh] bg-gray-100">
        <Sidebar></Sidebar>
      </div>
      <div className="bg-white w-full">
        <div className="p-3 bg-gray-200">
          <NavContent></NavContent>
        </div>
        <div className="m-2 p-3 flex-auto">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};
