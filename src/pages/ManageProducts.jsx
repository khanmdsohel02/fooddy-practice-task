import { useState } from "react";
import Product from "../components/Product";
import { useEffect } from "react";
import { toast } from "react-toastify";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://localhost:3000/food")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    };
    fetchData();
  }, []);

  const handleDeleteProduct = async (id) => {
    const isConfirm = confirm("Are You Sure ? You Want To Delete This Product");
    if (isConfirm) {
      await fetch(`http://localhost:3000/food/${id}`, {
        method: "DELETE",
      });
      const newProducts = products.filter((product) => product.id !== id);
      setProducts(newProducts);
      toast.success("Product Deleted");
    }
    toast.success("Product Is Not Delete");
  };

  return (
    <div className="w-full">
      <h1 className="text-5xl font-bold text-center mb-10 text-red-500">
        Manage Products
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-center text-xl text-white bg-red-500">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>About</th>
              <th>Image URL</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {/* rows */}
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
                handleDeleteProduct={handleDeleteProduct}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
