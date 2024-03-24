import { useState } from "react";
import useDonationData from "../../Hooks/useDonationData";
import CategoryList from "./CategoryList";
import { Audio } from "react-loader-spinner";
import PropTypes from "prop-types";

const Categories = ({ newFilterData }) => {
  const { loading } = useDonationData();
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  if (loading) {
    return (
      <Audio
        height={80}
        width={80}
        radius={9}
        color="green"
        ariaLabel="loading"
        wrapperStyle={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
        wrapperClass="loader-wrapper"
      />
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        {newFilterData && newFilterData.length > 0 ? (
          newFilterData
            .slice(0, showAll ? newFilterData.length : 12)
            .map((item) => <CategoryList key={item.id} item={item} />)
        ) : (
          <p>No data available</p>
        )}
      </div>
      {newFilterData && newFilterData.length > 4 ? (
        <div className="flex justify-center mt-4">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleShowAll}
          >
            {showAll ? "Show Less" : "Show All"}
          </button>
        </div>
      ) : null}
    </div>
  );
};

Categories.propTypes = {
  newFilterData: PropTypes.array,
};

export default Categories;

// import { useState } from "react";
// import useDonationData from "../../Hooks/useDonationData";
// import CategoryList from "./CategoryList";
// import { Audio } from "react-loader-spinner";
// import PropTypes from "prop-types";

// const Categories = ({ newFilterData }) => {
//   const { loading } = useDonationData();
//   const [showAll, setShowAll] = useState(false);

//   const handleShowAll = () => {
//     setShowAll(!showAll);
//   };

//   if (loading) {
//     return (
//       <Audio
//         height={80}
//         width={80}
//         radius={9}
//         color="green"
//         ariaLabel="loading"
//         wrapperStyle={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "100vh",
//         }}
//         wrapperClass="loader-wrapper"
//       />
//     );
//   }

//   return (
//     <div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
//         {newFilterData
//           .slice(0, showAll ? newFilterData.length : 10)
//           .map((item) => (
//             <CategoryList key={item.id} item={item} />
//           ))}
//       </div>
//       {newFilterData.length > 4 ? (
//         <div className="flex justify-center mt-4">
//           <button
//             className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
//             onClick={handleShowAll}
//           >
//             {showAll ? "Show Less" : "Show All"}
//           </button>
//         </div>
//       ) : null}
//     </div>
//   );
// };
// Categories.propTypes = {
//   newFilterData: PropTypes.array.isRequired,
// };

// export default Categories;
