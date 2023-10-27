import { createContext } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { request } from "../apis/axios-utils";


export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [userData, setUserData] = useState({data:{}, error:''});
    const [onUserLogin, setOnUserLogin] = useState({email:'', password:''});
    const [onUserSignUp, setOnUserSignUp] = useState({fullNama:"", email:'', password:"", phone:""});


    // HANDLE USER LOGIN  
    const handleUserCredentialChange = (event) => {
           const {name, value} = event.target;
           setOnUserLogin({...onUserLogin, [name]:value});

    }
    const body = {
        "username":"user12@gmail.com",
        "password":"user12"
    }
    const handleUserLoginSubmit = async () => {
        try{
            const response = await request({url:"/user/sign-in", method:'POST',data:body});
            const {data} = response;
            localStorage.setItem("userData", JSON.stringify(data.data));
            navigate(from, {replace:true});
        }catch(err){
            console.log(err, "handleUserLoginSubmit")
        }
    }

    //HANDLE USER SIGN UP
    const handleUserSignUpCredentialChange = (event) => {
        const {name, value} = event.target;
        setOnUserSignUp({...onUserSignUp, [name]:value})
 }

 const handleUserSignUpSubmit = async () => {
    console.log(onUserSignUp,"handleUserSignUpSubmit")
    //  try{
    //      const response = await request({url:"/user/sign-in", method:'POST',data:body});
    //      const {data} = response;
    //      localStorage.setItem("userData", JSON.stringify(data.data));
    //      navigate(from, {replace:true});
    //  }catch(err){
    //      console.log(err, "handleUserLoginSubmit")
    //  }
 }
    return (
        <AuthContext.Provider value={{handleUserLoginSubmit,handleUserSignUpSubmit,onUserSignUp, userData,handleUserSignUpCredentialChange,  handleUserCredentialChange,onUserLogin}}>{children}</AuthContext.Provider>
    )
}