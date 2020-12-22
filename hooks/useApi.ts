import Axios from "axios";

export default function useAPI() {
  return Axios.create({
    baseURL: `${process.env.BASE_URL}:${process.env.PORT}/api/`,
  });
}
