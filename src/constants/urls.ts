const baseURL = 'https://api.themoviedb.org/3'

const discover = 'discover'
const movie = 'movie'
const search = 'search'
const keyword = 'keyword'
const rating = 'rating'

const urls = {

    discoverMovie: `${discover}/${movie}`,
    searchKeyword: `${search}/${keyword}`,
    addRatingToMovie: `${movie}`
}


export {
    baseURL, urls
}