import React, {useState} from "react";
import { Box, Stack } from "@mui/material";
import "./index.css";
import ShowForm from "./ShowForm";
import useAuth from "../../hooks/useAuth";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState("log in");
  const [showAnim, setShowAnim] = useState(true);
  const {
    handleUserLoginSubmit,
    handleUserSignUpSubmit,
    onUserSignUp,
    handleUserCredentialChange,
    onUserLogin,
    handleUserSignUpCredentialChange,
  } = useAuth();

  return (
    <Stack
      width="100%"
      height="100vh"
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <Box className="card" sx={{ minWidth: 352, minHeight: 460 }}>
        <Box
          className={`${
            showAnim ? "animation1" : "animation2"
          } card-side card-side--front`}
        >
          <ShowForm
            showAnim={showAnim}
            setShowAnim={(ele) => {
              setIsLogin(ele);
              setShowAnim(!showAnim);
            }}
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            onUserLogin={onUserLogin}
            onUserSignUp={onUserSignUp}
            handleUserCredentialChange={handleUserCredentialChange}
            handleUserSignUpCredentialChange={handleUserSignUpCredentialChange}
            handleUserLoginSubmit={handleUserLoginSubmit}
            handleUserSignUpSubmit={handleUserSignUpSubmit}
          />
        </Box>
        <Box
          className={`${
            showAnim ? "animation1" : "animation2"
          } card-side card-side--back`}
        >
          <ShowForm
            showAnim={showAnim}
            setShowAnim={(ele) => {
              setIsLogin(ele);
              setShowAnim(!showAnim);
            }}
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            onUserLogin={onUserLogin}
            onUserSignUp={onUserSignUp}
            handleUserCredentialChange={handleUserCredentialChange}
            handleUserSignUpCredentialChange={handleUserSignUpCredentialChange}
            handleUserLoginSubmit={handleUserLoginSubmit}
            handleUserSignUpSubmit={handleUserSignUpSubmit}
          />
        </Box>
      </Box>
    </Stack>
  );
};

export default AuthPage;
