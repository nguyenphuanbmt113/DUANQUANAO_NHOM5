import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../redux/reducers/authReducer";
export const NavHome = ({ detailpage }) => {
  const dispatch = useDispatch();
  const { accessTokenUser } = useSelector((state) => state.authReducer);
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <>
      <div
        className={`header h-[84px] border border-gray-200 ${
          detailpage ? "bg-blue-500 text-white border-none" : ""
        }`}>
        <div className="h-[100%] max-w-[1240px] mx-auto px-5 flex items-center justify-between">
          <nav className="flex items-center gap-3">
            <Link
              to="/home"
              className={`block uppercase tracking-wide text-blue-500 text-xl font-bold ${
                detailpage ? "text-white border-none" : ""
              }`}>
              Clothes Hunter
            </Link>
          </nav>
          {!accessTokenUser ? (
            <nav>
              <Link to="/login" className="cursor-pointer">
                Đăng Nhập
              </Link>
            </nav>
          ) : (
            <nav>
              <span className="cursor-pointer" onClick={handleLogout}>
                Đăng Xuất
              </span>
            </nav>
          )}
        </div>
      </div>
    </>
  );
};
