export const API_KEY = 'a73a7d2e3dc90e716cfc7b3c0bf90cf5';

// const exampleOfUrl = 'https://api.themoviedb.org/3/trending/all/week?api_key=a73a7d2e3dc90e716cfc7b3c0bf90cf5';

// image path url : https://image.tmdb.org/t/p/original/{fPtlCO1yQtnoLHOwKtWz7db6RGU.jpg}
// trainer video : https://www.youtube.com/watch?v={SUXWAEX2jlg} --> key=SUXWAEX2jlg
// &append_to_response=videos

const requests = {
    fetchTrending: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_null_first_air_dates=false`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchActionsMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=28&append_to_response=videos`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=35&append_to_response=videos`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=27&append_to_response=videos`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=10749&append_to_response=videos`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=99&append_to_response=videos`,
}

export default requests;