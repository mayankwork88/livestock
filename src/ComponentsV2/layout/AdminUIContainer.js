import React from "react";
import {Grid, Stack } from "@mui/material";
import {HeaderAdmin, Sidebar} from "../ComponentsV2";

const AdminUIContainer = ({ children }) => {

  return (
    <>
      <Grid sx={{ marginBottom: "20px" }}>
        <Stack direction="coloumn">
          <Grid
            sx={{
              width: "18%",
              position: "relative",
              display: { lg: "inline", md: "none", sm:'none' },
            }}
          >
            <Sidebar />
          </Grid>
          <Grid
            sx={{
              padding: "15px 0",
              top: "0px",
              backgroundColor: "white",
              zIndex: 999,
              height: "10vh",
              boxShadow: "0px 5px 5px -7px black",
              width: { lg: "85%", md: "100%", sm:'100%' },
            }}
          >
            <HeaderAdmin />
            {children}
          </Grid>
        </Stack>
      </Grid>
    </>
  );
};

export default AdminUIContainer;
