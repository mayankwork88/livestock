import * as Yup from "yup";

// REGULAR EXPRESSSIONS 
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const uppercaseRegExp = /(?=.*?[A-Z])/;
const lowercaseRegExp = /(?=.*?[a-z])/;
const digitsRegExp = /(?=.*?[0-9])/;
const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
const isValid = uppercaseRegExp && lowercaseRegExp && digitsRegExp && specialCharRegExp;


//COMMON VALIDATIONS 
const emailValidation =  Yup.string().required().email();
const phoneValidation = Yup.string().required().matches(phoneRegExp, 'Phone number is not valid');
const createPassword =  Yup.string()
    .required('No password provided.') 
    .min(
      6,
      'password must contain at least 8 characters'
    ).matches(isValid, 'Contain at least one uppercase, lowercase, number and special character');
   

//PROFILE PAGE VALIDATION SCHEMA 

  //PROFILE PAGE USER SECURITY SCHEMA 
export const securityProfileSchema = Yup.object().shape({
    currentPassword: Yup.string().required('No password provided'),
    newPassword: createPassword,
    confirmPassword:Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });

  //PROFILE PAGE USER DETAIL SCHEMA 

  export const showProfileSchema = Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    phoneNumber: phoneValidation,
    email:emailValidation,
    address:Yup.string().required(),
    pincode:Yup.string().required(),
    state:Yup.string().required(),
    country:Yup.string().required()
  });


  // LOGIN SCHEMA 

export const loginSchema = Yup.object().shape({
    email: emailValidation,
    password: Yup.string().required('No password provided')
  });


    // SIGN UP SCHEMA 

export const signUpSchema = Yup.object().shape({
  fullName:Yup.string().required(),
  email: emailValidation,
  password: createPassword,
  phone:phoneValidation,
});