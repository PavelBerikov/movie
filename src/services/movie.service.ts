import {IRes} from "../types";
import {IGenresData} from "../interfaces/genre.interface";
import {axiosService} from "./axios.service";
import {urls} from "../constants";


class MovieService{
    getGenres(): IRes<IGenresData>{
        return axiosService.get(urls.genreMovieList)
    }
    /*getMovies(page:number = 1):IRes<IMovieData>{
        return  axiosService.get(urls.discoverMovie, {params: {page}})
    }
    search(query: string, page: string|number = 1):IRes<ISearch>{
        return axiosService.get(urls.searchKeyword, {params: {query, page}})
    }*/
}

export const movieService = new MovieService()
