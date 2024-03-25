const baseURL = 'https://api.themoviedb.org/3'

const discover = 'discover'
const movie = 'movie'
const search = 'search'
const keyword = 'keyword'
const genre = 'genre'
const list = 'list'
const urls = {
    discoverMovie: `${discover}/${movie}`,
    searchKeyword: `${search}/${keyword}`,
    genreMovieList: `${genre}/${movie}/${list}`
}


export {
    baseURL, urls
}