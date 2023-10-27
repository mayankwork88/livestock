import React from "react";
import AdminUIContainer from "../../layout/AdminUIContainer";
import {Breadcrumb, CustomTabs} from "../../ComponentsV2";
import { Typography, Container } from "@mui/material";
import LiveLocation from "./liveLocation";
import CreateGeoFence from "./createGeoFence";

const Map = () => {
  const tabData = [
    {
      label: "live location",
      child: <LiveLocation />,
    },
    {
      label: "Geofence",
      child: <CreateGeoFence />,
    },
  ];

  const BreadcrumbData = [{
    label:'Geofence',
    link:'map'
  }]
  return (
    <AdminUIContainer>
      <Container maxWidth="xl" sx={{ marginTop: 8 }}>
        <Breadcrumb data={BreadcrumbData} />
        <Typography variant="h2" sx={{ fontSize:'3rem',fontWeight: 600 }}>
          GeoFence
        </Typography>
        <CustomTabs tabData={tabData} />
      </Container>
    </AdminUIContainer>
  );
};

export default Map;
