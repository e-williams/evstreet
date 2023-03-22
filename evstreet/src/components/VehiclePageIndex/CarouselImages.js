import React from "react";

import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import ShuffleIcon from "@mui/icons-material/Shuffle";

import VEHICLE_IMAGE_MAP from "../imagesGallery";

const CarouselItem = (props) => {
  return (
    <Paper>
      <img src={props.item.url} width="400" height="200" />
      <p>{props.item.location}</p>
    </Paper>
  );
};

const VehiclePageCarousel = ({ vehicleModel }) => {
  const vehicleImages = VEHICLE_IMAGE_MAP[vehicleModel];

  if (!vehicleImages) {
    return <></>;
  }

  return (
    <Carousel NextIcon={<ShuffleIcon />} PrevIcon={<ShuffleIcon />}>
      {VEHICLE_IMAGE_MAP[vehicleModel].map((item) => (
        <CarouselItem key={item.location} item={item} />
      ))}
    </Carousel>
  );
};

export default VehiclePageCarousel;
