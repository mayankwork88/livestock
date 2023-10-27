import React from "react";
import AdminUIContainer from "../../layout/AdminUIContainer";
import {Breadcrumb,CustomTabs, TabPane, CustomModal, BackdropLoader} from "../../ComponentsV2";
import { Container } from "@mui/material";
import ShowCollars from "./ShowCollars";
import AddCollarModalContent from "./AddCollarModalContent";
import DeleteCollarModalContent from "./deleteCollarModalContent";
import { useContext } from "react";
import { CollarContext } from "../../context/CollarContext";
import MaxWidthDialog from "../../ComponentsV2/successDialog";

const tabData = [
  {
    label: "all",
    child: <ShowCollars show="all" />,
  },
  {
    label: "assigned",
    child: <ShowCollars show="assigned" />,
  },
  {
    label: "not assigned",
    child: <ShowCollars show="not assigned" />,
  },
];

const Collars = () => {
  const {
    openAddCollarModal,
    openBackdropLoader,
    handleCollarModalOpen,
    modalContentType,
    handleCollarModalClose,
  } = useContext(CollarContext);

  const contentType = () => {
    if (modalContentType === "add") {
      return <AddCollarModalContent />;
    } else if(modalContentType === "delete"){
      return <DeleteCollarModalContent />;
    }
  };

  const BreadcrumbData = [{
    label:'collar management',
    link:'collars'
  }]
  return (
    <AdminUIContainer>
      <Container maxWidth="xl" sx={{ marginTop: 8}}>
        <BackdropLoader open={openBackdropLoader} />
        <Breadcrumb data={BreadcrumbData} />
        <TabPane
          text="Showing 10 Collars out of 20"
          btnText="Add New Collar"
          btnIcon={true}
          onBtnClick={() => handleCollarModalOpen("add")}
        />
        <CustomModal
          content={contentType()}
          openModal={openAddCollarModal}
          handleClose={handleCollarModalClose}
        />
        <CustomTabs tabData={tabData} />
        {/* <MaxWidthDialog openData={true}  /> */}
      </Container>
    </AdminUIContainer>
  );
};

export default Collars;
