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

export const getArtworksAPI = async () => {
  return await commonAPI("GET", `${serverURL}/api/getartworks`,{},{});
};

export const getSingleArtworkAPI = async (id) => {
  return await commonAPI("GET", `${serverURL}/api/getsingleartwork/${id}`,{},{});
};

export const getProfileAPI = async (reqHeader) => {
  return await commonAPI("GET",`${serverURL}/api/getprofile`,{},reqHeader);
};

export const addArtworkAPI = async (reqBody,reqHeader) => {
  return await commonAPI("POST", `${serverURL}/api/addartwork`,reqBody,reqHeader);
};

export const deleteArtworkAPI = async (id,reqHeader) => {
  return await commonAPI("DELETE", `${serverURL}/api/deleteartwork/${id}`,{},reqHeader);
};

export const updateArtworkAPI = async (id,reqBody,reqHeader) => {
  return await commonAPI("PUT", `${serverURL}/api/updateartwork/${id}`,reqBody,reqHeader);
};

export const getUsersAPI = async (reqHeader) => {
  return await commonAPI("GET",`${serverURL}/api/getallusers`,{},reqHeader);
};

export const addRequestAPI =async(reqBody,reqHeader)=>{
  return await commonAPI("POST",`${serverURL}/api/sendreq`,reqBody,reqHeader)
};