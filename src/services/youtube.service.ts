import {IRes} from "../types";
import {IYouTubeResponse} from "../interfaces";
import {axiosYTService} from "./axios.youtube.service";
import {urlsYT} from "../constants";

class YoutubeService{
    search(title: string): IRes<IYouTubeResponse>{
        return axiosYTService.get(urlsYT.search, {params: {part: 'snippet', q: title, key:'AIzaSyA0x45sp04RoyzgpyJs1HMGI4Occ8g_S_M'}})
    }
}

export const youtubeService = new YoutubeService()