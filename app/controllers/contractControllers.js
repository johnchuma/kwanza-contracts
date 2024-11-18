import axios from "axios";

export const app = axios.create({
  baseURL: "https://api.kwanza.io",
});

export const getContract = async (uuid) => {
  return await app.get(`/contracts/${uuid}`, {});
};
