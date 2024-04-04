import {IRes} from "../types";
import {IMoviesResponse} from "../interfaces/movies.interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constants";


class MovieService{
    sortByVoteCount(page:number = 1, sort_by:string = 'vote_count.desc'): IRes<IMoviesResponse>{
        return axiosService.get(urls.discoverMovie, {params: {page, sort_by}})
    }
    /*getMovies(page:number = 1):IRes<IMovieData>{
        return  axiosService.get(urls.discoverMovie, {params: {page}})
    }
    search(query: string, page: string|number = 1):IRes<ISearch>{
        return axiosService.get(urls.searchKeyword, {params: {query, page}})
    }*/
}

export const movieService = new MovieService()
