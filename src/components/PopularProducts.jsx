import { useState } from "react";
import { Link } from "react-router";
import CoffeeCard from "./CoffeeCard";

const PopularProducts = ({ coffeesData }) => {
  const [coffees, setCoffees] = useState(coffeesData);

  return (
    <div className="text-center my-20 px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20 container mx-auto">
      <p className="text-[#1b1a1a] text-sm font-medium">---Sip & Savor---</p>
      <h2 className="text-5xl text-[#331a15] font-rancho mt-1 font-semibold">
        Our Popular Products
      </h2>
      <Link
        to="/add-coffee"
        className="btn bg-[#e3b577] hover:bg-transparent font-rancho font-semibold w-fit text-lg border-[#e3b577] hover:border-[#331a15] text-[#331a15] shadow-none mt-4"
      >
        Add Coffee
      </Link>
      <div
        className={
          coffees.length
            ? "mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6"
            : "grid grid-cols-1 sm:grid-cols-2 gap-6"
        }
      >
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
