import React from "react";

const Category = () => {
  return (
    <div className="">
      <header className="d-flex justify-content-between">
        <h4 className="">
          <i className="fa-solid fa-table-cells me-2"></i> Category
        </h4>
        <div className="input-group w-auto">
          <span className="search-icon">
            <i className="fa fa-search"></i>
          </span>
          <input
            type="text"
            className="form-control rounded-3"
            placeholder=""
            aria-label="Search"
            aria-describedby="search-icon"
          />
        </div>
        <button type="submit" className="btn primary-bg text-white">
          Add New
        </button>
      </header>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Category;
