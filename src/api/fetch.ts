import axios from "axios";

const BASE_URL: string = "https://api.rawg.io/api";

const getGameDetails = async (url: string): Promise<any> => {
  const { data } = await axios.get(`${BASE_URL}/${url}`);
  return data;
};

export const getData = async (pageParam: number, orderBy: string): Promise<any> => {
  const res = await getGameDetails(`games?key=${import.meta.env.VITE_PUBLIC_API_KEY}&dates=2023-6-6&page=${pageParam}&ordering=-${orderBy}`);

  return res;
};

export const getDataSearchFilter = async (pageParam: number): Promise<any> => {
  const res = await getGameDetails(`games?key=${import.meta.env.VITE_PUBLIC_API_KEY}&dates=2023-6-6&page=${pageParam}`);

  return res;
};
export const getRelatedGame = async (pageParam: number, title?: string): Promise<any> => {
  const res = await getGameDetails(`games?key=${import.meta.env.VITE_PUBLIC_API_KEY}&page=${pageParam}&search=${title}`);

  return res;
};
export const getAchievementGame = async (pageParam: number, id?: number): Promise<any> => {
  const res = await getGameDetails(`games/${id}/achievements?key=${import.meta.env.VITE_PUBLIC_API_KEY}&page=${pageParam}`);

  return res;
};

export const getDataByDeveloper = async (pageParam: number, developer?: string): Promise<any> => {
  const res = await getGameDetails(`games?key=${import.meta.env.VITE_PUBLIC_API_KEY}&page=${pageParam}&developers=${developer}`);

  return res;
};

export const getScreenShot = async (pageParam: number, title?: string): Promise<any> => {
  const res = await getGameDetails(`games/${title}/screenshots?key=${import.meta.env.VITE_PUBLIC_API_KEY}&page=${pageParam}`);

  return res;
};

export const getDataByPlatform = async (pageParam: number, platform?: string): Promise<any> => {
  const res = await getGameDetails(`games?key=${import.meta.env.VITE_PUBLIC_API_KEY}&page=${pageParam}&platforms=${platform}`);

  return res;
};

export const getDataByPublisher = async (pageParam: number, publisher?: string): Promise<any> => {
  const res = await getGameDetails(`games?key=${import.meta.env.VITE_PUBLIC_API_KEY}&page=${pageParam}&publishers=${publisher}`);

  return res;
};

export const getDataByGenre = async (pageParam: number, genre?: string): Promise<any> => {
  const res = await getGameDetails(`games?key=${import.meta.env.VITE_PUBLIC_API_KEY}&page=${pageParam}&genres=${genre}`);

  return res;
};
export const getDataByTags = async (pageParam: number, tag?: string): Promise<any> => {
  const res = await getGameDetails(`games?key=${import.meta.env.VITE_PUBLIC_API_KEY}&page=${pageParam}&tags=${tag}`);

  return res;
};

export const getDataSearch = async (search?: string, pageParam?: number): Promise<any> => {
  const res = await getGameDetails(`games?key=${import.meta.env.VITE_PUBLIC_API_KEY}&search=${search}&page=${pageParam}`);

  return res;
};

export const getDetailGame = async (id?: string): Promise<any> => {
  const res = await getGameDetails(`games/${id}?key=${import.meta.env.VITE_PUBLIC_API_KEY}`);

  return res;
};
