import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Login } from "./components/Login/Login";
import { Category } from "./page/dashboard/Category";
import { DashBoard } from "./page/dashboard/DashBoard";
import { Product } from "./page/dashboard/Product";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/dashboard" element={<DashBoard></DashBoard>}>
          <Route path="product" element={<Product></Product>}></Route>
          <Route path="order" element={<Product></Product>}></Route>
          <Route path="category" element={<Category></Category>}></Route>
          <Route path="user" element={<Product></Product>}></Route>
          <Route path="*" element={<Product></Product>}></Route>
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
