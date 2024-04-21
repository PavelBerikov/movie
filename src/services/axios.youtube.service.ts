import axios from "axios";
import {baseYTURL} from "../constants";

const axiosYTService = axios.create({baseURL: baseYTURL});


export {
    axiosYTService
}