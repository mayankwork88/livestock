import React,{useContext} from "react";
import AdminUIContainer from "../../layout/AdminUIContainer";
import {Breadcrumb,CustomTabs, TabPane, CustomModal, BackdropLoader} from "../../ComponentsV2";
import { Container } from "@mui/material";
import ShowLivestocks from "./showLivestocks";
import { LivestockContext } from "../../context/LivestockContext";
import AddLivestockModalContent from "./AddLivestockModalContent";

const tabData = [
  {
    label: "All Livestocks",
    child: <ShowLivestocks show="all" />,
  },
  {
    label: "Safe",
    child: <ShowLivestocks show="safe" />,
  },
  {
    label: "Unsafe",
    child: <ShowLivestocks show="unsafe" />,
  },
];

const Livestocks = () => {
  const {
    openAddLiveStockModal,
    openBackdropLoader,
    modalContentType,
    handleLivestockModalOpen,
    handleLivestockModalClose
  } = useContext(LivestockContext);


  const contentType = () => {
    if (modalContentType === "add") {
      return <AddLivestockModalContent />;
    } 
    // else if(modalContentType === "delete"){
    //   return <DeleteCollarModalContent />;
    // }
  };

  const BreadcrumbData = [{
    label:'livestocks',
    link:'livestocks'
  }]
  return (
    <AdminUIContainer>
      <Container maxWidth="xl" sx={{ marginTop: 8 }}>
        <BackdropLoader open={openBackdropLoader} />
        <Breadcrumb data={BreadcrumbData} />
        <TabPane
          text="All Livestocks"
          btnText="Add Livestock"
          btnIcon={true}
          onBtnClick={() => handleLivestockModalOpen("add")}
        />
        <CustomModal
          content={contentType()}
          openModal={openAddLiveStockModal}
          handleClose={handleLivestockModalClose}
        />
        <CustomTabs tabData={tabData} />
      </Container>
    </AdminUIContainer>
  );
};

export default Livestocks;
