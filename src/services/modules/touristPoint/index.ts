import { API } from "../../index";

const basePath = "/places";

export const TouristPointServices = {
  getAllTouristPoint: async () => {
    const result = await API.get(basePath);
    return result;
  },
  getTouristPointByUrl: async (url: string) => {
    const result = await API.get(basePath + `?url=/${url}`);

    return result;
  },
};
