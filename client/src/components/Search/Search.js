import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleSearchbar } from "../../redux/reducers/globalReducer";

export const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState();
  
  const handleClose = () => {
    dispatch(toggleSearchbar());
  };
  const handleChangeInput = (e) => {
    setValue(e.target.value);
  };
  const handleSearch = () => {
    navigate(`/search/${value}/1`);
    dispatch(toggleSearchbar());
  };
  const entertosearch = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      navigate(`/search/${value}/1`);
      dispatch(toggleSearchbar());
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-[10] w-full h-full">
      <div className="flex items-center justify-center">
        <div className="sm:w-9/12 md:w-8/12 lg:w-6/12 p-8 relative">
          <input
            type="text"
            className="w-full h-[60px] px-5 py-2 outline-none bg-white rounded-md uppercase"
            placeholder="Tìm kiếm sản phẩm"
            value={value}
            onClick={entertosearch}
            onChange={handleChangeInput}
          />
          <div
            className="absolute top-1/2 right-[50px] -translate-y-1/2 cursor-pointer"
            onClick={() => handleSearch()}>
            <BsSearch size={25}></BsSearch>
          </div>
        </div>
      </div>
      <div className="absolute top-5 right-7" onClick={handleClose}>
        <TiDeleteOutline size={35} color="white"></TiDeleteOutline>
      </div>
    </div>
  );
};