import {IRes} from "../types";
import {IMovieInfo, IMovieRatingResponse, IMoviesResponse} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IUser} from "../interfaces";
import {IGenresData} from "../interfaces/genres.interface";
import {IAddRatingResponse, IRating} from "../interfaces/rating.interface";


class MovieService{
    addRating(rating: IRating, id: number):IRes<IAddRatingResponse>{
        return  axiosService.post(`${urls.addRating}/${id}/rating`, rating)
    }
    getRatingResult(page: string = '1'):IRes<IMovieRatingResponse>{
        return axiosService.get(urls.accRatingFilm, {params: {page}})
    }
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
    setLocalStorage(id: string, title: string, release_date: string):void{
        localStorage.setItem('id', id)
        localStorage.setItem('title', title)
        localStorage.setItem('release_date', release_date)
    }
    getLocalStorage():void{
        localStorage.getItem('id')
        localStorage.getItem('title')
        localStorage.getItem('release_date')
    }
    deleteStorage():void{
        localStorage.removeItem('id')
        localStorage.removeItem('title')
        localStorage.removeItem('release_date')
    }
}

export const movieService = new MovieService()
