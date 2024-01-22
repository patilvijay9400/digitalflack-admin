import React, { useState } from "react";

const Login = ({setlogin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      debugger
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Login successful
        setlogin(true);
      } else {
        // Handle unsuccessful login
        console.error('Login failed');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error during login:', error);
    }
  };
  return (
    <div className="login-container px-2 px-md-5 py-5">
      <form className="form-container bg-white p-5 shadow-lg">
        <div className="text-center mb-4">
          <img
            src={process.env.PUBLIC_URL + "/images/logo.svg"}
            alt="logo"
            width="300"
          />
          <p className="font-32 gray-text">Welcome to Digitalflake Admin</p>
        </div>

        <div className="mb-3 position-relative mb-4">
          <label htmlFor="text" className="form-label font-27">
            Email address
          </label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" id="email" />
        </div>
        <div className="mb-3 position-relative">
          <label htmlFor="password" className="form-label font-27">
            Password
          </label>
          <input type="password" value={password} autoComplete="current-password" onChange={(e) => setPassword(e.target.value)}  className="form-control" id="password" />
        </div>
        <div className="mb-3 text-end mb-4">
          {/* <!-- Button trigger modal --> */}
          <button
            type="button"
            className="bg-transperant border-0 font-24 gray-text"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Forgot Password?
          </button>
        </div>
        <button type="submit" onClick={handleLogin} className="btn-lg primary-btn w-100 font-32">
          Submit
        </button>
      </form>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content px-2 py-4 px-md-5">
            <div className="modal-header text-center flex-column border-0">
              <h5
                className="modal-title font-32 primary-text"
                id="exampleModalLabel"
              >
                Did you forget your password?
              </h5>
              <p className="font-24 gray-text">
                Enter your email address and we'll send you a link to restore
                password
              </p>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3 mb-4">
                  <label for="email" className="form-label font-27">
                    Email address
                  </label>
                  <input type="email" className="form-control h-90" id="email" />
                </div>
                <div className="mb-3 mb-4 d-flex flex-column">
                <button type="button" className="btn-lg primary-btn font-32 mb-2">
                Request reset link
                </button>
                <button
                type="button"
                className="border-0 text-decoration-underline gray-text font-24"
                data-bs-dismiss="modal"
              >
                Back to log in
                  </button>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
