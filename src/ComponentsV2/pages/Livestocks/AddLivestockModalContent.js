import React,{useContext} from "react";
import { Box, Stack } from "@mui/material";
import {CustomInput} from "../../ComponentsV2";
import {
  ButtonPrimaryRound,
  ButtonOutlinedRound,
  LoadingBtn,
  TypographyWithBg
} from "../../ComponentsV2/themeComponents";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { LivestockContext } from "../../context/LivestockContext";
import * as Yup from "yup";

const AddLivestockModalContent = () => {
  const {
    handleLivestockModalClose,
    addNewLivestock,
    handleAddLivestockChange,
    addNewLivestockLoading,
    handleAddLivestock,
  } = useContext(LivestockContext);

  const addLivestockValidationSchema = Yup.object().shape({
    collarUID: Yup.string().required(),
    livestockUID: Yup.string().required().min(3, "Livestock UID must be long"),
    livestockName: Yup.string()
      .required()
      .min(3, "Livestock Name must be long"),
    livestockGender: Yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(addLivestockValidationSchema) });

  return (
    <form onSubmit={handleSubmit(handleAddLivestock)}>
      <Box>
        <TypographyWithBg id="modal-modal-title" variant="h6" component="h2">
          Add Livestock
        </TypographyWithBg>
        <Stack>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              border: "1px solid #8F8F8F",
              minHeight: "30vh",
              m: 2,
              borderRadius: "10px",
            }}
          >
            <AddCircleOutlineOutlinedIcon
              sx={{ color: "#8F8F8F", fontSize: 150 }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              mt: 1,
            }}
          >
            <CustomInput
              label="Collar"
              select
              register={register}
              errors={errors}
              value={addNewLivestock?.collarUID}
              name="collarUID"
              isError={{ error: false, message: "" }}
              onChange={handleAddLivestockChange}
            />
            <CustomInput
              label="Livestock UID"
              register={register}
              errors={errors}
              value={addNewLivestock?.livestockUID}
              name="livestockUID"
              isError={{ error: false, message: "" }}
              onChange={handleAddLivestockChange}
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
              label="Livestock Name"
              register={register}
              errors={errors}
              value={addNewLivestock?.livestockName}
              name="livestockName"
              isError={{ error: false, message: "" }}
              onChange={handleAddLivestockChange}
            />
            <CustomInput
              label="Gender"
              select
              register={register}
              errors={errors}
              value={addNewLivestock?.livestockGender}
              name="livestockGender"
              isError={{ error: false, message: "" }}
              onChange={handleAddLivestockChange}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "right",
              p: 2,
            }}
          >
            <ButtonOutlinedRound
              variant="outlined"
              size="large"
              onClick={handleLivestockModalClose}
            >
              Cancel
            </ButtonOutlinedRound>
            {addNewLivestockLoading ? (
              <LoadingBtn
                loading
                type="submit"
                variant="contained"
                size="large"
              >
                Save
              </LoadingBtn>
            ) : (
              <ButtonPrimaryRound
                variant="contained"
                size="large"
                type="submit"
              >
                Save
              </ButtonPrimaryRound>
            )}
          </Box>
        </Stack>
      </Box>
    </form>
  );
};

export default AddLivestockModalContent;
