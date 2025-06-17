import React from "react";
import { Box, Typography, Link } from "@mui/material";
import ThemeElement from "./ThemeElement";
import { GitHub, LinkedIn, Copyright } from "@mui/icons-material";

const FooterElement: React.FC = () => {
  return (
    <ThemeElement>
      <Box
        component="footer"
        sx={{
          backgroundColor: "paletteThirdColour.main",
          color: "white",
          padding: "1rem",
          textAlign: "center",
          marginTop: "auto",
        }}
      >
        <Typography variant="body1">Ankara/Türkiye</Typography>
        <Box
          sx={{
            margin: "1rem 0",
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <Link
            href="https://github.com/hcaslan"
            color="inherit"
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <GitHub sx={{ marginRight: "0.5rem" }} /> GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/hcaslanozen/"
            color="inherit"
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <LinkedIn sx={{ marginRight: "0.5rem" }} /> LinkedIn
          </Link>
        </Box>
        <Typography
          variant="body2"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Copyright sx={{ marginRight: "0.5rem" }} />{" "}
          2024 Heval Can Aslan ÖZEN. All rights reserved.
        </Typography>
      </Box>
    </ThemeElement>
  );
};

export default FooterElement;
