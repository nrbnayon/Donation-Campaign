import { useParams } from "react-router-dom";
import useDonationData from "../../Hooks/useDonationData";
import { useEffect, useState } from "react";
import { Card, CardHeader, Button } from "@material-tailwind/react";
import {
  getFromLocalStoredData,
  saveToLocalStorage,
} from "../../utils/localStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CategoryDetails = () => {
  const { id } = useParams();
  const { data } = useDonationData();

  const [newData, setNewData] = useState({});

  const handleDonate = () => {
    // Check if the donation already exists in localStorage
    const existedData = getFromLocalStoredData().find(
      (item) => item.id === parseInt(newData.id)
    );
    if (!existedData) {
      // If not already donated, save the donation and show success toast
      saveToLocalStorage(newData);
      toast.success("Donation successful!");
    } else {
      // If already donated, show warning toast
      toast.warn("Already Donated");
    }
  };

  useEffect(() => {
    const singleData = data.find((item) => item.id === parseInt(id));
    setNewData(singleData);
  }, [data, id]);

  const {
    title,
    description,
    img,
    category,
    cardBg,
    targetAmount,
    currentAmount,
    endDate,
    location,
  } = newData || {};

  return (
    <Card className="w-full overflow-hidden" style={{ background: cardBg }}>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none w-full relative"
      >
        <img
          className="w-full"
          src={
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" ||
            img
          }
          alt="ui/ux review check"
        />
        <div className="absolute bottom-0 bg-opacity-40 bg-black w-full h-14 pl-8">
          <Button
            onClick={handleDonate}
            className="my-2 text-black font-bold"
            style={{ background: cardBg }}
          >
            Donate: ${targetAmount}
          </Button>
        </div>
      </CardHeader>
      <div className="card-body">
        <h2 className="card-title">{title || "Default Title"}</h2>
        <p> {description}</p>
        <div className="card-actions justify-end">
          <p className="text-xlg font-bold">Location: {location}</p>
          <div className="badge badge-outline">
            Current Amount: {currentAmount}
          </div>
          <div className="badge badge-outline">End Date: {endDate}</div>
          <div className="badge badge-outline">{category}</div>
        </div>
      </div>
      <ToastContainer />
    </Card>
  );
};

export default CategoryDetails;
