import axios from "axios";
const commonAPI = async (httpmethod, url, reqBody, reqHeader) => {
  const reqConfig = {
    method: httpmethod,
    url,
    data: reqBody,
    headers: reqHeader,
  };
  return await axios(reqConfig)
    .then((res) => res)
    .catch((err) => err);
};
export default commonAPI;
