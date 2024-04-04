const baseURL = 'https://api.themoviedb.org/3'

const discover = 'discover'
const movie = 'movie'
const search = 'search'
const keyword = 'keyword'
const account = 'account/nooob199505'
const urls = {
    discoverMovie: `${discover}/${movie}`,
    searchKeyword: `${search}/${keyword}`,
    getAccInfo: account
}


export {
    baseURL, urls
}