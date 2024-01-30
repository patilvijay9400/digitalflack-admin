import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column gap-3 pt-4 h-100 px-1">
      <NavLink
        to="/"
        className="d-flex justify-content-between text-decoration-none px-3 px-md-4 py-2 align-items-center gray-text"
        activeClassName="active"
      >
        <div className="item">
          <i className="fa-solid fa-house"></i> <span className="ms-2">Home</span>
        </div>
        <i className="fa-solid fa-caret-right"></i>
      </NavLink>
      <NavLink
        to="/category"
        className="d-flex justify-content-between text-decoration-none px-3 px-md-4 py-2 align-items-center gray-text"
        activeClassName="active"
      >
        <div className="item">
          <i className="fa-solid fa-table-cells"></i> <span className="ms-2">Category</span>
        </div>
        <i className="fa-solid fa-caret-right"></i>
      </NavLink>
      <NavLink
        to="/products"
        className="d-flex justify-content-between text-decoration-none px-3 px-md-4 py-2 align-items-center gray-text"
        activeClassName="active"
      >
        <div className="item">
          <i className="fa-solid fa-box"></i> <span className="ms-2">Products</span>
        </div>
        <i className="fa-solid fa-caret-right"></i>
      </NavLink>
    </div>
  );
};

export default Sidebar;
