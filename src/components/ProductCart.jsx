import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProductCart = ({ product }) => {
  const { id, title, img, price, about } = product;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-md shadow-red-400	text-red-200">
      <figure>
        <img src={img} alt="food" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">{title}</h2>
        <h2 className="text-lg font-bold">Price: {price}$</h2>
        <p className="text-base	">{about}</p>
        <div className="card-actions justify-end mt-5">
          <Link
            to={`/productdetails/${id}`}
            className="btn bg-red-500 hover:bg-red-600 text-white"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
