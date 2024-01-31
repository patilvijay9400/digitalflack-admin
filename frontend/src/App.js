import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useState } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Category from "./pages/Category";
import Products from "./pages/Products";
import AddCategory from "./pages/AddCategory";
import EditCategory from "./pages/EditCategory";
import Snackbar from "@mui/material/Snackbar";
import Alert from '@mui/material/Alert';

function App() {
  const [login, setLogin] = useState(false);
  const [categories, setCategories] = useState([]);
  const [openToaster, setOpenToaster] = useState(false);
  const [toasterMessage, setToasterMessage] = useState('');
  const openToast = (message) => {
    setToasterMessage(message);
    setOpenToaster(true);
  };

  const closeToast = () => {
    setOpenToaster(false);
  };
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
                  <Route path="category" element={<Category openToast={openToast}/>} />
                  <Route path="products" element={<Products />} />
                  <Route
                    path="add-category"
                    element={<AddCategory setCategories={setCategories} openToast={openToast} />}
                  />
                  <Route
                    path="edit-category/:categoryId"
                    element={
                      <EditCategory
                        setCategories={setCategories}
                        openToast={openToast}
                      />
                    }
                  />
                </Routes>

                <Snackbar
                  open={openToaster}
                  autoHideDuration={6000}
                  onClose={closeToast}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                >
                  <Alert
                    onClose={closeToast}
                    severity="success"
                    variant="filled"
                    sx={{ width: "100%" }}
                  >
                    {toasterMessage}
                  </Alert>
                </Snackbar>

              </aside>
            </div>
          </div>
        </section>
      ) : (
        <Login setLogin={setLogin} openToast={openToast}/>
      )}
    </BrowserRouter>
  );
}

export default App;
