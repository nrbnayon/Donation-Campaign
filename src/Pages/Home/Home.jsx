import Banner from "../../assets/Resources/Rectangle 4284.png";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Banner})`,
        opacity: 0.3,
      }}
      className="hero-content text-center text-neutral-content min-h-screen flex items-center justify-center bg-cover bg-center"
    >
      <div className="max-w-lg">
        <h1 className="mb-5 text-5xl font-bold text-black">Hello there</h1>
        <p className="mb-5 text-3xl font-bold text-black">
          I Grow By Helping People In Need
        </p>
        <div className="max-w-lg mx-auto flex items-center justify-center mt-10">
          <input
            type="text"
            placeholder="Search..."
            className="py-2 px-4 w-full border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-r-md">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
