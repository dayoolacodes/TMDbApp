import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from '../Nowplaying/NowplayingElements';
// import {Input, Form, Button, Label} from './SearchMoviesElements'

const SearchMovies = ({searchedMovies, handleSetClickedMovie, handleFavMovie})  => { 
    return ( 
        <>
      {console.log(searchedMovies)}
     {searchedMovies.map((movie) => {
                    return (
                    <Container key={movie.id} onClick={() => handleSetClickedMovie(movie)}>
                    <Link to='/about'><img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt= {`${movie.title}_img`} /></Link>
                    <p><b>Title:</b> {movie.title}</p>
                    <p><b>Release Date:</b> {movie.release_date}</p>
                    <p><b>Vote Average:</b> {movie.vote_average}</p>
                    <p><b onClick={()=> handleFavMovie(movie)}> <FaHeart /></b></p>
                    </Container>
                    )
                    })
          }
        
        </>
     );
}
 
export default SearchMovies;