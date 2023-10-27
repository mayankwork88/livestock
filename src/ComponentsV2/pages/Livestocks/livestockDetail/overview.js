import React from "react";
import { Stack, Box } from "@mui/material";
import LivestockInfo from "../../Collars/viewCollarDetails/livestockInfo";
import NetworkCellOutlinedIcon from "@mui/icons-material/NetworkCellOutlined";
import Battery5BarOutlinedIcon from "@mui/icons-material/Battery5BarOutlined";
import {TabPane, ParameterCard, StatusCard} from "../../../ComponentsV2";
import { TypographyPrimary } from "../../../ComponentsV2/themeComponents";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import PetsIcon from "@mui/icons-material/Pets";

const statusCardData = [
  {
    text: "network strength",
    status: "good",
    icon: (
      <NetworkCellOutlinedIcon
        fontSize="large"
        sx={{ mr: 1, color: "#347D00" }}
      />
    ),
    statusColor: "#347D00",
  },
  {
    text: "battery",
    status: "56%",
    icon: (
      <Battery5BarOutlinedIcon
        fontSize="large"
        sx={{ mr: 1, color: "#347D00" }}
      />
    ),
    statusColor: "#F19B4F",
  },
];

const parameterCardData = [
  {
    label: "temperature",
    time: "10:59 PM, 23/08/23",
    value: "78° C",
    icon: <ThermostatIcon sx={{ fontSize: "3em", color: "#fff" }} />,
    iconBg: "#B58B5D",
    valueColor: "err-color",
  },
  {
    label: "heartbeat",
    time: "10:59 PM, 23/08/23",
    value: "78",
    icon: <MonitorHeartIcon sx={{ fontSize: "3em", color: "#fff" }} />,
    iconBg: "#47CD75",
    valueColor: "color-success--dark ",
  },
  {
    label: "steps",
    time: "10:59 PM, 23/08/23",
    value: "5000",
    icon: <PetsIcon sx={{ fontSize: "3em", color: "#B58B5D" }} />,
    iconBg: "#ECDEC6",
    valueColor: "color-success--dark ",
  },
];

const Overview = () => {
  return (
    <Stack my={4} sx={{ flexDirection: { lg: "row", md: "row" }, paddingBottom: { sm:4}}} gap={4}>
      <Stack sx={{ width: { lg: "60%", md: "60%", sm: "100%" },}}>
      <LivestockInfo
        data={[]}
        handelLivestockRemove={() => {}}
        btnText="edit"
        btnBgColor="#86633E"
        onBtnClick={() => {}}
      />
      </Stack>
      <Stack
        sx={{
          width: { lg: "40%", md: "40%", sm: "100%" },
          flexDirection: { lg: "column", md: "column", sm: "row" },
          alignItems:{sm:'flex-start'}
        }}
        gap={2}
      >
        <Stack sx={{width:{lg: "100%", md: "100%",sm:'50%'}}} className="bg-light-gray radius-10" px={2} pb={2}>
          <TabPane
            text="Status"
            secondaryText="Last Update : 10:59 PM, 23/03/23"
            btnText="Safe"
            btnIcon={false}
            btnBgColor="#47CD75"
            onBtnClick={() => {}}
          />
          <Box display="flex" flexDirection="column" gap={2}>
            {parameterCardData?.map((ele) => (
              <ParameterCard
                label={ele.label}
                time={ele.time}
                value={ele.value}
                icon={ele.icon}
                iconBg={ele.iconBg}
                valueColor={ele.valueColor}
              />
            ))}
          </Box>
        </Stack>
        <Stack className="bg-light-gray radius-10" sx={{width:{lg: "100%", md: "100%",sm:'50%'}}} px={2} pb={2}>
          <TypographyPrimary>Collar status</TypographyPrimary>
          <Stack direction="column" gap={1}>
            {statusCardData?.map((card) => (
              <StatusCard
                key={card.text}
                text={card.text}
                status={card.status}
                icon={card.icon}
                statusColor={card.statusColor}
              />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Overview;
