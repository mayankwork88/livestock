import React from "react";
import {CustomTable} from "../../ComponentsV2";
import { Box } from "@mui/material";
import { useContext } from "react";
import { CollarContext } from "../../context/CollarContext";


const tableHeadData = [
  "collar ID",
  "collar name",
  "power",
  "current status",
  "added on",
  "action",
];

const ShowCollars = ({show}) => {

  const {collars} = useContext(CollarContext);

 const collarFiltering = () => {
         let filteredCollars;
         if(show === "all"){
            filteredCollars = collars;
         }
         else{
            filteredCollars = collars?.filter(collar => collar?.status === show);
         }
         return filteredCollars?.map(el => ({...el,status:null}));
    }

  return (
    <Box my={4}>
      <CustomTable
        headBackgroundColor="#B58B5D"
        tableHeadData={tableHeadData}
        tableRowData={collarFiltering()}
      />
    </Box>
  );
};

export default ShowCollars;

