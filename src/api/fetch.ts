import axios from "axios";
import { TData } from "../types/Types";

const BASE_URL: string = "https://api.rawg.io/api";

const getGameDetails = async (url: string): Promise<any> => {
  const { data } = await axios.get(`${BASE_URL}/${url}`);
  return data;
};

export const getData = async (): Promise<TData> => {
  const res = await getGameDetails(`games?&key=${import.meta.env.VITE_PUBLIC_API_KEY}&dates=2023-6-6`);

  return res;
};
export const getDataSearch = async (search?: string): Promise<TData> => {
  const res = await getGameDetails(`games?&key=${import.meta.env.VITE_PUBLIC_API_KEY}&search=${search}`);

  return res;
};
