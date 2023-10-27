import React from "react";
import AdminUIContainer from "../../layout/AdminUIContainer";
import {
  Breadcrumb,
  BackdropLoader,
  TableV2,
  ExportAsCSV,
} from "../../ComponentsV2";
import { Container, Stack } from "@mui/material";
import { TypographyPrimary } from "../../ComponentsV2/themeComponents";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const tableHeadData = [
  "alert name",
  "collar Uid",
  "Livestock name",
  "threshold value",
  "alarm value",
  "time",
  "date",
  "action",
];

const tableRowData = [
  {
    alertName: "high temperature alert",
    collarUid: "C_1",
    livestockName: "Mori",
    thresholdValue: "40 C",
    alarmValue: "42 C",
    time: "17:50 PM",
    date: "23/09/23",
    action: [
      <DeleteOutlineOutlinedIcon
        fontSize="large"
        //   onClick={() => handleLivestockDelete(col?._id)}
      />,
    ],
  },
  {
    alertName: "high temperature alert",
    collarUid: "C_1",
    livestockName: "Mori",
    thresholdValue: "40 C",
    alarmValue: "42 C",
    time: "17:50 PM",
    date: "23/09/23",
    action: [
      <DeleteOutlineOutlinedIcon
        fontSize="large"
        //   onClick={() => handleLivestockDelete(col?._id)}
      />,
    ],
  },
  {
    alertName: "high temperature alert",
    collarUid: "C_1",
    livestockName: "Mori",
    thresholdValue: "40 C",
    alarmValue: "42 C",
    time: "17:50 PM",
    date: "23/09/23",
    action: [
      <DeleteOutlineOutlinedIcon
        fontSize="large"
        //   onClick={() => handleLivestockDelete(col?._id)}
      />,
    ],
  },
  {
    alertName: "high temperature alert",
    collarUid: "C_1",
    livestockName: "Mori",
    thresholdValue: "40 C",
    alarmValue: "42 C",
    time: "17:50 PM",
    date: "23/09/23",
    action: [
      <DeleteOutlineOutlinedIcon
        fontSize="large"
        //   onClick={() => handleLivestockDelete(col?._id)}
      />,
    ],
  },
  {
    alertName: "high temperature alert",
    collarUid: "C_1",
    livestockName: "Mori",
    thresholdValue: "40 C",
    alarmValue: "42 C",
    time: "17:50 PM",
    date: "23/09/23",
    action: [
      <DeleteOutlineOutlinedIcon
        fontSize="large"
        //   onClick={() => handleLivestockDelete(col?._id)}
      />,
    ],
  },
  {
    alertName: "high temperature alert",
    collarUid: "C_1",
    livestockName: "Mori",
    thresholdValue: "40 C",
    alarmValue: "42 C",
    time: "17:50 PM",
    date: "23/09/23",
    action: [
      <DeleteOutlineOutlinedIcon
        fontSize="large"
        //   onClick={() => handleLivestockDelete(col?._id)}
      />,
    ],
  },
  {
    alertName: "high temperature alert",
    collarUid: "C_1",
    livestockName: "Mori",
    thresholdValue: "40 C",
    alarmValue: "42 C",
    time: "17:50 PM",
    date: "23/09/23",
    action: [
      <DeleteOutlineOutlinedIcon
        fontSize="large"
        //   onClick={() => handleLivestockDelete(col?._id)}
      />,
    ],
  },
  {
    alertName: "high temperature alert",
    collarUID: "C_1",
    livestockName: "Mori",
    thresholdValue: "40 C",
    alarmValue: "42 C",
    time: "17:50 PM",
    date: "23/09/23",
    action: [
      <DeleteOutlineOutlinedIcon
        fontSize="large"
        //   onClick={() => handleLivestockDelete(col?._id)}
      />,
    ],
  },
];

const BreadcrumbData = [
  {
    label: "Alerts",
    link: "alerts",
  },
];

const exportHeaders = tableHeadData
  .map((ele) => ({
    label: ele,
    key: ele
      .split(" ")
      .map((ele, ind) => {
        if (ind === 0) return ele.toLocaleLowerCase();
        else return ele.charAt(0).toUpperCase() + ele.slice(1).toLowerCase();
      })
      .join(""),
  }))
  .filter((ele) => ele.label !== "action");

const exportData = tableRowData.map((ele) => {
  delete ele.action;
  return ele;
});

const AlertsPage = () => {
  return (
    <AdminUIContainer>
      <Container maxWidth="xl" sx={{ marginTop: 8 }}>
        <BackdropLoader open={false} />
        <Breadcrumb data={BreadcrumbData} />
        <TypographyPrimary>Alerts</TypographyPrimary>
        <ExportAsCSV
          headers={exportHeaders}
          data={exportData}
          fileName="alerts"
        />
        <Stack sx={{ width: "100%", py: 3 }}>
          <TableV2
            paneText="showing 10 out of 20 Alerts"
            paneTextColor="#000"
            isBtn={true}
            btnText="export"
            datePicker={true}
            btnColor="#fff"
            btnBg="#B58B5D"
            tableHeadData={tableHeadData}
            tableRowData={tableRowData}
          />
        </Stack>
      </Container>
    </AdminUIContainer>
  );
};

export default AlertsPage;
