import axios from "axios";

const BASE_URL = "http://3.35.50.22:59295";


export function getKickList() {
    return axios.get(`${BASE_URL}/kickboards`).then((res) => res.data);
  }

  export function postParking(id,lat) {
    const data = {
      id: id,
      lat: lat.latitude,
      lng: lat.longitude,
    };
    console.log(data);

    return axios.post(`${BASE_URL}/kickboards`, data).then((res) => console.log(res.data));
  }