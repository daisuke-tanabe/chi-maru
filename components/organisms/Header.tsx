import React from "react";
import Link from "next/link";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link"

const Header = () => {
  return (
    <header>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography variant="h4" component="h1" py={18}>
          <Link
            href="/"
            prefetch={false}
            passHref
          >
            <MuiLink
              underline="none"
              css={{
                color: '#333'
              }}
            >
              ち。
            </MuiLink>
          </Link>
        </Typography>
      </Container>
    </header>
  );
};

export default Header;
