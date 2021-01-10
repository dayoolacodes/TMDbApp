import React, { useState } from 'react';
import { Container, Select, SelectWrapper } from './NowplayingElements';
import {Link} from 'react-router-dom'
import { FaHeart } from 'react-icons/fa';


const Nowplaying = ({ orderedMovie, handleSetClickedMovie, handleFavMovie}) => {
 const [order, setOrder] = useState(true)
 
    return ( 
        <>
        <h2 style={{textAlign:'center'}}>Now Playing</h2>
                    <SelectWrapper>
                    <div>
                      <Link to='/favorites'>
                        <span style={{border:'0.5px solid #e4e5e9', fontWeight:'normal', borderRadius:'10px', padding:'5px'}}> 
                      My Favourites
                       </span>
                       </Link>
                      </div>
                    <div>
                      
                    <Select onChange={() => setOrder(!order)}>
                        <option value="Asc" >Ascending</option>
                        <option value="Desc">Descending</option>
                    </Select>
                    </div>
                    </SelectWrapper>
                    {orderedMovie.map((movie) => {
                    return (
                    <Container key={movie.id} onClick={() => handleSetClickedMovie(movie)}>
                    <Link to='/about'><img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt= {`${movie.title}_img`} /></Link>
                    <p><b>Title:</b> {movie.title}</p>
                    <p><b>Release Date:</b> {movie.release_date}</p>
                    <p><b>Vote Average:</b> {movie.vote_average}</p>
                    <p><b onClick={()=> handleFavMovie(movie)}> <FaHeart/></b></p>
                    </Container>
                    )
                    })}
        </>
     );
}
 
export default Nowplaying;