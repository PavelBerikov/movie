import {IRes} from "../types";
import {IYouTubeResponse} from "../interfaces";
import {axiosYTService} from "./axios.youtub.service";
import {urlsYT} from "../constants";

class YoutubeService{
    search(title: string): IRes<IYouTubeResponse>{
        return axiosYTService.get(urlsYT.search, {params: {part: 'snippet', q: title}})
    }
}

export const youtubeService = new YoutubeService()