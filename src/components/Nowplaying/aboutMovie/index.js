import React from 'react';
// import { Link } from 'react-router-dom';
import { LinkR, LinkWrapper } from './aboutMovieElements';

const AboutMovie = ({movie, genreList}) => {

    
    return ( 
        
        <>
        {console.log(genreList.genres.map(e => e))}
        <h2 style={{color:'#EA8B20 '}}>{movie.title}</h2>
        <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt= {`${movie.title}_img`} />
        <p><b>Year of Release:</b> {movie.release_date.slice(0,4)}</p>
        <p><b>Overview:</b> {movie.overview}</p>
        <p><b>Genre:</b> {movie.genre_ids.map(e => genreList +' ')}</p>
        <LinkWrapper>
            <LinkR to='/'>Go Back Home</LinkR>
        </LinkWrapper>
        </>
     );
}
 
export default AboutMovie;