import { useState, useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { CustomLabel } from "../ComponentsV2";
import { VisibilityOutlinedIcon, DeleteOutlineOutlinedIcon } from "../icons";
import { request } from "../apis/axios-utils";
import useUserId from "../hooks/useUserId";

export const CollarContext = createContext();

export const CollarContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [collars, setCollars] = useState([]);
  const [isError, setIsError] = useState({ error: false, message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [modalContentType, setModalContentType] = useState("add");

  const [newCollar, setNewCollar] = useState({
    collarUID: "",
    collarName: "",
    collarMacID: "",
  });

  //COLLAR MODAL
  const [openAddCollarModal, setOpenAddCollarModal] = useState(false);
  const handleCollarModalOpen = (type) => {
    setModalContentType(type);
    setOpenAddCollarModal(true);
  };

  //BACKDROP
  const [openBackdropLoader, setOpenBackdropLoader] = useState(false);

  //GET USER ID
  const userId = useUserId();

  //HANDLE COLLAR MODAL CLOSE
  const handleCollarModalClose = () => setOpenAddCollarModal(false);

  //GET ALL COLLARS
  useEffect(() => {
    request({ url: `/devices/getAll?userId=${userId}` })
      .then((res) => {
        const formattedData = res?.data?.data?.result?.map((col) => ({
          id: col._id + "id",
          collarID: col.uID,
          collarName: col.deviceName,
          power: (
            <CustomLabel text="OFF" type="error" width={80} marginAuto={true} />
          ),
          currentStatus: (
            <CustomLabel
              text={col?.status ? "assigned" : "not assigned"}
              type="error"
              width={125}
              marginAuto={true}
            />
          ),
          status: col?.status ? "assigned" : "not assigned",
          addedOn: "07/07/23",
          action: [
            <VisibilityOutlinedIcon
              fontSize="large"
              onClick={() => {
                setOpenBackdropLoader(true);
                navigate(`/collars/${col?._id}`);
              }}
            />,
            <DeleteOutlineOutlinedIcon
              fontSize="large"
              onClick={() => handleCollarDelete(col?._id)}
            />,
          ],
        }));
        setCollars(formattedData);
      })
      .catch((err) => alert(err.message));
  }, [isLoading, openBackdropLoader]);

  // HANDLE ADD COLLAR
  const handleAddCollarChange = (data) => {
    const { name, value } = data.target;
    setNewCollar({ ...newCollar, [name]: value });
  };

  const handleAddCollar = async () => {
    setIsLoading(true);
    const body = {
      uID: newCollar?.collarUID?.toString(),
      deviceName: newCollar?.collarName,
      macID: newCollar?.collarMacID,
    };
    const res = await request({
      url: "/devices/create",
      method: "POST",
      data: body,
    });
    if (res?.status === 200) {
      handleAddCollarModalClose();
    } else {
      setIsError({
        error: true,
        message: `${
          res?.response?.status === 409
            ? "Collar UID already exist!"
            : res?.message
        }`,
      });
    }
    setIsLoading(false);
  };

  //validations schema
  const addCollarValidationSchema = Yup.object().shape({
    collarUID: Yup.string().required().min(3, "Collar UID must be long"),
    collarName: Yup.string().required().min(3, "Collar Name must be long"),
    collarMacID: Yup.string().required().min(3, "Collar Mac ID must be long"),
  });

  // handle add collar modal close
  const handleAddCollarModalClose = () => {
    handleCollarModalClose();
    setNewCollar({
      collarUID: "",
      collarName: "",
      collarMacID: "",
    });
    setIsError({ error: false, message: "" });
  };

  //Delete collar
  const handleCollarDelete = async (collarId) => {
    setOpenBackdropLoader(true);
    const res = await request({
      url: `/devices/delete?deviceId=${collarId}`,
      method: "DELETE",
    });
    if (res?.statusCode === 200) {
      console.log(res.message);
    } else {
      console.log(res.message);
    }
    setOpenBackdropLoader(false);
  };

  return (
    <CollarContext.Provider
      value={{
        handleAddCollarChange,
        handleAddCollar,
        newCollar,
        collars,
        setCollars,
        isError,
        openAddCollarModal,
        handleCollarModalOpen,
        handleCollarModalClose,
        handleAddCollarModalClose,
        addCollarValidationSchema,
        isLoading,
        modalContentType,
        handleCollarDelete,
        openBackdropLoader,
        setOpenBackdropLoader,
      }}
    >
      {children}
    </CollarContext.Provider>
  );
};
