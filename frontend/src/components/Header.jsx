import React, { useState } from "react";

const Header = ({setLogin}) => {
  const [showLogout, setShowLogout] = useState(false);

  const handleLogout = () => {
    setShowLogout(true);
  };

  const confirmLogout = () => {
    setLogin(false);
    setShowLogout(false);
  };
  return (
    <div>
      <nav className="navbar primary-bg px-4 py-3">
        <div className="navbar-brand">
          <img
            src={process.env.PUBLIC_URL + "/images/app-logo.svg"}
            alt="app-logo"
            height="45"
          />
        </div>
        <div className="positon-relative">
          <button className="border-0 bg-transparent" onClick={handleLogout}>
            <i className="fa-regular fa-circle-user text-white font-32"></i>
          </button>

          {showLogout && (
            <button
              className="btn btn-outline-danger position-absolute logout-btn"
              data-bs-toggle="modal"
              data-bs-target="#logoutModal"
              onClick={() => console.log("Logout clicked")}
            >
              Logout
            </button>
          )}
        </div>
        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="logoutModal"
          tabIndex="-1"
          aria-labelledby="logoutModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content py-4">
              <div className="modal-body text-center">
                <h3>
                  <i className="fa-solid fa-triangle-exclamation text-danger"></i>{" "}
                  Log Out
                </h3>
                <p>Are you sure you want to log out ?</p>
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-outline-secondary rounded-pill me-3"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn primary-bg text-white rounded-pill"
                    onClick={confirmLogout}
                    data-bs-dismiss="modal"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
