import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const updateId = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/food/${updateId.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, [updateId.id]);

  const { id, title, about, price, img } = product;

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    const isConfirm = confirm("Are You Sure?");

    const form = e.target;
    const id = form.id.value;
    const title = form.title.value;
    const about = form.about.value;
    const price = form.price.value;
    const img = form.imgurl.value;
    const newProduct = { id, title, about, price, img };

    // post data to server
    if (isConfirm) {
      await fetch(`http://localhost:3000/food/${updateId.id}`, {
        method: "PATCH",
        body: JSON.stringify(newProduct),
      })
        .then((res) => res.json())
        .then((data) => {});
      toast.success("Product Updated");
      form.reset();
      // navigate("/");
      // clear form
    } else {
      toast.warning("Product Is Not Update");
    }
  };

  return (
    <>
      <div className="m-10">
        <Link className="bg-red-500 text-white text-xl rounded-md p-2" to="/">
          Go To Home
        </Link>
      </div>
      <div className="w-[60%] mx-auto mt-20">
        <h1 className="text-5xl font-bold text-center mb-10 text-red-500 ">
          Update Product Info
        </h1>
        <form onSubmit={handleUpdateProduct} className="grid gap-5">
          <input
            name="id"
            type="text"
            className="w-full rounded-lg p-3 bg-transparent border border-red-400"
            placeholder="ID ? "
            defaultValue={id}
          />

          <input
            name="title"
            type="text"
            className="w-full rounded-lg p-3 bg-transparent border  border-red-400"
            placeholder="Title ?"
            defaultValue={title}
          />

          <textarea
            name="about"
            type="text"
            className="h-40 w-full resize-none rounded-lg p-3 bg-transparent border  border-red-400"
            placeholder="About ... ?"
            defaultValue={about}
          />

          <input
            name="price"
            type="number"
            className="w-full rounded-lg p-3 bg-transparent border  border-red-400"
            placeholder="Price ?"
            defaultValue={price}
          />

          <input
            name="imgurl"
            type="text"
            className="w-full rounded-lg p-3 bg-transparent border  border-red-400"
            placeholder="Image URL ?"
            defaultValue={img}
          />

          <button
            type="submit"
            className="btn text-white text-xl bg-red-500 hover:bg-red-600"
          >
            Update Product
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateProduct;
