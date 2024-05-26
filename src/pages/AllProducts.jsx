import { useEffect, useState } from "react";
import ProductCart from "../components/ProductCart";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://localhost:3000/food")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    };
    fetchData();
  }, []);

  return (
    <div className="my-20">
      <h1 className="text-5xl font-bold text-center mb-20 text-red-500">
        All Products Is Here
      </h1>
      <div className="flex flex-wrap justify-between gap-10 ">
        {products.toReversed().map((product, index) => (
          <ProductCart key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
