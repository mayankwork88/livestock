import React from "react";
import { Box, Stack } from "@mui/material";
import { TypographyWithBg } from "../../ComponentsV2/themeComponents";
import {CustomInput, InfoPane} from "../../ComponentsV2";
import {
  ButtonPrimaryRound,
  ButtonOutlinedRound,
  LoadingBtn
} from "../../ComponentsV2/themeComponents";
import { useContext } from "react";
import { CollarContext } from "../../context/CollarContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const AddCollarModalContent = () => {
  const {
    handleAddCollarChange,
    handleAddCollar,
    newCollar,
    isError,
    handleAddCollarModalClose,
    addCollarValidationSchema,
    isLoading,
  } = useContext(CollarContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(addCollarValidationSchema) });

  return (
    <form onSubmit={handleSubmit(handleAddCollar)}>
      <Box>
        <TypographyWithBg id="modal-modal-title" variant="h6" component="h2">
          Add Collar
        </TypographyWithBg>
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
              label="collar UID"
              register={register}
              errors={errors}
              value={newCollar?.collarUID}
              name="collarUID"
              isError={isError}
              onChange={handleAddCollarChange}
            />
            <CustomInput
              label="collar name"
              register={register}
              errors={errors}
              value={newCollar?.collarName}
              name="collarName"
              isError={{ error: false, message: "" }}
              onChange={handleAddCollarChange}
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
              label="collar MAC ID"
              register={register}
              errors={errors}
              value={newCollar?.collarMacID}
              name="collarMacID"
              isError={{ error: false, message: "" }}
              onChange={handleAddCollarChange}
            />
          </Box>
          <InfoPane message="Scan QR code on collar to get mac id" />
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
              onClick={handleAddCollarModalClose}
            >
              Cancel
            </ButtonOutlinedRound>
            {isLoading ? (
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
              type="submit"
              loading={true}
              variant="contained"
              size="large"
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

export default AddCollarModalContent;
