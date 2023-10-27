import React,{useContext} from "react";
import { Box, Stack } from "@mui/material";
import {AddBtn, CustomModal} from "../../../ComponentsV2";
import ShowLivestocks from "./showLivestocks";
import { removeLivestockFromCollar } from "../../../apis/livestockServices";
import { LivestockContext } from "../../../context/LivestockContext";
import LivestockInfo from "./livestockInfo";

const AssignLivestock = ({ data }) => {
  const {openAddLiveStockModal, setOpenAddLivestockModal} = useContext(LivestockContext)



  const handelLivestockRemove = () => {
    removeLivestockFromCollar(data?.collarId, data?.livestockId)
    .then(res => console.log(res,"removeLivestockFromCollar"))
    .catch(err => console.log(err, "removeLivestockFromCollar"))

  }
   
  return (
    <Box py={4}>
      <Stack sx={{width:{lg:'55%', md:'100%'}}}>
      {data?.livestock ? (
        <LivestockInfo data={data} btnText="remove" btnBgColor="#FF0505" onBtnClick={handelLivestockRemove}/>
      ) : (
        <AddBtn onClick={() => setOpenAddLivestockModal(true)} />
      )}
      </Stack>
      <CustomModal
        content={<ShowLivestocks data={data}/>}
        openModal={openAddLiveStockModal}
        handleClose={() => setOpenAddLivestockModal(false)}
      />
    </Box>
  );
};

export default AssignLivestock;
