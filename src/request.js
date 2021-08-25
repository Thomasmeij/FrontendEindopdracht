
const APIKey= process.env.REACT_APP_TMDB_API_KEY

// endpoints:
const requests = {
    fetchTrending: `/trending/all/week?api_key=${APIKey}&language=en-US`,
    fetchPopular: `/movie/popular?api_key=${APIKey}&language=en-US&page=1`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKey}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${APIKey}&with_genres=28`,
    fetchDocumentaries: `/discover/movie?api_key=${APIKey}&with_genres=99`,
    fetchComedyMovies: `/discover/movie?api_key=${APIKey}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${APIKey}&with_genres=27`,
    fetchNetflixOriginals: `/discover/tv?api_key=${APIKey}&with_networks=213`
}

export default requests;

//fetchLatestReleasesEnglish: `/movie/latest?api_key=${APIKey}&language=en-US`
//https://developers.themoviedb.org/3/movies/get-movie-details