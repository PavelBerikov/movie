const baseURL = 'https://api.themoviedb.org/3'

const discover = 'discover'
const movie = 'movie'
const search = 'search'
const keyword = 'keyword'
const account = 'account/nooob199505'
const genre = 'genre'
const list = 'list'
const rated = 'rated'
const id = '21124693'

const urls = {
    discoverMovie: `${discover}/${movie}`,
    searchKeyword: `${search}/${keyword}`,
    getAccInfo: account,
    getMovieInfo: '/movie',
    searchMovie: `${search}/${movie}`,
    genreMovieList: `${genre}/${movie}/${list}`,
    accRatingFilm: `account/${id}/${rated}/${movie}s`,
    addRating: movie
}


const baseYTURL = 'https://www.googleapis.com/youtube/v3'
const urlsYT = {
    search: '/search'
}

export {
    baseURL, urls, baseYTURL, urlsYT
}
