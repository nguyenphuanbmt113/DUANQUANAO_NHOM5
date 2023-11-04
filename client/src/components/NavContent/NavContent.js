import React from "react";
import { useDispatch } from "react-redux";
import { logoutAdmin } from "../../redux/reducers/authReducer";

export const NavContent = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutAdmin());
  };
  return (
    <div className="w-full flex items-center justify-between">
      <div className="w-[400px] bg-white p-2 rounded-md">
        <input type="text" className="w-full rounded-md" placeholder="Search" />
      </div>
      <div
        className="cursor-pointer px-3 py-2 bg-blue-500 text-white rounded-sm"
        onClick={handleLogout}>
        Logout
      </div>
    </div>
  );
};
