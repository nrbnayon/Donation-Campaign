import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Donates = ({ item }) => {
  const {
    id,
    title,
    // description,
    img,
    category,
    targetAmount,
    currentAmount,
    endDate,
    location,
  } = item || {};
  return (
    <Card className="w-full max-w-[48rem] flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" ||
            img
          }
          alt={title || "Image Alt Text"}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          {category || "Default Category"}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {title || "Default Title"}
        </Typography>
        {/* <Typography color="gray" className="mb-8 font-normal">
          {description ||
            "Default Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        </Typography> */}
        <div className="flex items-center justify-between mb-4">
          <Typography variant="body2" color="gray" className="mr-4">
            Target Amount: ${targetAmount || 0}
          </Typography>
          <Typography variant="body2" color="gray">
            Current Amount: ${currentAmount || 0}
          </Typography>
        </div>
        <div className="flex items-center justify-between mb-4">
          <Typography variant="body2" color="gray" className="mr-4">
            End Date: {endDate || "Not specified"}
          </Typography>
          <Typography variant="body2" color="gray">
            Location: {location || "Not specified"}
          </Typography>
        </div>
        <a href="#" className="inline-block">
          <Link
            to={`/donation-details/${id}`}
            variant="text"
            className="flex items-center gap-2 btn"
          >
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </a>
      </CardBody>
    </Card>
  );
};

Donates.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Donates;
