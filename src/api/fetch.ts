import axios from "axios";

const BASE_URL: string = "https://api.rawg.io/api";

const getGameDetails = async (url: string): Promise<any> => {
  const { data } = await axios.get(`${BASE_URL}/${url}`);
  return data;
};

export const getData = async (page: number) => {
  const res = await getGameDetails(`games?search=league&key=${import.meta.env.VITE_PUBLIC_API_KEY}&page=${page}`);

  return res;
};
