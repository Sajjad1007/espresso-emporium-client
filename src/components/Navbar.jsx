import { use } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";
import backgroundNavbar from "../assets/more/18.jpg";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn, signOutUser } = use(AuthContext);

  const handleSignOut = () => {
    signOutUser();
    Swal.fire({
      title: "You have signed out successfully!",
      icon: "success",
      draggable: true,
    });
    setIsLoggedIn(false);
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
            <Link
              to={"/sign-in"}
              onClick={handleSignOut}
              className="btn bg-[#e3b577] hover:bg-transparent font-rancho font-semibold w-fit text-lg border-[#e3b577] hover:border-white hover:text-white shadow-none"
            >
              Sign Out
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
