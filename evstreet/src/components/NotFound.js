import { React } from "react";
import Header from "./Common/Header";
import { styled } from "@mui/material/styles";
import { Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const NotFoundContainer = styled(Container)({
    fontFamily: "Roboto, Verdana, sans-serif",
    marginTop: 40,
    color: "#7e7e7e",
  });

  const Typo = styled(Typography)({
    marginBottom: 6,
    fontSize: 19,
  });

  const StyledNav = styled(Typography)({
    fontSize: 15,
    cursor: "pointer",
    display: "inline", // limits border to text
    "&:hover": {
      borderBottom: "1px solid #2db34a",
      color: "#2db34a",
    },
  });

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <NotFoundContainer>
        <Typo>Oops, it looks like the page does not exist.</Typo>
        <StyledNav onClick={() => navigate(-1)}>
          Click here to return to the previous page.
        </StyledNav>
      </NotFoundContainer>
    </>
  );
}

export default NotFound;