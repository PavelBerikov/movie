import axios from "axios";
import {baseYTURL} from "../constants";

const axiosYTService = axios.create({baseURL: baseYTURL});
/*axiosYTService.interceptors.request.use(res => {
    const access = 'AIzaSyAsMGLJTdiIxG1MIy-C8JLMR7DodWFiwjo'
    res.headers.Authorization = `Bearer ${access}`
    return res
})*/

export {
    axiosYTService
}