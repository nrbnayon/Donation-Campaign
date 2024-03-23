import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">Oops! 404 </h1>
      <p className="text-lg text-gray-600 mb-8">
        We couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 ease-in-out"
      >
        Go Back to Homepage
      </Link>
    </div>
  );
};

export default PageNotFound;
