import {IRes} from "../types";
import {IMovieData} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constants";

class MovieService{
    getMovies(page: number = 1):IRes<IMovieData>{
        return  axiosService.get(urls.discoverMovie, {params: {page}})
    }
}

export const movieService = new MovieService()