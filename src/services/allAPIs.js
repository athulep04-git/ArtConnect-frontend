import { serverURL } from "./serverURL";
import commonAPI from "./commonAPI";

//1 Register User 
export const registerAPI = async (reqBody) => {
  return await commonAPI("POST", `${serverURL}/api/register`, reqBody, {});
};

//login
export const loginAPI = async (reqBody) => {
  return await commonAPI("POST", `${serverURL}/api/login`, reqBody, {});
};