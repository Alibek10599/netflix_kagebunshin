const API_KEY = "64372286ba44775a178af3c19a53505f";

const requests = {
    fetchTrending : `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
     fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    
}

export default requests;