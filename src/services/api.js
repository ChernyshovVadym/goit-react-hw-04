import axios from "axios";

const ACCESS_KEY = "WDghne2SATVysCqaxtFFxIDzJ38VTfnaCRCovBIjcgc";

axios.defaults.baseURL = "https://api.unsplash.com";

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(
    `/search/photos?query=${query}&page=${page}&per_page=15&client_id=${ACCESS_KEY}`
  );
  //   console.log(data);
  return data;
};
