import React from 'react';
import { Box } from "@mui/material";
import {TabPane} from './';

const LocationStatusCard = () => {
  return (
    <Box className="radius-10" sx={{background:'rgba(71, 205, 116, 0.24)',p:'0px 20px'}}>
       <TabPane
            text="Status"
            secondaryText="10:59 PM, 23/03/23"
            btnText="Safe"
            btnIcon={false}
            btnBgColor="#47CD75"
            onBtnClick={() => {}}
          />
    </Box>
  );
}

export default LocationStatusCard;
