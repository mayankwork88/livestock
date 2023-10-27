import { useState, createContext } from "react";

export const ProfileContext = createContext();

export const ProfileContextProvider = ({ children }) => {
  const [showProfileData, setShowProfileData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
    pincode: "",
    state: "",
    country: "",
  });

  const [changePassword, setChangePassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // HANDLE PROFILE CHANGE AND UPDATE
  const handleProfileChange = (data) => {
    const { name, value } = data.target;
    setShowProfileData({ ...showProfileData, [name]: value });
  };

  const handleProfileEdit = () => {
    console.log(showProfileData);
  };

  // HANDLE PASSWORD CHANGE
  const handlePasswordChange = (data) => {
    const { name, value } = data.target;
    setChangePassword({ ...changePassword, [name]: value });
  };

  const handlePasswordEdit = () => {
    console.log(changePassword);
  };

  return (
    <ProfileContext.Provider
      value={{
        showProfileData,
        changePassword,
        handlePasswordEdit,
        handleProfileChange,
        handleProfileEdit,
        handlePasswordChange,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
