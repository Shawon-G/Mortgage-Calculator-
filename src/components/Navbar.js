import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container, Stack } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Toolbar>
          <Stack direction="column" my="5px">
            <Typography variant="h3" component="div">
              Bank for Mortgages
            </Typography>
            <Typography variant="h6" component="div">
              - Mortgage Calculator Application System
            </Typography>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
