import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

const EditCategory = ({ setCategories, openToast }) => {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("active");

  const { categoryId } = useParams();

  useEffect(() => {
    getCategoryData();
  }, [categoryId]);

  const getCategoryData = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");

      const response = await fetch(`http://localhost:3000/categories/${categoryId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        const categoryData = await response.json();
        setCategory(categoryData.name);
        setDescription(categoryData.description);
        setStatus(categoryData.status);
      } else {
        console.error("Failed to fetch category data:", response.statusText);
      }
    } catch (error) {
      console.error("Error during category data fetch:", error);
    }
  };

  const handleFormSubmit = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");

      const response = await fetch(`http://localhost:3000/categories/${categoryId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ name: category, description, status }),
      });

      if (response.ok) {
        const updatedCategory = await response.json();
        setCategories((prevCategories) =>
          prevCategories.map((prevCategory) =>
            prevCategory._id === categoryId ? updatedCategory : prevCategory
          )
        );
        openToast(`Category with ID ${categoryId} Updated successfully`)
      } else {
        const errorData = await response.json();
        console.error("Failed to update category:", errorData);
      }
    } catch (error) {
      console.error("Error during category update:", error);
    }
  };

  return (
    <div className="h-100 d-flex justify-content-between flex-column">
      <header>
        <h4>
          <NavLink to={`/category/${categoryId}`}>
            <i className="fa-solid fa-arrow-left me-2"></i>
          </NavLink>
          Edit Category
        </h4>
      </header>

      <form className="add-form py-3 d-flex flex-column justify-content-between">
        <div className="mb-3">
          <label htmlFor="categoryName" className="form-label">
            Category Name
          </label>
          <input
            type="text"
            className="form-control"
            id="categoryName"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            Status
          </label>
          <select
            className="form-select"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* Add other form fields as needed */}

        <footer className="d-flex justify-content-end gap-3 align-bottom">
          <NavLink to={`/category`}>
            <button type="button" className="btn btn-outline-secondary">
              Close
            </button>
          </NavLink>
          <NavLink to={`/category`}>
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

export default EditCategory;
