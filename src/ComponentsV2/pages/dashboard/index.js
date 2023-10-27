import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import AdminUIContainer from "../../layout/AdminUIContainer";
import {GetMap, DashboardCard} from "../../ComponentsV2";
import {ClientImg, GatewayImg, DeviceImg, BMImg} from "../../assets";

const AdminDashBoard = () => {
  const deviceData = [
    {
      id: 1,
      title: "total collars",
      total: 78,
      img: ClientImg,
    },
    {
      id: 2,
      title: "total livestocks",
      total: 70,
      img: GatewayImg,
    },
    {
      id: 3,
      title: "safe livestocks",
      total: 60,
      img: BMImg,
    },
    {
      id: 4,
      title: "unsafe livestocks",
      total: 10,
      img: DeviceImg,
    },
    {
      id: 5,
      title: "alerts",
      total: 10,
      img: DeviceImg,
    },
  ];
  return (
    <>
      <AdminUIContainer>
        <Stack>
          <Stack
            style={{
              height: "160px",
              width: "100%",
              backgroundColor: "#B58B5D",
            }}
          >
            <Typography
              className="fs24px bold white_color p_t25px"
              sx={{ p: 5 }}
            >
              Welcome Suresh,
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            flexGrow={1}
            p={5}
            gap={4}
            marginTop="-90px"
          >
            <Stack
              direction="column"
              justifyContent="space-between"
              sx={{ width: { lg: "25%", md: "35%", sm: "40%" } }}
              gap={3}
            >
              {deviceData?.map((ele) => (
                <DashboardCard
                  key={ele.id}
                  title={ele.title}
                  total={ele.total}
                  img={ele.img}
                />
              ))}
            </Stack>
            <Box
              sx={{
                width: { lg: "75%", md: "65%", sm: "60%" },
                height: { lg: "75vh", md: "75vh", sm: "55vh" },
              }}
            >
              <GetMap mapWidth="100%" mapHeight="100%" isLivestocks={true} />
            </Box>
          </Stack>
        </Stack>
      </AdminUIContainer>
    </>
  );
};

export default AdminDashBoard;
