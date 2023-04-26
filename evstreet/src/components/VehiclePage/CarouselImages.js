import React from "react";
import { Tooltip } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import vehicle_gallery_map from "../ImageHandling/VehicleImageMap";
import awsDownloadImages from "../../config/aws";

function CarouselImages({ vehicleModel }) {

  const vehicleImages = vehicle_gallery_map[vehicleModel];

  if (!vehicleImages) {
    return <></>;
  }

  const CarouselItem = (props) => {
    return (
        <Tooltip
          title={`IMAGE SOURCE: ${props.item.url}`}
          arrow
          placement="bottom-start"
        >
          <img
            src={props.item.filepath}
            alt="" // must define alt to avoid compilation warning
            width="670"
            height="380"
          />
        </Tooltip>
    );
  };

  return (
    <Carousel>
      {vehicle_gallery_map[vehicleModel].map((item) => (
        <CarouselItem key={item.id} item={item} />
      ))}
    </Carousel>
  );
}

export default CarouselImages;
