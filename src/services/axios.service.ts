import axios from "axios";
import {baseURL} from "../constants";

const axiosService = axios.create({baseURL});
axiosService.interceptors.request.use(res => {
    const access = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzczMDFmZWExNjFhZmViOTYyNzY5YjY0OThiYzFjOCIsInN1YiI6IjY1ZmJjNDBhNzcwNzAwMDE2MzA2ZjU2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g_h7SdOS3SBDbKTe8sn8SPcLuNFe8yx7nOB21XsjNHk'
    res.headers.Authorization = `Bearer ${access}`
    return res
})

export {
    axiosService
}