import {IRes} from "../types";
import {IMovieData, ISearch} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constants";

class MovieService{
    getMovies(page:number = 1):IRes<IMovieData>{
        return  axiosService.get(urls.discoverMovie, {params: {page}})
    }
    search(query: string, page: string|number = 1):IRes<ISearch>{
        return axiosService.get(urls.searchKeyword, {params: {query, page}})
    }
}

export const movieService = new MovieService()