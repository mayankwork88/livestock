import React from "react";
import AdminUIContainer from "../../../layout/AdminUIContainer";
import {Breadcrumb,CustomTabs} from "../../../ComponentsV2";
import { Container } from "@mui/material";
import { TypographyPrimary } from "../../../ComponentsV2/themeComponents";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Overview from "./overview";
import Location from "./location";
import Health from "./health";
import Alerts from "./alerts";
import CollarInfo from "./collarInfo";

const LivestockDetails = () => {
  const [data, setData] = useState({
    collarUID: '',
    collarName: '',
    collarMacId: '',
    status: "online",
    networkStrength: "good",
    battery: "56%",
  });
  const { id } = useParams();

    // useEffect(() => {
    //   getCollarDetails(id)
    //     .then((res) => {
    //       // console.log(res.data,"getCollarDetailsgetCollarDetails")
    //         let data = {
    //           collarId:res?.data?._id,
    //           livestockId:res?.data?.liveStock?._id,
    //             collarUID: res?.data?.uID,
    //             collarName: res?.data?.deviceName,
    //             collarMacId: res?.data?.macID,
    //             status: res?.data?.status?"online":'offline',
    //             networkStrength: res?.data?.NetworkStrength,
    //             battery:`${res?.data?.Battery}%`,
    //             livestock:res?.data?.liveStock ? {
    //               uid:res?.data?.liveStock?.uID,
    //               name:res?.data?.liveStock?.name,
    //               gender:'male',
    //               img:res?.data?.liveStock?.imgPath
    //             }:null
    //           }
    //           console.log(res.data, "getCollarDetailsgetCollarDetails")
    //         setData(data)
    //     })
    //     .catch((e) => alert(e.message));
    // }, []);

  const tabData = [
    {
      label: "overview",
      child: <Overview/>,
    },
    {
      label: "location",
      child: <Location/>,
    },
    {
      label: "health",
      child: <Health/>,
    },
    {
      label: "alerts",
      child: <Alerts/>,
    },
    {
      label: "collar",
      child: <CollarInfo/>,
    },
  ];

  const BreadcrumbData = [{
    label:'livestocks',
    link:'livestocks'
  },{
    label:data?.collarUID?data.collarUID:'Collar UID',
    link:`livestocks/${data?.collarUID}`
  }]

  return (
    <AdminUIContainer>
      <Container maxWidth="xl" sx={{ marginTop: 8 }}>
        <Breadcrumb data={BreadcrumbData} />
        <TypographyPrimary>{data?.collarUID}</TypographyPrimary>
        <CustomTabs tabData={tabData} />
      </Container>
    </AdminUIContainer>
  );
};

export default LivestockDetails;
