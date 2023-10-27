import React, { useState, useContext } from "react";
import { Box, Stack } from "@mui/material";
import { TypographyWithBg, ButtonPrimary} from "../../../ComponentsV2/themeComponents";
import LivestockCard from "./livestockCard";
import {CustomPagination, SearchInput} from "../../../ComponentsV2";
import { LivestockContext } from "../../../context/LivestockContext";


const ShowLivestocks = ({ data }) => {
  const [showLivestocks, setShowLivestocks] = useState([]);
  const [selectedValue, setSelectedValue] = useState();
  const { setOpenAddLivestockModal } = useContext(LivestockContext);
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handelLivestockAssign = () => {
    // alert(selectedValue);
    setOpenAddLivestockModal(false);
    // console.log(,selectedValue, "sxjbcdhbdyucvyudwbnwnlm")
    // assignDeviceToLivestock(data?.collarId, selectedValue?.slice(0,-2))
    //   .then((res) => console.log(res,"sxjbcdhbdyucvyudwbnwnlm"))
    //   .catch((err) => console.log(err,"sxjbcdhbdyucvyudwbnwnlm"));
  };

  const handleLivestockSearch = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  return (
    <Box >
      <TypographyWithBg>Assign Livestock</TypographyWithBg>
      <Stack direction="row" p={4}>
        <SearchInput
          placeholder="Search Livestock Id or Name"
          name="search"
          onChange={handleLivestockSearch}
        />
      </Stack>
      <Stack direction="row" flexWrap="wrap" justifyContent="space-evenly">
        {showLivestocks
          ?.filter(
            (ele) =>
              ele?.name?.toLowerCase()?.includes(query?.toLowerCase()) ||
              ele?.id?.toLowerCase()?.includes(query?.toLowerCase())
          )
          ?.map((el) => (
            <LivestockCard
              key={el.id}
              name={el.livestockName}
              id={el.liveStockUID}
              value={el.id}
              handleChange={handleChange}
              selectedValue={selectedValue === el.id}
            />
          ))}
        {/* {showLivestocks
          ?.filter(
            (ele) =>
              ele?.name?.toLowerCase()?.includes(query?.toLowerCase()) ||
              ele?.id?.toLowerCase()?.includes(query?.toLowerCase())
          )
          ?.map((el) => (
            <LivestockCard
              key={el.id}
              name={el.name}
              id={el.id}
              handleChange={handleChange}
              selectedValue={selectedValue}
            />
          ))} */}
      </Stack>
      <Stack direction="row" justifyContent="center" py={5}>
        <CustomPagination
          showFirstButton={true}
          showLastButton={true}
          size="large"
          setShowLivestocks={setShowLivestocks}
        />
        <ButtonPrimary
          onClick={handelLivestockAssign}
          sx={{
            position: "absolute",
            right: "35px",
            background: "#05254C",
            padding: "5px 30px",
          }}
        >
          Save
        </ButtonPrimary>
      </Stack>
    </Box>
  );
};

export default ShowLivestocks;
