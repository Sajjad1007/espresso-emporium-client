import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import backgroundFooter from "../assets/more/29.jpg";

const Footer = () => {
  return (
    <div className="bg-[#f5f4f1]">
      <div className="py-20 px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20 container mx-auto">
        <img src="/logo.png" alt="Logo" className="w-16 h-16" />
        <div className="flex flex-col lg:flex-row gap-16 mt-4">
          <div className="flex flex-col gap-4 min-w-1/2">
            <h3 className="text-5xl text-[#331a15] font-rancho font-semibold">
              Espresso Emporium
            </h3>
            <p className="text-[#1b1a1a] text-sm mt-2 font-medium">
              Always ready to be your friend. Come and contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="hover:opacity-80"
              >
                <FaFacebook className="text-[#331a15]" size={28} />
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                className="hover:opacity-80"
              >
                <FaTwitter className="text-[#331a15]" size={28} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="hover:opacity-80"
              >
                <FaInstagram className="text-[#331a15]" size={28} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="hover:opacity-80"
              >
                <FaLinkedin className="text-[#331a15]" size={28} />
              </a>
            </div>
            <h3 className="text-5xl text-[#331a15] font-rancho mt-6 font-semibold">
              Get In Touch
            </h3>
            <div className="flex gap-5 items-center mt-3">
              <FaPhoneAlt className="text-[#331a15]" size={20} />
              <p className="text-[#1b1a1a] text-base font-medium">
                +88 01533 333 333
              </p>
            </div>
            <div className="flex gap-5 items-center">
              <IoMdMail className="text-[#331a15]" size={22} />
              <p className="text-[#1b1a1a] text-base font-medium">
                info@gmail.com
              </p>
            </div>
            <div className="flex gap-5 items-center">
              <FaLocationDot className="text-[#331a15]" size={22} />
              <p className="text-[#1b1a1a] text-base font-medium">
                72 Wall Street, King Road, Dhaka.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-5xl text-[#331a15] font-rancho font-semibold">
              Connect With Us
            </h3>
            <form className="mt-2">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input border-none w-full px-4 py-6 font-medium focus:outline-0"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input border-none w-full px-4 py-6 my-3 font-medium focus:outline-0"
              />
              <textarea
                className="textarea border-none w-full px-4 py-4 font-medium focus:outline-0 h-32"
                placeholder="Your Message"
              ></textarea>
              <button
                type="button"
                className="btn rounded-full text-[#331a15] border-[#e3b577] hover:border-[#331a15] bg-[#e3b577] hover:bg-transparent font-rancho text-lg font-semibold mt-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <p
        className="font-rancho text-white text-2xl text-center py-4 bg-center bg-cover"
        style={{ backgroundImage: `url(${backgroundFooter})` }}
      >
        &copy; Espresso Emporium. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
