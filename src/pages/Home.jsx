import { Link } from "react-router-dom";
import HomeCarousel from "../components/HomeCarousel ";
import HomeProducts from "../components/HomeProducts";

const Home = () => {
  return (
    <div className="mt-10">
      <HomeCarousel />
      <div className="mt-10 mb-10">
        <h1 className="text-3xl font-bold text-center mb-16">Latest Foods</h1>
        <HomeProducts />
        <div className="text-center my-16">
          <Link
            to="allproducts"
            className="btn px-10 py-2 text-xl bg-red-500 hover:bg-red-600 text-white"
          >
            See All Food
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
