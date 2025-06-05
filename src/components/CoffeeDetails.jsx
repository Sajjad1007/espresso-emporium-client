import { use } from "react";
import { Link, useLoaderData } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthContext";
import SignIn from "./SignIn";

const CoffeeDetails = () => {
  const { isLoggedIn } = use(AuthContext);
  const { coffeeName, chef, supplier, taste, category, details, photo } =
    useLoaderData();

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
      <div className="bg-[#f4f3f0] mb-20 py-16 text-left rounded-md flex flex-col lg:flex-row justify-center items-center gap-16">
        <img src={photo} alt={coffeeName} className="w-56" />
        <div className="space-y-1.5">
          <h3 className="text-3xl text-[#331a15] font-rancho font-semibold mb-4">
            Niceties
          </h3>
          <p className="text-[#5c5b5b]">
            <span className="text-[#1b1a1a] font-semibold">Name:</span>{" "}
            {coffeeName}
          </p>
          <p className="text-[#5c5b5b]">
            <span className="text-[#1b1a1a] font-semibold">Chef:</span> {chef}
          </p>
          <p className="text-[#5c5b5b]">
            <span className="text-[#1b1a1a] font-semibold">Supplier:</span>{" "}
            {supplier}
          </p>
          <p className="text-[#5c5b5b]">
            <span className="text-[#1b1a1a] font-semibold">Taste:</span> {taste}
          </p>
          <p className="text-[#5c5b5b]">
            <span className="text-[#1b1a1a] font-semibold">Category:</span>{" "}
            {category}
          </p>
          <p className="text-[#5c5b5b]">
            <span className="text-[#1b1a1a] font-semibold">Details:</span>{" "}
            {details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
