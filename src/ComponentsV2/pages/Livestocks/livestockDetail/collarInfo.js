import React, { useState } from "react";
import { Stack, Box, Divider, Container } from "@mui/material";
import {TabPane,StatusCard, AddBtn, CustomModal} from "../../../ComponentsV2";
import { TypographyPrimary } from "../../../ComponentsV2/themeComponents";
import NetworkCellOutlinedIcon from "@mui/icons-material/NetworkCellOutlined";
import Battery5BarOutlinedIcon from "@mui/icons-material/Battery5BarOutlined";
import ShowLivestocks from "../../Collars/viewCollarDetails/showLivestocks";

const deviceInfoData = [
  {
    label: "collar",
    value: "collar_1",
  },
  {
    label: "collar name",
    value: "device name",
  },
  {
    label: "MAC ID",
    value: "#3537HDB83728",
  },
  {
    label: "added on",
    value: "24/02/23, 04:23 PM",
  },
  {
    label: "Added by",
    value: "username",
  },
];

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


const data = []

const CollarInfo = () => {
  const [showModal, setShowModal] = useState(false);
  const isCollar = false;
  return (
    <>
      {isCollar ? (
        <Stack
          my={4}
          direction="row"
          width="100%"
          alignItems="flex-start"
          gap={4}
        >
          <Stack
            width="55%"
            sx={{ border: "1px solid #dddddd", borderRadius: "10px" }}
          >
            <Box p="10px 20px">
              <TabPane
                text="Device Info"
                btnText="remove"
                btnIcon={false}
                btnBgColor="#FF0505"
                onBtnClick={() => {}}
              />
            </Box>
            <Divider />
            <Stack px="20px">
              <Box display="flex" justifyContent="flex-start">
                <TypographyPrimary
                  sx={{
                    color: "#B5B5C3",
                    minWidth: "30%",
                    display: "flex",
                    justifyContent: "space-between",
                    pr: 5,
                  }}
                >
                  Status
                  <Box component="span">:</Box>
                </TypographyPrimary>
                <TypographyPrimary sx={{ color: "#5FCA5D" }}>
                  Online
                </TypographyPrimary>
              </Box>
              {deviceInfoData?.map((ele) => (
                <Box display="flex" justifyContent="flex-start">
                  <TypographyPrimary
                    sx={{
                      color: "#B5B5C3",
                      minWidth: "30%",
                      display: "flex",
                      justifyContent: "space-between",
                      pr: 5,
                    }}
                  >
                    {ele.label}
                    <Box component="span">:</Box>
                  </TypographyPrimary>
                  <TypographyPrimary sx={{ color: "#222222" }}>
                    {ele.value}
                  </TypographyPrimary>
                </Box>
              ))}
            </Stack>
          </Stack>
          <Stack
            className="radius-10"
            sx={{ p: 2, border: "1px solid #dddddd" }}
            flexGrow={0}
            width="45%"
          >
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
      ) : (
        <Stack my={4}>
          <AddBtn onClick={() => setShowModal(true)} />
        </Stack>
      )}
        <CustomModal
        content={<ShowLivestocks data={data}/>}
        openModal={showModal}
        handleClose={() => setShowModal(false)}
      />
    </>
  );
};

export default CollarInfo;
