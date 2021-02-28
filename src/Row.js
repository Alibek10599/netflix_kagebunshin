import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Row.css"
import requests from './requests';


const base_url = "https://image.tmdb.org/t/p/original/";
function Row ({title, fetchURL} ){
  const [movies, setMovies] = useState([]);

  useEffect(() => {
        // []runs once
        async function fetchData() {
            const request = await axios.get(fetchURL);
            
           setMovies(request.data.results);
           
            return request;
        }
        fetchData();
  }, [fetchURL]);
  console.table(movies);
  return (<div className="row">
        <h2>{title}</h2>
     <div className="row_posters">
      { movies.map((movie) => (
      <img
          key={movie.id}
          className="row_poster"
          src={`${base_url}${movie.poster_path}`}
          alt={movie.name}
      />
      ))}
     </div>
  </div>);
}

export default Row;