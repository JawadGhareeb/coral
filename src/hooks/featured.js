import axios from "axios";
import BASE_URL from "../constant/domain";
import { useQuery } from "react-query";

function featured() {
  return axios.get(`${BASE_URL}/api/featured
`);
}

function GetFeatured() {
  return useQuery("getFeatured", featured);
}

export default GetFeatured;
