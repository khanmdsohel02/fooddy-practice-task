import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="lg:w-[80%] md:w-[90%] sm:w-[96%] mx-auto flex flex-col">
        <Outlet />
        <Footer />
        <ToastContainer />
      </div>
    </>
  );
}

export default MainLayout;
