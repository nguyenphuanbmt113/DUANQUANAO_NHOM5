import React from "react";
import { Outlet } from "react-router-dom";
import { NavContent } from "../../components/NavContent/NavContent";
import { Sidebar } from "../../components/Sidebar.js/Sidebar";

export const DashBoard = () => {
  return (
    <div className="flex bg-gray-300">
      <div className="flex-none w-[250px] h-[100vh] bg-white">
        <Sidebar></Sidebar>
      </div>
      <div className="w-full h-[100vh] overflow-y-auto">
        <div className="p-3 m-4 bg-white rounded-md">
          <NavContent></NavContent>
        </div>
        <div className="m-2 p-3 flex-auto">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};
