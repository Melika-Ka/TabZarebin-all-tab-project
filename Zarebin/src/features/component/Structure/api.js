import axios from "axios";

//https://zarebin.ir/gse/api/search?q=iran&pl=0&page=1&ldi=0&user_device=d&limit=10&qsrc=user
export const getApi = async (searchItem) => {
  console.log(searchItem);

  const params = {
    qsrc: "user",
    pl: 0,
    limit: 10,
    ldi: 0,
    page: 1,
    q: `${searchItem}`,
  };
  const response = await axios.get("https://zarebin.ir/gse/api/search/", {
    params,
  });
  console.log(response.data.result.all.results.webs);
  return response.data.result.all.results.webs;
};
