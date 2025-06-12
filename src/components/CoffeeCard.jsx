import { Link } from "react-router";
import { FaEye } from "react-icons/fa";
import { BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, coffeeName, chef, price, photo } = coffee;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://espresso-emporium-server-l75z.onrender.com/coffees/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            const remainingCoffees = coffees.filter(
              (coffee) => coffee._id !== _id
            );
            setCoffees(remainingCoffees);

            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Coffee has been deleted successfully.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="bg-[#f5f4f1] flex flex-col lg:flex-row gap-2 lg:gap-0 lg:justify-between items-center rounded-md p-6">
      <img src={photo} alt={coffeeName} className="h-56 w-48" />
      <div className="text-left space-y-1.5 lg:mr-3 xl:mr-16">
        <p className="text-[#5c5b5b]">
          <span className="text-[#1b1a1a] font-semibold">Name:</span>{" "}
          {coffeeName}
        </p>
        <p className="text-[#5c5b5b]">
          <span className="text-[#1b1a1a] font-semibold">Chef:</span> {chef}
        </p>
        <p className="text-[#5c5b5b]">
          <span className="text-[#1b1a1a] font-semibold">Price:</span> {price}{" "}
          Taka
        </p>
      </div>
      <div className="flex lg:flex-col gap-2.5 mt-4 lg:mt-0">
        <Link
          to={`/coffee/${_id}`}
          className="btn w-9 h-9 p-0 bg-[#d2b48c] border-[#d2b48c] hover:opacity-85"
        >
          <FaEye size={22} className="text-white" />
        </Link>
        <Link
          to={`/update-coffee/${_id}`}
          className="btn w-9 h-9 p-0 bg-[#3c393b] border-[#3c393b] hover:opacity-85"
        >
          <BiSolidPencil size={22} className="text-white" />
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="btn w-9 h-9 p-0 bg-[#ea4744] border-[#ea4744] hover:opacity-85"
        >
          <MdDelete size={22} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
