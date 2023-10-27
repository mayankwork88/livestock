import React, { useContext } from "react";
import { Box, Stack } from "@mui/material";
import { TypographyWithBg, TypographyPrimary, ButtonOutlinedRound } from "../../ComponentsV2/themeComponents";
import { CollarContext } from "../../context/CollarContext";

const DeleteCollarModalContent = () => {

    const {handleCollarModalClose} = useContext(CollarContext)

  return (
    <div>
      <Box>
        <TypographyWithBg sx={{background:'#fc5555'}} id="modal-modal-title" variant="h6" component="h2">
          Warning
        </TypographyWithBg>
        <Box sx={{padding:'10px 30px',pb:0}}>
        <TypographyPrimary sx={{mb:3}}>To delete this device, you have to unassign livestock first.</TypographyPrimary>
        <TypographyPrimary>Steps to Unassign Livestock</TypographyPrimary>
        <Box sx={{pl:2}}>
        <TypographyPrimary>1. Open Device page</TypographyPrimary>
        <TypographyPrimary>2. Click on assign tab</TypographyPrimary>
        <TypographyPrimary>3. Remove assigned livestock</TypographyPrimary>
        </Box>
        </Box>
        <Stack>
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
             sx={{background:'#fc5555', border:"1px solid #fc5555", color:'#fff'}}
             onClick={handleCollarModalClose}
            >
              Cancel
            </ButtonOutlinedRound>
            </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default DeleteCollarModalContent;
