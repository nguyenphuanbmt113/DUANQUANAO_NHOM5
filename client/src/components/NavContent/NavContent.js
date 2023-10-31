import React from "react";

export const NavContent = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="w-[400px] bg-white p-2 rounded-md">
        <input type="text" className="w-full rounded-md" placeholder="Search" />
      </div>
      <div className="px-3 py-2 bg-blue-500 text-white rounded-sm">Logout</div>
    </div>
  );
};
