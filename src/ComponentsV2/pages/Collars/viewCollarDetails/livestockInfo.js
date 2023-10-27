import React from 'react';
import { Stack, Box, TextField } from "@mui/material";
import {TabPane} from '../../../ComponentsV2';
import {Cow} from "../../../assets";

const LivestockInfo = ({data, btnText, btnBgColor, onBtnClick}) => {

    const getTextFiled = (label, name, value) => {
        return (
          <TextField
          fullWidth
          disabled
          id={name}
          label={label}
          variant="outlined"
          size="large"
          sx={{ mr: 1 }}
          value={value}
          name={name}
        />
        )
      }

      
  return (
    <Stack
          sx={{
            background: "#F7F8FD",
            p: 2,
            pb:4,
            borderRadius: "10px",
          }}
          gap={3}
        >
          <TabPane
            text="Livestock Information"
            btnText={btnText}
            btnIcon={false}
            btnBgColor={btnBgColor}
            onBtnClick={onBtnClick}
          />
          <Box
            component="img"
            sx={{
              height: "33vh",
              width: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            alt="The house from the offer."
            src={Cow}
          />
          <Stack direction="row" gap={2}>
            {getTextFiled('Collar UID', 'collarUid', data?.collarUID)}
             {getTextFiled('Livestock UID', 'livestockUid', data?.livestock?.uid)}
          </Stack>
          <Stack direction="row" gap={2}>
           {getTextFiled('Livestock Name', 'liveStock', data?.livestock?.name)}
           {getTextFiled('Gender', 'gender', data?.livestock?.gender)}
          </Stack>
        </Stack>
  );
}

export default LivestockInfo;
