import axios from "axios";
import { authHeader } from "../helpers/authHeader";

export default axios.create({
  baseURL: "http://localhost:4000/",
  headers: authHeader(),
});
