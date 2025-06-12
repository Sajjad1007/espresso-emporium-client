import { use } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";
import backgroundNavbar from "../assets/more/18.jpg";

const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, signOutUser } = use(AuthContext);

  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "You have signed out successfully!",
          icon: "success",
          draggable: true,
        });
        signOutUser();
        navigate("/sign-in");
        setIsLoggedIn(false);
      }
    });
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundNavbar})` }}>
      <nav className="flex justify-between items-center py-1.5 px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20 container mx-auto">
        <div className="flex gap-2 items-center">
          <img src="/logo.png" alt="Logo" className="w-14 h-14" />
          <h3 className="hidden sm:block font-rancho text-4xl text-white">
            Espresso Emporium
          </h3>
        </div>
        <div>
          {isLoggedIn && (
            <button
              onClick={handleSignOut}
              className="btn bg-[#e3b577] hover:bg-transparent font-rancho font-semibold w-fit text-lg border-[#e3b577] hover:border-white hover:text-white shadow-none"
            >
              Sign Out
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
