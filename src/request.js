
const APIKey = "02b6c9cf82f19c88164abaef3272a3b3";

// endpoints:
const requests = {
    fetchTrending: `/trending/all/week?api_key=${APIKey}&language=en-US`,
    fetchPopular: `/movie/popular?api_key=${APIKey}&language=en-US&page=1`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKey}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${APIKey}&with_genres=28`,
}

export default requests;

//https://developers.themoviedb.org/3/movies/get-movie-details