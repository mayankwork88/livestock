import { Pagination,Stack } from "@mui/material";
import React, { useState, useEffect } from "react";
import { getAllUnassignLivestock } from "../apis/livestockServices";


export default function CustomPagination({
  showFirstButton,
  showLastButton,
  size,
  setShowLivestocks
}) {
  const pageSize = 16;
  const [unassignLivestocks, setUnassignLivestocks] = useState([])
  const [pagination, setPagination] = useState({count:0,from:0,to:pageSize});

  useEffect(()=> {
    getAllUnassignLivestock()
    .then(res => {
      console.log(res, "showLivestocksshowLivestocks")
      // const data = res?.data?.slice(pagination.from, pagination.to);
      // setShowLivestocks(data)
    })
    .catch(err => console.log(err,"getAllUnassignLivestock"))
  },[])
   

  const handlePageChange = (event, page) => {
    const from = (page-1)*pageSize;
    const to = (page-1)*pageSize + pageSize;
    setPagination({...pagination, from:from,to:to})
  }


//have to run useEffect evertime from or to chnages
  return (
    <Stack spacing={2}>
      <Pagination
        count={Math.ceil(unassignLivestocks?.length/pageSize)} //
        color="primary"
        onChange={handlePageChange}
        showFirstButton={showFirstButton}
        showLastButton={showLastButton}
        size={size}
      />
    </Stack>
  );
}

 