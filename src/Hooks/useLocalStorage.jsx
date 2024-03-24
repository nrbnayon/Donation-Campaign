import { useEffect, useState } from "react";
import { getFromLocalStoredData } from "../utils/localStorage";

const useLocalStorage = () => {
  const [localData, setLocalData] = useState([]);
  useEffect(() => {
    setLocalData(getFromLocalStoredData());
  }, []);
  return { localData };
};

export default useLocalStorage;
