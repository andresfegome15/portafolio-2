import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsloading } from "./isLoading.slice";

export const createUser = createSlice({
  name: "createUser",
  initialState: undefined,
  reducers: {},
});

export const UserCreate = user => dispatch => {
  dispatch(setIsloading(true));
  return axios
    .post("https://portafolio-developer.herokuapp.com/api/v1/contactos", user)
    .then(() => dispatch(alert("Correo enviado")))
    .catch(error => console.log(error.response))
    .finally(() => dispatch(setIsloading(false)));
};
export default createUser.reducercreateUser;
