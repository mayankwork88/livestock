import React from "react";
import {
  Stack,
  TextField,
  Box,
  Button,
  MenuItem,
} from "@mui/material";
import { TypographyPrimary } from "../../ComponentsV2/themeComponents";
import { styled } from "@mui/system";
import { useContext } from "react";
import { ProfileContext } from "../../context/profileContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import  {showProfileSchema} from "../../utils/validationSchema";

const common = {
    fontSize: "1.5rem",
    letterSpacing: 0.5,
    textTransform: "capitalize",
    fontWeight: 600,
    margin: "10px 0",
    padding: "10px 20px",
    borderRadius: "10px",

  };
  
  const ButtonPrimary = styled(Button)({
    ...common,
    background: "#B58B5D",
    "&:hover":{
      background: "#C6A580",
      color:'#fff'
    },
  });
  
  const ButtonOutlined = styled(Button)({
    ...common,
    color: "#B58B5D",
    marginRight: "10px",
    borderColor: "#B58B5D",
    "&:hover":{
      background: "#fff",
      borderColor:'#C6A580'
    },
  });
  
  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];

const ShowProfile = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(showProfileSchema) });
  

    const getTextFiled = (label, name, value, type) => {
        return (
          <TextField
            fullWidth
            //   disabled
            select={type === 'select'?true:false}
            id={name}
            label={label}
            variant="outlined"
            size="large"
            sx={{ mr: 1 }}
            value={value}
            name={name}
            {...register(name,{required:true})}
            onChange={handleProfileChange}
            error={errors?.[name]}
            helperText={errors?.[name]?.message}
            placeholder={`Please Enter your ${label}`}
            multiline={type === 'textArea'?true:false}
            rows={type === 'textArea'?11:2}
            maxRows={type === 'textArea'?11:2}
          >
            {type === 'select' && names.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        );
      };

      const {showProfileData, handleProfileChange,handleProfileEdit} = useContext(ProfileContext);
  return (
    <Stack width="100%">
    <TypographyPrimary sx={{ fontSize: "2rem" }}>
      Profile
    </TypographyPrimary>
    <form onSubmit={handleSubmit(handleProfileEdit)}>
    <Stack >
      <Stack gap={3} p='20px 15px' borderRadius={'10px'} border='1px solid #dddddd'>
        <Box display="flex" gap={5}>
          {getTextFiled("First Name", "firstName",showProfileData.firstName, 'textField')}
          {getTextFiled("Last Name", "lastName", showProfileData?.lastName, 'textField')}
        </Box>
        <Box display="flex" gap={5}>
          {getTextFiled("Phone Number", "phoneNumber", showProfileData?.phoneNumber, 'textField')}
          {getTextFiled("Email", "email", showProfileData?.email, 'textField')}
        </Box>
        <Box display="flex" gap={5}>
          <Box width="100%" display="flex" flexWrap="wrap">
            {getTextFiled("Full Address", "address", showProfileData?.address, 'textArea')}
          </Box>
          <Box width="100%" display="flex" flexWrap="wrap" gap={3}>
            {getTextFiled("Pincode", "pincode", showProfileData?.pincode, 'textFiled')}
            {getTextFiled("State", "state", showProfileData?.state, 'select')}
            {getTextFiled("Country", "country", showProfileData?.country, 'select')}
          </Box>
        </Box>
      </Stack>
      <Box display="flex" justifyContent="flex-end" mt={5}>
        <ButtonOutlined
          variant="outlined"
          sx={{ minWidth: "100px" }}
          onClick={() => {}}
        >
          Delete Profile
        </ButtonOutlined>
        <ButtonPrimary
          variant="contained"
          type="submit"
          //   onClick={handleGeofenceSave}
        >
          Edit Profile
        </ButtonPrimary>
      </Box>
    </Stack>
    </form>
  </Stack>
  );
}

export default ShowProfile;
