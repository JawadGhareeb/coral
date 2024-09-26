import axios from "axios";
import BASE_URL from "../constant/domain";
import { useQuery } from "react-query";

function categories() {
  return axios.get(`${BASE_URL}/api/categories
`);
}

function GetCategories() {
  return useQuery("getCategories", categories);
}

export default GetCategories;
