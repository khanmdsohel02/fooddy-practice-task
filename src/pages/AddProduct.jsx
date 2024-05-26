import { toast } from "react-toastify";

const AddProduct = () => {
  const handleFormData = async (e) => {
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
      await fetch("http://localhost:3000/food", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Product Added");
        });
      // clear form
      form.reset();
    }
  };

  return (
    <div className="w-[60%] mx-auto">
      <h1 className="text-5xl font-bold text-center mb-10 text-red-500">
        Add Product
      </h1>
      <form onSubmit={handleFormData} className="grid gap-5">
        <input
          name="id"
          type="text"
          className="w-full rounded-lg p-3 bg-transparent border border-red-400"
          placeholder="ID ? "
        />

        <input
          name="title"
          type="text"
          className="w-full rounded-lg p-3 bg-transparent border border-red-400 "
          placeholder="Title ?"
        />

        <textarea
          name="about"
          type="text"
          className="h-40 w-full resize-none rounded-lg p-3 bg-transparent border border-red-400"
          placeholder="About ... ?"
        />

        <input
          name="price"
          type="number"
          className="w-full rounded-lg p-3 bg-transparent border border-red-400"
          placeholder="Price ?"
        />

        <input
          name="imgurl"
          type="text"
          className="w-full rounded-lg p-3 bg-transparent border border-red-400"
          placeholder="Image URL ?"
        />

        <button
          type="submit"
          className="btn text-white text-xl bg-red-500 hover:bg-red-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
