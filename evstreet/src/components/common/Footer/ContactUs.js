import Header from "../Header";
import Footer from "./Footer";
import ArrowBackIcon from "../ArrowBackIcon";
import { styled } from "@mui/material/styles";
import { Typography, Container, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ContactUsWrapper = styled(Container)({
  color: "#7e7e7e",
});

const StyledTypo = styled(Typography)({
  marginBottom: 6,
  fontWeight: "300",
});

function ContactUs() {

  const navigate = useNavigate();

  return (
    <>
      <Header />
      < Container maxWidth="xl" onClick={() => navigate("/")}>
        <ArrowBackIcon />
      </Container>
      <ContactUsWrapper maxWidth="lg">
        <Box maxWidth="sm">
          <StyledTypo>
            The ability to contact EVstreet will exist in the future!
          </StyledTypo>
          <StyledTypo>
            Thank you for your interest in reaching us.
          </StyledTypo>
        </Box>
      </ContactUsWrapper>
      <Footer />
    </>
  );
}

export default ContactUs;