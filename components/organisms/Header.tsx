import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";

export const Header = () => {
  return (
    <header>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography variant="h4" component="h1" py={18}>ち。</Typography>
      </Container>
    </header>
  );
};
