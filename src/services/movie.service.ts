import {IRes} from "../types";
import {IMovieInfo, IMoviesResponse} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IUser} from "../interfaces";


class MovieService{
    sortByVoteCount(page:number = 1, sort_by:string = 'vote_count.desc'): IRes<IMoviesResponse>{
        return axiosService.get(urls.discoverMovie, {params: {sort_by, page}})
    }
    getAcc():IRes<IUser>{
        return axiosService.get(urls.getAccInfo)
    }
    getMovieInfo(id: number): IRes<IMovieInfo>{
        return axiosService.get(`${urls.getMovieInfo}/${id}`)
    }
    /*getMovies(page:number = 1):IRes<IMovieData>{
        return  axiosService.get(urls.discoverMovie, {params: {page}})
    }
    search(query: string, page: string|number = 1):IRes<ISearch>{
        return axiosService.get(urls.searchKeyword, {params: {query, page}})
    }*/
}

export const movieService = new MovieService()
