const API_KEY = "64372286ba44775a178af3c19a53505f";

const requests = {
    fetchTrending : `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
     fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
     fetchWestern: `https://api.themoviedb.org/3/discover/movie?api_key=64372286ba44775a178af3c19a53505f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=37`,
     fetchAction: `https://api.themoviedb.org/3/discover/movie?api_key=64372286ba44775a178af3c19a53505f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`,
     fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=64372286ba44775a178af3c19a53505f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35`,
     fetchFantasy: `https://api.themoviedb.org/3/discover/movie?api_key=64372286ba44775a178af3c19a53505f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14`,
     fetchHorror: `https://api.themoviedb.org/3/discover/movie?api_key=64372286ba44775a178af3c19a53505f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27`,
     fetchHistory:`https://api.themoviedb.org/3/discover/movie?api_key=64372286ba44775a178af3c19a53505f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=36`,
     fetchSciFi: `https://api.themoviedb.org/3/discover/movie?api_key=64372286ba44775a178af3c19a53505f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878`,
     fetchWar : `https://api.themoviedb.org/3/discover/movie?api_key=64372286ba44775a178af3c19a53505f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10752`,
}

export default requests;