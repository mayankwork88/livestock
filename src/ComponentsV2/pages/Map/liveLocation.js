import React from "react";
import {Box, Stack } from "@mui/material";
import {GetMap, CustomTable} from "../../ComponentsV2";

const LiveLocation = () => {

  const tableHeadData = ["Safe Livestock List", "Device"];
  const rows = [
    {
      liveStockName: "Cow 1 bella",
      device: "Cow1",
    },
    {
      liveStockName: "Cow 1 bella",
      device: "Cow1",
    },
    {
      liveStockName: "Cow 1 bella",
      device: "Cow1",
    },
    {
      liveStockName: "Cow 1 bella",
      device: "Cow1",
    },
    {
      liveStockName: "Cow 1 bella",
      device: "Cow1",
    },
  ];
  return (
        <>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ width: "100%", marginTop:3 }}
        >
          <GetMap mapWidth="100%" mapHeight="500px"/>
        </Stack>
        <Stack direction="row" justifyContent="space-between" gap={5}>
          <Box sx={{ margin: "20px 0", width:'100%'}}>
            <CustomTable headBackgroundColor="#347D00" tableHeadData={tableHeadData} tableRowData={rows}/>
          </Box>
          <Box sx={{ margin: "20px 0",width:'100%' }}>
            <CustomTable headBackgroundColor="#FF0505" tableHeadData={tableHeadData} tableRowData={rows} />
          </Box>
        </Stack>
        </>
  );
};

export default LiveLocation;
