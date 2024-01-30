import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useState } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Category from "./pages/Category";
import Products from "./pages/Products";
import AddCategory from "./pages/AddCategory";

function App() {
  const [login, setLogin] = useState(false);
  const [categories, setCategories] = useState([]);
  return (
    <BrowserRouter>
      {login ? (
        <section>
          <Header setLogin={setLogin} />
          <div className="row mx-0 main-container">
            <div className="col-2 px-0">
              <Sidebar />
            </div>
            <div className="col-10">
              <aside className="pages h-100 py-3">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="category" element={<Category />} />
                  <Route path="products" element={<Products />} />
                  <Route path="add-category" element={<AddCategory setCategories={setCategories} />} />
                </Routes>
              </aside>
            </div>
          </div>
        </section>
      ) : (
        <Login setLogin={setLogin} />
      )}
    </BrowserRouter>
  );
}

export default App;
