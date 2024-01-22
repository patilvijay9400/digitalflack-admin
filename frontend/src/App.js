import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useState } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Category from "./pages/Category";
import Products from "./pages/Products";

function App() {
  const [login, setlogin] = useState(true);
  return (
    <BrowserRouter>
      {login ? (
        <section>
          <Header />
          <div className="row mx-0 main-container">
            <div className="col-md-2 ps-0">
              <Sidebar />
            </div>
            <div className="col-md-10">
              <aside className="pages h-100 py-3">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="category" element={<Category />} />
                  <Route path="products" element={<Products />} />
                </Routes>
              </aside>
            </div>
          </div>
        </section>
      ) : (
        <Login setLogin={setlogin} />
      )}
    </BrowserRouter>
  );
}

export default App;
