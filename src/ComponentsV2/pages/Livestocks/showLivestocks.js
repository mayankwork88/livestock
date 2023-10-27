import React,{useContext} from 'react';
import { Box } from "@mui/material";
import {CustomTable} from '../../ComponentsV2';
import { LivestockContext } from '../../context/LivestockContext';

const tableHeadData = [
    "UID",
    "livestock name",
    "collar ID",
    "Added on",
    "current status",
    "last update",
    "action",
  ];

const ShowLivestocks = ({show}) => {

    const {allLivestocks} = useContext(LivestockContext)

    const livestockFiltering = () => {
            let filteredLivestock;
            if(show === "all"){
                filteredLivestock = allLivestocks;
            }
            else{
               filteredLivestock = allLivestocks?.filter(livestock => livestock?.status === show);
            }
            return filteredLivestock?.toReversed()?.map(el => ({...el,status:null}));
       }
  return (
    <Box my={4}>
      <CustomTable
        headBackgroundColor="#B58B5D"
        tableHeadData={tableHeadData}
        tableRowData={livestockFiltering()}
      />
    </Box>
  );
}

export default ShowLivestocks;
