import BannerImg from "../../assets/Resources/Banner.png";
import PropTypes from "prop-types";
const Banner = ({ setValue, handleSearch }) => {
  return (
    <div className="hero-content relative text-center text-neutral-content min-h-screen">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${BannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        }}
      ></div>
      <div className="max-w-lg relative">
        <h1 className="mb-5 text-5xl font-bold text-black">Hello there</h1>
        <p className="mb-5 text-3xl font-bold text-black">
          I Grow By Helping People In Need
        </p>
        <div className="max-w-lg mx-auto flex items-center justify-center mt-10">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setValue(e.target.value)}
            className="py-2 text-black px-4 w-full border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500"
            style={{ zIndex: 1 }}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-r-md"
            onClick={() => handleSearch()}
            style={{ zIndex: 1 }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
Banner.propTypes = {
  setValue: PropTypes.func.isRequired,
  handleSearch: PropTypes.func,
};
export default Banner;
