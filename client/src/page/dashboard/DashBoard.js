import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { NavContent } from "../../components/NavContent/NavContent";
import { Sidebar } from "../../components/Sidebar.js/Sidebar";

export const DashBoard = () => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };
  return (
    <div className="flex bg-gray-300">
      {show && (
        <div
          className={`flex-none hidden-bar md:block md:w-[250px] md:relative h-[100vh] bg-white ${
            show ? "transition-show" : "transition-hidden"
          }`}>
          <Sidebar></Sidebar>
        </div>
      )}
      <div className="w-full h-[100vh] overflow-y-auto">
        <div className="p-3 m-2">
          <NavContent toggle={toggle}></NavContent>
        </div>
        <div className="mx-2 px-3 flex-auto">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};