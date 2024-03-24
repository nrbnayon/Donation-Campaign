import PropTypes from "prop-types";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const CategoryList = ({ item }) => {
  const {
    id,
    title,
    // description,
    // img,
    category,
    cardBg,
    // targetAmount,
    // currentAmount,
    // endDate,
    // location,
  } = item || {};
  return (
    <Link to={`/donation-details/${id}`}>
      <Card className="mt-6" style={{ background: cardBg }}>
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
          />
        </CardHeader>
        <CardBody className="mt-4 mb-2 py-0 ">
          <Button>{category}</Button>
        </CardBody>
        <CardFooter className="py-0 my-0">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          {/* <Typography>{description}</Typography> */}
        </CardFooter>
      </Card>
    </Link>
  );
};

CategoryList.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CategoryList;
