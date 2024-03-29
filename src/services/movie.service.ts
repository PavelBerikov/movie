import {IRes} from "../types";
import {IMovieData} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constants";


class MovieService{
    getFilterMovies(page:number = 1, with_genres:string):IRes<IMovieData>{
        return  axiosService.get(urls.discoverMovie, {params: {page, with_genres}})
    }
}

export const movieService = new MovieService()
