import { createContext, useState } from "react";
import { fetchGeofenceAddress, createGeofence } from "../apis/geofenceServices";

export const MapContext = createContext();

export const MapContentProvider = ({ children }) => {
  const [userLiveLocation, setUserLiveLocation] = useState({
    lat: 26.84039,
    lng: 80.94731,
    radius: 100,
  });
  const [detectLocation, setDetectLocation] = useState(true);
  const [saveLocationData, setSaveLocationData] = useState(false);
  const [onGeofenceEdit, setOnGeofenceEdit] = useState(false);

  // auto detect the location of the user
  const detectAutoLocation = () => {
    if ("geolocation" in navigator) {
      navigator?.geolocation.getCurrentPosition(function (position) {
        setUserLiveLocation({
          ...userLiveLocation,
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      alert("Error:Make sure to allow location access");
    }
    setDetectLocation(false);
  };

  //geofence
  const [geofenceCoordinates, setGeofenceCoordinates] = useState({
    lat: 26.84039,
    lng: 80.94731,
    address: "",
    radius: 50,
    err: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  // GET GEOFENCE ADDRESS BY LAT AND LNG
  const getGeolocationAddress = async (autoDetect, latitude, longitude) => {
    setIsLoading(true);
    if (autoDetect) {
      if ("geolocation" in navigator) {
        navigator?.geolocation?.getCurrentPosition(async (position) => {
          let { latitude, longitude } = position?.coords;
          const data = await fetchGeofenceAddress(latitude, longitude);
          console.log()
          setGeofenceCoordinates({
            ...geofenceCoordinates,
            lat: data?.data?.lat,
            lng: data?.data?.lng,
            address: data?.data?.Address,
          });
          setIsLoading(false);
        });
      } else {
        alert("Error:Make sure to allow location access");
        setIsLoading(false);
      }
    } else {
      const data = await fetchGeofenceAddress(latitude, longitude);
      setGeofenceCoordinates({
        ...geofenceCoordinates,
        lat: data?.data?.lat,
        lng: data?.data?.lng,
        address: data?.data.Address,
      });
      setIsLoading(false);
    }
  };
  const [editedRadius, setEditedRadius] = useState(null);

  // HANDLE GEOFENCE ADDRESS EDIT
  const handleGeofenceAddressEdit = () => {
    setGeofenceCoordinates({
      ...geofenceCoordinates,
      lat: 26.84039,
      lng: 80.94731,
      address: "",
    });
  };

  //HANDEL GEOFENCE SUBMIT AND CREATE A GEOFENCE
  const handleCreateGeofence = async () => {
    setSaveLocationData(true);
    const body = {
      Address: geofenceCoordinates?.address,
      lat: geofenceCoordinates?.lat,
      lng: geofenceCoordinates?.lng,
      radius: geofenceCoordinates?.radius,
    };
    const userId = "651e391a6509f38f945d0e41";
    const res = await createGeofence(userId, body);
    if (res?.status === 200) {
      alert(res.message);
    } else {
      alert(res.message);
    }
  };

  //HANDLE GEOFENCE EDIT CANCEL
  const handleGeofenceCancel = () => {
    setGeofenceCoordinates({...geofenceCoordinates, radius:editedRadius});
    setEditedRadius(null);
    setOnGeofenceEdit(false);
    setSaveLocationData(true);
  };


  //HANDLE GEOFENCE EDIT SAVE
  const handleGeofenceSave = () => {
    setOnGeofenceEdit(false);
    setSaveLocationData(true);
    handleCreateGeofence();
  };
  //HANDLE GEOFENCE EDIT
  const handleGeofenceEdit = () => {
    setOnGeofenceEdit(true);
    setSaveLocationData(false);
    setEditedRadius(geofenceCoordinates?.radius);
  };

  return (
    <MapContext.Provider
      value={{
        detectAutoLocation,
        userLiveLocation,
        setUserLiveLocation,
        detectLocation,
        setDetectLocation,
        saveLocationData,
        setSaveLocationData,
        onGeofenceEdit,
        setOnGeofenceEdit,
        getGeolocationAddress,
        isLoading,
        geofenceCoordinates,
        handleGeofenceAddressEdit,
        handleCreateGeofence,
        setGeofenceCoordinates,
        setEditedRadius,
        handleGeofenceSave,
        handleGeofenceCancel,
        handleGeofenceEdit
      }}
    >
      {children}
    </MapContext.Provider>
  );
};
