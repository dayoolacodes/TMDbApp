import React, { useEffect, useState } from 'react';
import { LinkR, LinkWrapper } from './AboutMovieElements';
import Rating from './Ratings';
import RecommendedMovies from './RecommendedMovies';

const AboutMovie = ({movie, genreList}) => {
    const [abtMov, setAbtMov] = useState(movie)
    const [actors, setActors] = useState({})
    const [recommendedMovies, setRecommendedMovies] = useState({})


    const handleAbtMov=(e)=>{
        setAbtMov(e)
    }


    useEffect( ()=>{
        const fetchUrl = async () =>
    {
        
        const url = `https://api.themoviedb.org/3/movie/${abtMov.id}/credits?api_key=a5babee5a188ccf49db8c5cad0da7bf6`
        const res = await fetch(url);
        const data = await res.json();
        setActors({data});

        const recommendedMoviesFetch = `https://api.themoviedb.org/3/movie/${abtMov.id}/recommendations?api_key=a5babee5a188ccf49db8c5cad0da7bf6&language=en-US&page=1`
        const recommendedMoviesRes = await fetch(recommendedMoviesFetch);
        const recommendedMoviesData = await recommendedMoviesRes.json();
        setRecommendedMovies({recommendedMoviesData});

    }
    fetchUrl();
},[abtMov.id])
 
try{
    
    return ( 
        <>
        {/* {console.log(movie)} */}
        <img src={`https://image.tmdb.org/t/p/w300/${abtMov.poster_path}`} alt= {`${abtMov.title}_img`} />
        <h2 style={{color:'#EA8B20'}}>{abtMov.title}</h2>
        <p><b>Year of Release:</b> {abtMov.release_date.slice(0,4)}</p>
        <p><b>Overview:</b> {abtMov.overview}</p>
        <p><b>Genres:</b> {abtMov.genre_ids.map(e => {
            return genreList.genres.map(m => {
                return e===m.id? m.name+' ' : null
            })
        })}
        </p>
        <p><b>Rating:</b> {movie.vote_average}</p>

        <b style={{margin: 0}}>Rate Movie: </b><Rating movie={abtMov} />
        

        <p style={{marginTop:'20px'}}><b>Actors : </b>
        </p>
         {<table border={1} cellPadding={9} style={{border:'none'}}>
           <thead>
              <tr>
                <td><b>Name</b></td>
                <td><b>Character</b></td>
              </tr>
           </thead>
           <tbody>
              {
                 actors.data? actors.data.cast.map((e,i) =>
                 <tr key={i}>
                       <td>{e.name}</td>
                       <td>{e.character}</td>
                </tr>)
                : null
              }
           </tbody>
        </table>}
        <LinkWrapper>
            <LinkR to='/'>Go Back Home</LinkR>
        </LinkWrapper>
        {recommendedMovies.recommendedMoviesData? 
        <RecommendedMovies recommendedMovies={recommendedMovies.recommendedMoviesData} handleAbtMov={handleAbtMov}/> 
        : null}
        

        </>
     );
    }
    catch(err){
        
    }
}
 
export default AboutMovie;