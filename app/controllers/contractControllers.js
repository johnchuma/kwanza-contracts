import axios from "axios";

export const app = axios.create({
  baseURL: "http://localhost:5000",
});

export const getContract = async (uuid) => {
  return await app.get(`/contracts/${uuid}`, {});
};
