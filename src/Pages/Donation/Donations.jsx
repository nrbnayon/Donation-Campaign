import { useState } from "react";
import Categories from "../../Components/Categories/Categories";
import useLocalStorage from "../../Hooks/useLocalStorage";
import Donates from "./Donates";

const Donations = () => {
  const { localData } = useLocalStorage();
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };
  return (
    <div>
      <div className="my-8">
        <p className="text-xl text-center font-semibold">Your Donations</p>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {localData.slice(0, showAll ? localData.length : 4).map((item) => (
            <Donates key={item.id} item={item} />
          ))}
        </div>
      </div>
      {localData.length > 4 ? (
        <div className="flex justify-center mt-4">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleShowAll}
          >
            {showAll ? "Show Less" : "Show All"}
          </button>
        </div>
      ) : null}
      <div className="my-8">
        <p className="text-xl text-center font-semibold">Want To Donate More</p>
        <Categories />
      </div>
    </div>
  );
};

export default Donations;
