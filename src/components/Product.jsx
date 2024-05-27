/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Product = ({ product, handleDeleteProduct }) => {
  const { id, title, price, about, img } = product;
  return (
    <>
      <tr className="text-center text-lg text-red-400 border-red-500  border-b">
        <th >{id}</th>
        <td >{title}</td>
        <td >{price} $</td>
        <td >{about.slice(0, 25)}...</td>
        {/* <td className="border-red-500 border-r">{img.slice(0, 20)}...</td> */}
        <td className=" w-[130px] h-[100px]">
          <img className="w-[100%] h-[100%]" src={img} alt="Food" />
        </td>
        <td className="flex gap-2 justify-center">
          <Link
            to={`/productdetails/${id}`}
            className="btn bg-red-500 hover:bg-red-600 text-white text-lg"
          >
            See Details
          </Link>
          <Link
            to={`/updateproduct/${id}`}
            className="btn text-red-500 bg-orange-200 text-lg"
          >
            Edit
          </Link>
          <button
            onClick={() => handleDeleteProduct(id)}
            className="btn bg-red-500 hover:bg-red-600 text-white text-lg"
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default Product;
