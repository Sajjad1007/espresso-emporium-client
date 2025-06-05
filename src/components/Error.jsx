import error from "../assets/404.gif";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Error = () => {
  return (
    <div>
      <Navbar />
      <img
        src={error}
        alt="Error 404"
        className="max-h-[calc(100vh-68px)] mx-auto"
      />
      <Footer />
    </div>
  );
};

export default Error;
