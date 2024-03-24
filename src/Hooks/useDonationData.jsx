import { useEffect, useState } from "react";

const useDonationData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/donation.json");
      setLoading(true);

      const data = await res.json();
      setData(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return { data, loading };
};

export default useDonationData;
