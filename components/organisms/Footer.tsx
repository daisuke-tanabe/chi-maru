import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography py={2}>&copy; 2022 ち。</Typography>
      </Container>
    </footer>
  );
};

export default Footer
