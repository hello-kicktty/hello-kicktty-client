import axios from "axios";

const BASE_URL = "http://13.124.82.89:54401";


export function getKickList() {
    return axios.get(`${BASE_URL}/kickboards`).then((res) => res.data);
  }