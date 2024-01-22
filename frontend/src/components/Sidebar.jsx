import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column gap-3 pt-4 h-100 px-1">
      <NavLink
        to="/"
        className="d-flex justify-content-between text-decoration-none px-4 py-2 align-items-center gray-text"
        activeClassName="active"
      >
        <div className="item">
          <i className="fa-solid fa-house me-2"></i> Home
        </div>
        <i className="fa-solid fa-caret-right"></i>
      </NavLink>
      <NavLink
        to="/category"
        className="d-flex justify-content-between text-decoration-none px-4 py-2 align-items-center gray-text"
        activeClassName="active"
      >
        <div className="item">
          <i className="fa-solid fa-table-cells me-2"></i> Category
        </div>
        <i className="fa-solid fa-caret-right"></i>
      </NavLink>
      <NavLink
        to="/products"
        className="d-flex justify-content-between text-decoration-none px-4 py-2 align-items-center gray-text"
        activeClassName="active"
      >
        <div className="item">
          <i className="fa-solid fa-box me-2"></i> Products
        </div>
        <i className="fa-solid fa-caret-right"></i>
      </NavLink>
    </div>
  );
};

export default Sidebar;
