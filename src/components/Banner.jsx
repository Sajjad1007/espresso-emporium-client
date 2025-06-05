import banner from "../assets/more/03.png";
import awesomeAroma from "../assets/icons/awesome-aroma.png";
import highQuality from "../assets/icons/high-quality.png";
import pureGrades from "../assets/icons/pure-grades.png";
import properRoasting from "../assets/icons/proper-roasting.png";

const Banner = () => {
  return (
    <div>
      <section
        className="min-h-[calc(100vh-68px)] bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20 container mx-auto flex justify-end">
          <div className="lg:w-1/2 flex flex-col gap-4">
            <h1 className="font-rancho text-5xl text-white">
              Would You Like A Cup Of Delicious Coffee?
            </h1>
            <p className="text-white text-sm opacity-80">
              Sip and savor - relaxation in every sip! Get the nostalgia back!!
              Your companion of every moment!!! Enjoy the beautiful moments and
              make them memorable.
            </p>
            <button className="btn bg-[#e3b577] hover:bg-transparent font-rancho font-semibold w-fit text-lg border-[#e3b577] hover:border-white hover:text-white shadow-none">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <div className="bg-[#eceae3]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-14 px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20 container mx-auto text-center lg:text-left">
          <div className="flex flex-col gap-3">
            <img
              src={awesomeAroma}
              alt="Awesome Aroma"
              className="w-18 mx-auto lg:mx-0"
            />
            <h3 className="font-rancho text-4xl text-[#331a15]">
              Awesome Aroma
            </h3>
            <p className="text-[#1b1a1a] text-sm font-medium">
              You will definitely be a fan of the design and aroma of our
              coffee.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <img
              src={highQuality}
              alt="High Quality"
              className="w-18 mx-auto lg:mx-0"
            />
            <h3 className="font-rancho text-4xl text-[#331a15]">
              High Quality
            </h3>
            <p className="text-[#1b1a1a] text-sm font-medium">
              We serve the coffee to you maintaining the best quality.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <img
              src={pureGrades}
              alt="Pure Grades"
              className="w-18 mx-auto lg:mx-0"
            />
            <h3 className="font-rancho text-4xl text-[#331a15]">Pure Grades</h3>
            <p className="text-[#1b1a1a] text-sm font-medium">
              The coffee is made up of the green coffee beans which you will
              love.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <img
              src={properRoasting}
              alt="Proper Roasting"
              className="w-18 mx-auto lg:mx-0"
            />
            <h3 className="font-rancho text-4xl text-[#331a15]">
              Proper Roasting
            </h3>
            <p className="text-[#1b1a1a] text-sm font-medium">
              Your coffee is brewed by first roasting the green coffee beans.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
