import {IRes} from "../types";
import {IYouTubeResponse} from "../interfaces";
import {axiosYTService} from "./axios.youtube.service";
import {urlsYT} from "../constants";

class YoutubeService{
    search(title: string): IRes<IYouTubeResponse>{
        return axiosYTService.get(urlsYT.search, {params: {part: 'snippet', q: title, key:'AIzaSyAsMGLJTdiIxG1MIy-C8JLMR7DodWFiwjo'}})
    }
}

export const youtubeService = new YoutubeService()