import * as Storage from "./services/Storage";
import axios from "axios";

axios.defaults.baseURL =  process.env.REACT_APP_DOMAIN_API;
axios.defaults.headers = Storage.getToken() &&  `Authorization: Bearer ${Storage.getToken()}`

export default axios;
