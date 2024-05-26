import React from "react";
import ReactDOM from "react-dom/client";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import MainLayout from "./MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import ManageProducts from "./pages/ManageProducts";
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/UpdateProduct";
import AllProducts from "./pages/AllProducts";
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "allproducts",
        element: <AllProducts />,
      },
      {
        path: "productdetails/:id",
        element: <ProductDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "manageproducts",
        element: <ManageProducts />,
      },
      {
        path: "addproduct",
        element: <AddProduct />,
      },
    ],
  },
  {
    path: "/updateproduct/:id",
    element: <UpdateProduct />,
  },

  {
    path: "*",
    element: (
      <div className="grid place-items-center mt-40">
        <h1 className="text-5xl text-red-600">Not Found</h1>
        <Link to="/" className="btn mt-4 bg-red-500 text-white text-xl">
          Go Home
        </Link>
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
