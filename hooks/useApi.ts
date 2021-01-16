import Axios from "axios";

export default function useAPI() {
  return Axios.create({
    baseURL: `http://localhost:${process.env.PORT || 3000}/api`,
  });
}
