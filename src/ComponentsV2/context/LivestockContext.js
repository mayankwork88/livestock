import { createContext, useState, useEffect } from "react";
import {VisibilityOutlinedIcon,DeleteOutlineOutlinedIcon} from "../icons";
import {CustomLabel} from "../ComponentsV2";
import { useNavigate } from "react-router-dom";
import { request } from "../apis/axios-utils";

export const LivestockContext = createContext();

export const LivestockContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [allLivestocks, setAllLivestocks] = useState([]);
  const [modalContentType, setModalContentType] = useState("add");
  const [openAddLiveStockModal, setOpenAddLivestockModal] = useState(false);
  const [showLocationTab, setShowLocationTab] = useState("location");
  const [livestockHealthActiveTab, setLivestockHealthActiveTab] = useState("");

  // new livestock
  const [addNewLivestock, setAddNewLivestock] = useState({
    collarUID: "",
    livestockUID: "",
    livestockName: "",
    livestockGender: "",
  });
  const [addNewLivestockLoading, setAddNewLivestockLoading] = useState(false);

  const [tempThreshold, setTempThreshold] = useState([
    {
      label: "low temperature",
      name: "lowTemp",
      type: "warning",
      value: "26",
    },
    {
      label: "high temperature",
      name: "highTemp",
      type: "error",
      value: "40",
    },
  ]);
  const [isLivestockTempAlertsEdit, serIsLivestockTempAlertsEdit] =
    useState(false);

  const [heartbeatThreshold, setHeartbeatThreshold] = useState([
    {
      label: "low heartbeat",
      name: "lowHeartbeat",
      type: "warning",
      value: "26",
    },
    {
      label: "high heartbeat",
      name: "highHeartbeat",
      type: "error",
      value: "40",
    },
  ]);
  const [isLivestockHeartbeatAlertsEdit, setIsLivestockHeartbeatAlertsEdit] =
    useState(false);

  const [humidityThreshold, setHumidityThreshold] = useState([
    {
      label: "low humidity",
      name: "lowHumidity",
      type: "warning",
      value: "26",
    },
    {
      label: "high humidity",
      name: "highHumidity",
      type: "error",
      value: "52",
    },
  ]);

  const [isLivestockHumidityAlertsEdit, setIsLivestockHumidityAlertsEdit] =
    useState(false);

  const [geofenceThreshold, setGeofenceThreshold] = useState([
    {
      label: "Radius",
      name: "radius",
      type: "warning",
      value: "50",
    },
  ]);
  const [isLivestockGeofenceAlertsEdit, setIsLivestockGeofenceAlertsEdit] =
    useState(false);

  //GET ALL LIVESTOCK
  useEffect(() => {
    request({url:"/liveStock/getAll"})
      .then((res) => {
        const formattedData = res?.data?.data?.map((col) => ({
          id: col._id + "id",
          liveStockUID: col?.uID,
          livestockName: col?.name,
          collarID: col?.assignedDevice?.uID,
          addedOn: col?.createdAt,
          status: col?.status ? "safe" : "unsafe",
          currentStatus: (
            <CustomLabel
              text={col?.status ? "safe" : "unsafe"}
              type={col?.status ? "success" : "error"}
              width={125}
              marginAuto={true}
            />
          ),
          lastUpdate: col?.updatedAt,
          action: [
            <VisibilityOutlinedIcon
              fontSize="large"
              onClick={() => navigate(`/livestocks/${col?._id}`)}
            />,
            <DeleteOutlineOutlinedIcon
              fontSize="large"
              onClick={() => handleLivestockDelete(col?._id)}
            />,
          ],
        }));
        setAllLivestocks(formattedData);
      })
      .catch((err) => alert(err.message));
  }, []);

  // handle modal open
  const handleLivestockModalOpen = (type) => {
    setModalContentType(type);
    setOpenAddLivestockModal(true);
  };
  // handle livestock modal close
  const handleLivestockModalClose = () => setOpenAddLivestockModal(false);

  //HANDLE LIVESTOCK DELETE
  const handleLivestockDelete = async (livestockId) => {
    // setOpenBackdropLoader(true);
    // const res = await deleteCollar(livestockId);
    // if (res?.statusCode === 200) {
    //   console.log(res.message);
    // } else {
    //   console.log(res.message);
    // }
    // setOpenBackdropLoader(false);
  };

  // HANDLE ADD COLLAR
  const handleAddLivestockChange = (data) => {
    const { name, value } = data.target;
    setAddNewLivestock({ ...addNewLivestock, [name]: value });
  };

  const handleAddLivestock = () => {
    setAddNewLivestockLoading(true);
    setAddNewLivestock({
      collarUID: "",
      livestockUID: "",
      livestockName: "",
      livestockGender: "",
    });
    alert("successfully added");
    handleLivestockModalClose();
    setAddNewLivestockLoading(false);
  };

  const handleLivestockTempAlertsChange = (event) => {
    const { name, value } = event.target;
    const updatedValues = tempThreshold?.map((ele) => {
      if (ele.name === name) {
        return {
          ...ele,
          value: value,
        };
      }
      return ele;
    });
    setTempThreshold(updatedValues);
  };

  const handleLivestockHeartbeatAlertsChange = (event) => {
    const { name, value } = event.target;
    const updatedValues = heartbeatThreshold?.map((ele) => {
      if (ele.name === name) {
        return {
          ...ele,
          value: value,
        };
      }
      return ele;
    });
    setHeartbeatThreshold(updatedValues);
  };

  const handleLivestockHumidityAlertsChange = (event) => {
    const { name, value } = event.target;
    const updatedValues = humidityThreshold?.map((ele) => {
      if (ele.name === name) {
        return {
          ...ele,
          value: value,
        };
      }
      return ele;
    });
    setHumidityThreshold(updatedValues);
  };

  const handleLivestockGeofenceAlertsChange = (event) => {
    const { name, value } = event.target;
    const updatedValues = geofenceThreshold?.map((ele) => {
      if (ele.name === name) {
        return {
          ...ele,
          value: value,
        };
      }
      return ele;
    });
    setGeofenceThreshold(updatedValues);
  };

  return (
    <LivestockContext.Provider
      value={{
        allLivestocks,
        modalContentType,
        handleLivestockModalOpen,
        openAddLiveStockModal,
        setOpenAddLivestockModal,
        allLivestocks,
        showLocationTab,
        setShowLocationTab,
        livestockHealthActiveTab,
        setLivestockHealthActiveTab,
        handleLivestockModalClose,
        addNewLivestock,
        setAddNewLivestock,
        handleAddLivestockChange,
        addNewLivestockLoading,
        setAddNewLivestockLoading,
        handleAddLivestock,
        tempThreshold,
        setTempThreshold,
        handleLivestockTempAlertsChange,
        isLivestockTempAlertsEdit,
        serIsLivestockTempAlertsEdit,
        heartbeatThreshold,
        setHeartbeatThreshold,
        isLivestockHeartbeatAlertsEdit,
        setIsLivestockHeartbeatAlertsEdit,
        geofenceThreshold,
        setGeofenceThreshold,
        isLivestockGeofenceAlertsEdit,
        setIsLivestockGeofenceAlertsEdit,
        handleLivestockHeartbeatAlertsChange,
        handleLivestockGeofenceAlertsChange,
        humidityThreshold,
        handleLivestockHumidityAlertsChange,
        isLivestockHumidityAlertsEdit,
        setIsLivestockHumidityAlertsEdit,
      }}
    >
      {children}
    </LivestockContext.Provider>
  );
};
