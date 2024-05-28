import { useEffect, useState } from "react";
import ProductCart from "./ProductCart";

const HomeProducts = () => {
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
    <div className="flex flex-wrap justify-evenly gap-10">
      {products
        .toReversed()
        .slice(0, 3)
        .map((product, index) => (
          <ProductCart key={index} product={product} />
        ))}
    </div>
  );
};

export default HomeProducts;
