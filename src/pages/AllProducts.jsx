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
    <div className="flex flex-wrap justify-between gap-10">
      {products.toReversed().map((product, index) => (
        <ProductCart key={index} product={product} />
      ))}
    </div>
  );
};

export default AllProducts;
