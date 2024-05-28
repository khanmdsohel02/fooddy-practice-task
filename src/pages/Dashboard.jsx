import { signOut } from "firebase/auth";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../firebase/firebaseConfig";

const Dashboard = () => {
  const navigate = useNavigate();

  function logout(e) {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        navigate("/loginorregister");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  }

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center w-[90%] mx-auto">
        {/* Page content here */}
        <Outlet />
        <ToastContainer />
        <label
          htmlFor="my-drawer-2"
          className="btn bg-red-300 hover:bg-red-500 text-black drawer-button lg:hidden my-10 px-10"
        >
          Open SideBar
        </label>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex flex-col justify-between">
          {/* Sidebar content here */}
          <div>
            <li className="hover:bg-red-500 hover:text-white text-red-400 text-lg rounded-lg font-semibold">
              <Link to="manageproducts">Manage Products</Link>
            </li>
            <li className="hover:bg-red-500 hover:text-white text-red-400 text-lg rounded-lg font-semibold">
              <Link to="addproduct">Add Product</Link>
            </li>
          </div>
          <div className="flex justify-between">
            <li className="bg-red-500 text-white text-xl rounded-md hover:bg-red-600">
              <Link to="/">Go To Home</Link>
            </li>
            <li className="bg-red-500 text-white text-xl rounded-md hover:bg-red-600">
              <button onClick={logout}>LogOut</button>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
