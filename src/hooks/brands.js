import axios from "axios";
import BASE_URL from "../constant/domain";
import { useQuery } from "react-query";

function brands() {
  return axios.get(`${BASE_URL}/api/brands`);
}

function GetBrands() {
  return useQuery("getBrands", brands);
}

export default GetBrands;
