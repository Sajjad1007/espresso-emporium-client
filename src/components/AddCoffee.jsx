import { use } from "react";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";
import SignIn from "./SignIn";

const AddCoffee = () => {
  const { isLoggedIn } = use(AuthContext);

  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());

    fetch(
      "https://espresso-emporium-server-6xb3fu8f6-sajjad1007s-projects.vercel.app/coffees",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCoffee),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee has been added successfully!",
            icon: "success",
            draggable: true,
          });
        }
      });
    form.reset();
  };

  return !isLoggedIn ? (
    <SignIn />
  ) : (
    <div className="px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20 container mx-auto">
      <Link
        to="/"
        className="btn btn-ghost hover:bg-[#e3b577] hover:border-[#e3b577] font-rancho text-xl my-8 text-[#374151] px-0"
      >
        <FaArrowLeft />
        Back to home
      </Link>
      <div className="bg-[#f4f3f0] mb-20 py-16 text-center rounded-md">
        <h3 className="text-5xl text-[#374151] font-rancho font-semibold">
          Add New Coffee
        </h3>
        <p className="text-[#1b1a1a] text-sm font-medium mt-4 w-3/4 mx-auto opacity-70">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using content here.
        </p>
        <form onSubmit={handleAddCoffee} className="mt-6 text-left">
          <div className="w-5/6 mx-auto grid grid-cols-2 gap-6">
            <div className="col-span-2 lg:col-span-1">
              <label
                htmlFor="coffee-name"
                className="font-semibold text-[#1b1a1a95] text-lg"
              >
                Name
              </label>
              <input
                id="coffee-name"
                type="text"
                name="coffeeName"
                placeholder="Enter coffee name"
                required
                className="input border-none w-full px-4 py-6 font-medium focus:outline-0 mt-1.5"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label
                htmlFor="chef"
                className="font-semibold text-[#1b1a1a95] text-lg"
              >
                Chef
              </label>
              <input
                id="chef"
                type="text"
                name="chef"
                placeholder="Enter coffee chef"
                required
                className="input border-none w-full px-4 py-6 font-medium focus:outline-0 mt-1.5"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label
                htmlFor="supplier"
                className="font-semibold text-[#1b1a1a95] text-lg"
              >
                Supplier
              </label>
              <input
                id="supplier"
                type="text"
                name="supplier"
                placeholder="Enter coffee supplier"
                required
                className="input border-none w-full px-4 py-6 font-medium focus:outline-0 mt-1.5"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label
                htmlFor="taste"
                className="font-semibold text-[#1b1a1a95] text-lg"
              >
                Taste
              </label>
              <input
                id="taste"
                type="text"
                name="taste"
                placeholder="Enter coffee taste"
                required
                className="input border-none w-full px-4 py-6 font-medium focus:outline-0 mt-1.5"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label
                htmlFor="category"
                className="font-semibold text-[#1b1a1a95] text-lg"
              >
                Category
              </label>
              <input
                id="category"
                type="text"
                name="category"
                placeholder="Enter coffee category"
                required
                className="input border-none w-full px-4 py-6 font-medium focus:outline-0 mt-1.5"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label
                htmlFor="details"
                className="font-semibold text-[#1b1a1a95] text-lg"
              >
                Details
              </label>
              <input
                id="details"
                type="text"
                name="details"
                placeholder="Enter coffee details"
                required
                className="input border-none w-full px-4 py-6 font-medium focus:outline-0 mt-1.5"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label
                htmlFor="photo"
                className="font-semibold text-[#1b1a1a95] text-lg"
              >
                Photo
              </label>
              <input
                id="photo"
                type="text"
                name="photo"
                placeholder="Enter photo URL"
                required
                className="input border-none w-full px-4 py-6 font-medium focus:outline-0 mt-1.5"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label
                htmlFor="price"
                className="font-semibold text-[#1b1a1a95] text-lg"
              >
                Price
              </label>
              <input
                id="price"
                type="text"
                name="price"
                placeholder="Enter price"
                required
                className="input border-none w-full px-4 py-6 font-medium focus:outline-0 mt-1.5"
              />
            </div>
            <button
              type="submit"
              className="btn col-span-2 w-full bg-[#e3b577] hover:bg-transparent font-rancho font-semibold text-xl py-6 border-[#e3b577] hover:border-[#331a15] hover:text-[#331a15] shadow-none"
            >
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
