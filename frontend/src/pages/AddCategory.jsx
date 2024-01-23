import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const AddCategory = ({ setCategories }) => {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("active");

  const handleFormSubmit = async () => {
    debugger;
    try {
      const accessToken = localStorage.getItem("accessToken");

      const response = await fetch("http://localhost:3000/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ name: category, description, status }),
      });
      console.log("Server response:", response);
      if (response.ok) {
        // Category added successfully, update the list of categories
        const newCategory = await response.json();
        setCategories((prevCategories) => [...prevCategories, newCategory]);
      } else {
        // Handle unsuccessful category addition
        const errorData = await response.json();
        console.error("Failed to add category:", errorData);
      }
    } catch (error) {
      console.error("Error during category addition:", error);
    }
  };

  return (
    <div className="h-100 d-flex justify-content-between flex-column">
      <header>
        <h4>
          <NavLink to="/category">
            <i className="fa-solid fa-arrow-left me-2"></i>
          </NavLink>
          Add Category
        </h4>
      </header>

      <form className="add-form py-3 d-flex flex-column justify-content-between">
        <div className="d-flex w-100 gap-3">
          <div className="mb-3 position-relative mb-4">
            <label htmlFor="text" className="form-label">
              Category
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="mb-3 position-relative mb-4">
            <label htmlFor="text" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-3 position-relative mb-4">
            <label htmlFor="text" className="form-label">
              Status
            </label>
            <select
              name="status"
              className="w-100"
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        <footer className="d-flex justify-content-end gap-3 align-bottom">
          <NavLink to="/category">
            <button type="button" className="btn btn-outline-secondary">
              Close
            </button>
          </NavLink>
          <NavLink to="/category">
            <button
              type="button"
              onClick={handleFormSubmit}
              className="btn primary-bg text-white"
            >
              Save
            </button>
          </NavLink>
        </footer>
      </form>
    </div>
  );
};

export default AddCategory;
