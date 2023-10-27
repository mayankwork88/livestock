import React, { useState,useEffect, useContext } from "react";
import AdminUIContainer from "../../../layout/AdminUIContainer";
import {Breadcrumb, CustomTabs,BackdropLoader} from "../../../ComponentsV2";
import { Container } from "@mui/material";
import { TypographyPrimary } from "../../../ComponentsV2/themeComponents";
import Overview from "./overview";
import { useParams } from "react-router-dom";
import { getCollarDetails } from "../../../apis/collarServices";
import AssignLivestock from "./assignLivestock";
import { request } from "../../../apis/axios-utils";
import { CollarContext } from "../../../context/CollarContext";

const ViewCollarDetails = () => {
  const [data, setData] = useState({
    collarUID: '',
    collarName: '',
    collarMacId: '',
    status: "online",
    networkStrength: "good",
    battery: "56%",
  });
  const { id } = useParams();
  const {openBackdropLoader, setOpenBackdropLoader} = useContext(CollarContext);

    useEffect(() => {
      request({url:`/devices/getDeviceByID?deviceID=${id}`})
        .then((res) => {
          const {data} = res?.data;
            let formatedData = {
              collarId:data?._id,
              livestockId:data?.liveStock?._id || null,
                collarUID: data?.uID,
                collarName: data?.deviceName,
                collarMacId: data?.macID,
                status: data?.status?"online":'offline',
                networkStrength: data?.NetworkStrength,
                battery:`${data?.Battery}%`,
                livestock:data?.liveStock ? {
                  uid:data?.liveStock?.uID,
                  name:data?.liveStock?.name,
                  gender:'male',
                  img:data?.liveStock?.imgPath
                }:null
              }
            setData(formatedData)
        })
        .catch((e) => alert(e.message))
        .finally(()=> setOpenBackdropLoader(false))
    }, []);

  const tabData = [
    {
      label: "overview",
      child: <Overview data={data} />,
    },
    {
      label: "assigned",
      child: <AssignLivestock data={data}/>,
    },
    {
      label: "logs",
      child: <h1>Logs</h1>,
    },
  ];

  const BreadcrumbData = [{
    label:'collar management',
    link:'collars'
  },{
    label:data?.collarUID?data.collarUID:'Collar UID',
    link:`collars/${data?.collarUID}`
  }]

  return (
    <AdminUIContainer>
      <Container maxWidth="xl" sx={{ marginTop: 8 }}>
       <BackdropLoader open={openBackdropLoader} />
        <Breadcrumb data={BreadcrumbData} />
        <TypographyPrimary sx={{textTransform:'capitalize'}}>{data?.collarUID}</TypographyPrimary>
        <CustomTabs tabData={tabData} />
      </Container>
    </AdminUIContainer>
  );
};

export default ViewCollarDetails;
