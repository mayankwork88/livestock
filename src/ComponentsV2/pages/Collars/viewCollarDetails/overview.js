import { Box, Stack } from "@mui/material";
import React, { useState, useEffect } from "react";
import {TabPane,CustomInput,StatusCard} from "../../../ComponentsV2";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {InfoOutlinedIcon,NetworkCellOutlinedIcon,Battery5BarOutlinedIcon} from "../../../icons";
import * as Yup from "yup";
import { TypographyPrimary } from "../../../ComponentsV2/themeComponents";
import { request } from "../../../apis/axios-utils";

const EditCollarValidationSchema = Yup.object().shape({
  collarUID: Yup.string().required().min(3, "Collar UID must be long"),
  collarName: Yup.string().required().min(3, "Collar Name must be long"),
});

const statusCardData = [
  {
    text: "status",
    status: "online",
    icon: <InfoOutlinedIcon fontSize="large" sx={{ mr: 1 }} />,
    statusColor: "#347D00",
  },
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

const Overview = ({ data }) => {
  const [isEditCollarInfo, setIsEditCollarInfo] = useState(false);
  const [collarInfoEdit, setCollarInfoEdit] = useState({
    collarUID: "",
    collarName: "",
  });
  useEffect(() => {
    setCollarInfoEdit({
      collarUID: data?.collarUID,
      collarName: data?.collarName,
    });
    setValue("collarUID", data?.collarUID || "");
    setValue("collarName", data?.collarName || "");
  }, [data]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(EditCollarValidationSchema) });

  const handleCollarInfoEditChange = (e) => {
    const { name, value } = e.target;
    setCollarInfoEdit({ ...collarInfoEdit, [name]: value });
  };

  const handelCollarNewInfo = async () => {
    setIsEditCollarInfo(!isEditCollarInfo);
    if (isEditCollarInfo) {
      const body = { deviceId:data.collarId, deviceName: collarInfoEdit?.collarName}
      try{
      const edit = await request({url:`/devices/update`,method:"POST", data:body});
      alert(edit?.data?.message)
      }catch(err){
        alert(err?.message)
      }
       }
  };
  return (
    <form onSubmit={handleSubmit(handelCollarNewInfo)}>
      <Stack my={4} direction="row" justifyContent="space-between">
        <Stack
          sx={{
            width: "55%",
            background: "#F7F8FD",
            p: 2,
            borderRadius: "10px",
          }}
        >
          <Box px={1.5}>
            <TabPane
              text="Collar Information"
              btnText={isEditCollarInfo ? "Save" : "Edit"}
              btnIcon={false}
              type="submit"
            />
          </Box>
          <Stack>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                mt: 1,
              }}
            >
              <CustomInput
                disabled={!isEditCollarInfo}
                label="collar UID"
                register={register}
                errors={errors}
                value={collarInfoEdit?.collarUID}
                name="collarUID"
                //   isError={isError}
                onChange={handleCollarInfoEditChange}
              />
              <CustomInput
                disabled={!isEditCollarInfo}
                label="collar name"
                register={register}
                errors={errors}
                value={collarInfoEdit?.collarName}
                name="collarName"
                //   isError={{ error: false, message: "" }}
                onChange={handleCollarInfoEditChange}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <CustomInput
                disabled={true}
                label="collar MAC ID"
                register={register}
                errors={errors}
                value={data?.collarMacId}
                name="collarMacID"
                //   isError={{ error: false, message: "" }}
                //   onChange={handleAddCollarChange}
              />
            </Box>
          </Stack>
        </Stack>
        <Box
          sx={{
            width: "43%",
            background: "#F7F8FD",
            p: 2,
            borderRadius: "10px",
            justifyContent: "space-evenly",
          }}
        >
          <TypographyPrimary>Collar status</TypographyPrimary>
          <Stack direction='column' gap={1}>
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
        </Box>
      </Stack>
    </form>
  );
};

export default Overview;
