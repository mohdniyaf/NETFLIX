import React, { useEffect, useState } from 'react';
import './Rowpost.css';
import axios from '../../axios';
import {  imageUrl } from '../../constants/constants';

function Rowpost(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(props.urls).then(response => {
      console.log(response.data);
      setMovies(response.data.results);
    });
  }, []);

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map(obj => (                  
          <img  className={ props.isSmall ? 'smallposter' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="" />
        ))}
      </div>
    </div>
  );
}

export default Rowpost;

