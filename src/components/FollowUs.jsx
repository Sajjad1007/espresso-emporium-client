import cup01 from "../assets/cups/01.png";
import cup02 from "../assets/cups/02.png";
import cup03 from "../assets/cups/03.png";
import cup04 from "../assets/cups/04.png";
import cup05 from "../assets/cups/05.png";
import cup06 from "../assets/cups/06.png";
import cup07 from "../assets/cups/07.png";
import cup08 from "../assets/cups/08.png";

const FollowUs = () => {
  return (
    <div className="text-center my-20 px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20 container mx-auto">
      <p className="text-[#1b1a1a] text-sm font-medium">Follow Us Now</p>
      <h2 className="text-5xl text-[#331a15] font-rancho mt-1 font-semibold">
        Follow On Instagram
      </h2>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        <img src={cup01} alt="Cup-01" />
        <img src={cup02} alt="Cup-02" />
        <img src={cup03} alt="Cup-03" />
        <img src={cup04} alt="Cup-04" />
        <img src={cup05} alt="Cup-05" />
        <img src={cup06} alt="Cup-06" />
        <img src={cup07} alt="Cup-07" />
        <img src={cup08} alt="Cup-08" />
      </div>
    </div>
  );
};

export default FollowUs;
