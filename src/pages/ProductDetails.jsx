import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const pId = useParams();
  const [product, setProduct] = useState([]);
  console.log(pId);

  useEffect(() => {
    fetch(`http://localhost:3000/food/${pId.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, [pId.id]);

  const { title, about, price, img } = product;

  return (
    <div className="hero min-h-screen bg-base-200 mt-10 border-b border-red-600">
      <div className="hero-content w-full flex-col lg:flex-row-reverse">
        <img src={img} className="max-w-2xl rounded-xl shadow-2xl" />
        <div>
          <h1 className="text-7xl font-bold text-red-500 mb-4">{title}</h1>
          <h1 className="text-3xl font-bold text-red-400">Price : {price}$</h1>
          <p className="py-6 text-balance text-lg text-red-400">{about}</p>
          <Link to={"/"} className="btn bg-red-500 hover:bg-red-600 text-white">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
