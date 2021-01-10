import React from 'react';
import { Link } from 'react-router-dom';
import { LinkR, LinkWrapper } from '../Nowplaying/AboutMovie/AboutMovieElements';
import { Container } from '../Nowplaying/NowplayingElements';

const Favorites = (favMovie, setClickedMovie, handleSetClickedMovie) => {
    
    
    return ( 
        <>
        {favMovie.favMovie? <h3>Your Favourites</h3> : <h3> You have no favorites yet </h3>}
           {favMovie.favMovie.map((movie) => {
                    return (
                    <Container key={movie.id} onClick={() => handleSetClickedMovie(movie)}>
                    <Link to='/about'><img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt= {`${movie.title}_img`} /></Link>
                    <p><b>Title:</b> {movie.title}</p>
                    <p><b>Release Date:</b> {movie.release_date}</p>
                    <p><b>Vote Average:</b> {movie.vote_average}</p>
                    
                    </Container>
                    )
                    })}
       
        <LinkWrapper>
            <LinkR to='/'>Go Back Home</LinkR>
        </LinkWrapper>
        </>
     );
}
 
export default Favorites;