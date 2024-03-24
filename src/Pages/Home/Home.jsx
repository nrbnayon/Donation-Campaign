import { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import Categories from "../../Components/Categories/Categories";
import useDonationData from "../../Hooks/useDonationData";

const Home = () => {
  const [value, setValue] = useState("");
  const { data } = useDonationData();
  const [newFilterData, setNewFilterData] = useState([]);

  useEffect(() => {
    setNewFilterData(data);
  }, [data]);
  const handleSearch = () => {
    if (value.trim() !== "") {
      const filterData = data.filter((item) =>
        item.category.toLowerCase().includes(value.toLowerCase())
      );
      setNewFilterData(filterData);
    } else {
      setNewFilterData(data);
    }
  };
  return (
    <div>
      <Banner setValue={setValue} handleSearch={handleSearch} />
      <Categories newFilterData={newFilterData} />
    </div>
  );
};

export default Home;
