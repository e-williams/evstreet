import React, { useState } from "react";
import CarouselImages from "./CarouselImages";
import Overview from "./Overview";
import Specifications from "./Specifications";
import { styled } from "@mui/material/styles";
import { Typography, Grid, Container, Box, Tabs, Tab } from "@mui/material";
import { useParams } from "react-router-dom";
import vehicleData from "../../vehicleData.json";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "../Common/ArrowBackIcon";

function VehiclePageContainer() {

  // Get vehicleId param from the URL.
  const { vehicleId } = useParams();
    // useParams() returns an object of key/value pairs of the dynamic params
    // of the current URL.
    // destructured from: const vehicleId = useParams().vehicleId
  console.log({ vehicleId });

  // Set state of variable vehicle to match vehicleId params.
  const [vehicle, setVehicle] = useState(
    vehicleData.find((v) => v.id === +vehicleId)
    // Unary plus operator + converts vehicleId from string to num.
  );

  // const [isOverview, setIsOverview] = useState(true);

  // Define state for Tab selection
  const [value, setValue] = useState(0);

  // Handle Tab selection
  const handleSelection = (event, newValue) => {
    setValue(newValue);
  };

  const NoVehicleWrapper = styled(Container)({
    fontFamily: "Roboto, Verdana, sans-serif",
    marginTop: 40,
    color: "#7e7e7e",
  });

  const NoVehicleTypo = styled(Typography)({
    marginBottom: 6,
    fontSize: 19,
  });

  const StyledNav = styled(Typography)({
    fontSize: 15,
    cursor: "pointer",
    display: "inline",
    "&:hover": {
      borderBottom: "1px solid #2db34a",
      color: "#2db34a",
    },
  });

  const navigate = useNavigate();

  const VehiclePageWrapper = styled(Box)({
    fontFamily: "Roboto, Verdana, sans-serif",
    color: "#7e7e7e",
    width: "100%",
  });

  const HeaderTypo = styled(Typography)({
    textAlign: "center",
  });

  const StyledTab = styled(Tab)({
    fontSize: 17,
  });

  if (!vehicle) {
    // if vehicle evaluates to false
    return (
        <NoVehicleWrapper>
          <NoVehicleTypo>Oops, that vehicle does not exist.</NoVehicleTypo>
          <StyledNav onClick={() => navigate(-1)}>
            Click here to return to the previous page.
          </StyledNav>
        </NoVehicleWrapper>
    );
  } else {
    return (
      <VehiclePageWrapper>
        <Grid container>
          <Grid item onClick={() => navigate(-1)}>
            <ArrowBackIcon />
          </Grid>
          <Grid item justifyContent="center" sx={{ width: "95%" }}>
            <HeaderTypo variant="h6">
              {vehicle.make} {vehicle.model}
            </HeaderTypo>
          </Grid>
        </Grid>
        <CarouselImages vehicleModel={vehicle.model} />
        <Box>
          <Tabs
            value={value}
            onChange={handleSelection}
            centered
          >
            <StyledTab label="Overview" />
            <StyledTab label="Specifications" />
          </Tabs>
        </Box>
        {!value ? <Overview /> : <Specifications />}
        {/*
        <HeaderSelection
          value={value}
          setValue={setValue}
          //setIsOverview={setIsOverview}
          //isOverview={isOverview}
        />
        {isOverview ? <Overview /> : <Specifications />}
        */}
      </VehiclePageWrapper>
    );
  }
}

export default VehiclePageContainer;
