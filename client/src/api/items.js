import axios from "axios";
import { authHeader } from "../helpers/authHeader";

export default axios.create({
  baseURL: "https://medrentplus.herokuapp.com/",
  headers: authHeader(),
});
