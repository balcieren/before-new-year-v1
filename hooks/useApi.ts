import Axios from "axios";

export default function useAPI() {
  return Axios.create({
    baseURL: `${process.env.BASE_URL}:${process.env.PORT}/api`,
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    timeout: 10000,
  });
}
