import { app } from "./contractControllers";
export const getTiktokCampaign = async (uuid) => {
  return await app.get(`/tiktok-campaigns/${uuid}`);
};
