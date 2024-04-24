import {IRes} from "../types";
import {IMovieInfo, IMoviesResponse} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IUser} from "../interfaces";
import {IGenresData} from "../interfaces/genres.interface";


class MovieService{
    searchByGenre(page: string = '1',  with_genres: string): IRes<IMoviesResponse>{
        return axiosService.get(urls.discoverMovie, {params: {with_genres, page}})
    }
    getGenres(): IRes<IGenresData>{
        return axiosService.get(urls.genreMovieList)
    }
    searchMovie(page:string = '1', query: string):IRes<IMoviesResponse>{
        return axiosService.get(urls.searchMovie, {params: {query, page}})
    }
    sortByVoteCount(page:number = 1, sort_by:string = 'vote_count.desc'): IRes<IMoviesResponse>{
        return axiosService.get(urls.discoverMovie, {params: {sort_by, page}})
    }
    getAcc():IRes<IUser>{
        return axiosService.get(urls.getAccInfo)
    }
    getMovieInfo(id: string): IRes<IMovieInfo>{
        return axiosService.get(`${urls.getMovieInfo}/${id}`)
    }
    setLocalStorage(id: string, title: string):void{
        localStorage.setItem('id', id)
        localStorage.setItem('title', title)
    }
    getLocalStorage():void{
        localStorage.getItem('id')
        localStorage.getItem('title')
    }
    deleteStorage():void{
        localStorage.removeItem('id')
        localStorage.removeItem('title')
    }
    /*getMovies(page:number = 1):IRes<IMovieData>{
        return  axiosService.get(urls.discoverMovie, {params: {page}})
    }
    search(query: string, page: string|number = 1):IRes<ISearch>{
        return axiosService.get(urls.searchKeyword, {params: {query, page}})
    }*/
}

export const movieService = new MovieService()
