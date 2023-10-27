import React from "react";
import { Stack, Box } from "@mui/material";
import {GetMap,LocationStatusCard, TableV2} from "../../../ComponentsV2";

const logData = [
  {
    title: "safe",
    time: "10:59 PM, 23/08/23",
  },
  {
    title: "unsafe",
    time: "10:59 PM, 23/08/23",
  },
  {
    title: "safe",
    time: "10:59 PM, 23/08/23",
  },
  {
    title: "unsafe",
    time: "10:59 PM, 23/08/23",
  },
  {
    title: "safe",
    time: "10:59 PM, 23/08/23",
  },
  {
    title: "unsafe",
    time: "10:59 PM, 23/08/23",
  },
  {
    title: "safe",
    time: "10:59 PM, 23/08/23",
  },
];

const tableColors = ["#06B95F", "#FC5555"];

const tableHeadData = [];
const LocationLog = () => {
  return (
    <Stack
      justifyContent="space-between"
      sx={{ flexDirection:{xl:'row', lg:'row', sm:'column-reverse'}, width: "100%" }}
      gap={4}
    >
      <Stack sx={{ width:{xl:'30%', lg:'30%', sm:'100%'}}} gap={2}>
        <LocationStatusCard />
        <Box className="bg-light-gray border-10" sx={{ overflow: "hidden" }}>
          <TableV2
            paneText="location status log"
            paneTextColor="#B58B5D"
            btnText="See All"
            isBtn={true}
            btnColor="#fff"
            btnBg="#B58B5D"
            tableHeadData={tableHeadData}
            tableRowData={logData}
            tableColors={tableColors}
          />
        </Box>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ width: "100%" }}
      >
        <GetMap mapWidth="100%" mapHeight="545px" />
      </Stack>
    </Stack>
  );
};

export default LocationLog;
