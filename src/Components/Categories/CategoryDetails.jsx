import { useParams } from "react-router-dom";
import useDonationData from "../../Hooks/useDonationData";
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Button,
} from "@material-tailwind/react";

const CategoryDetails = () => {
  const { id } = useParams();
  const { data, loading } = useDonationData();

  const [newData, setNewData] = useState({});

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
            className="my-2 text-black font-bold"
            style={{ background: cardBg }}
            variant="body2"
            color="gray"
          >
            Donate: ${targetAmount}
          </Button>
        </div>
      </CardHeader>

      <CardBody>
        <Typography variant="h4" color="blue-gray" className="uppercase">
          {title}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          {description}
        </Typography>

        {/* Additional sections */}
        {currentAmount && (
          <Typography variant="body2" color="gray">
            Current Amount: {currentAmount}
          </Typography>
        )}
        {endDate && (
          <Typography variant="body2" color="gray">
            End Date: {endDate}
          </Typography>
        )}
        {location && (
          <Typography variant="body2" color="gray">
            Location: {location}
          </Typography>
        )}
        {/* End of additional sections */}
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        {/* Avatar section */}
        <div className="flex items-center -space-x-3">
          <Tooltip content="Natali Craig">
            <Avatar
              size="sm"
              variant="circular"
              alt="natali craig"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
              className="border-2 border-white hover:z-10"
            />
          </Tooltip>
          <Tooltip content="Tania Andrew">
            <Avatar
              size="sm"
              variant="circular"
              alt="tania andrew"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              className="border-2 border-white hover:z-10"
            />
          </Tooltip>
        </div>
        {/* End Avatar section */}

        <Typography color="gray" className="font-normal">
          {category}
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default CategoryDetails;
