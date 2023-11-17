import axios from "axios";

const BASE_URL = "http://13.124.82.89:54401";


export function getKickList() {
    return axios.get(`${BASE_URL}/kickboards`).then((res) => res.data);
  }


export function borrowKick(id) {
    return axios.delete(`${BASE_URL}/kickboards/${id}`).then((res) => res.data);
}