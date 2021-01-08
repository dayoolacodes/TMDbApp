import './App.css';
// import Nowplaying from './components/Nowplaying';
import SearchMovies from './components/SearchMovies';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import AboutMovie from './components/Nowplaying/aboutMovie';
import { useEffect, useState } from 'react';
import { Container, Select, SelectWrapper } from './components/Nowplaying/NowplayingElements';

function App() {
  const [movies, setMovies] = useState([])
  const [genreList, setGenreList] = useState([])
 const [order, setOrder] = useState(true)
 const [clickedMovie, SetClickedMovie] = useState([])


  const orderedMovie =
     movies.sort((a,b)=>{
         if(order){
            if(a.title.toLowerCase() > b.title.toLowerCase())
                return 1
            else if(a.title.toLowerCase() < b.title.toLowerCase())
                return -1
            return 0
        }
        else{
             if(a.title.toLowerCase() < b.title.toLowerCase())
                return 1
            else if(a.title.toLowerCase() > b.title.toLowerCase())
                return -1
            return 0
        }
        })
  

   useEffect (()=>{
          async function fetchNowplayingMovies() {
            try{
              const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=a5babee5a188ccf49db8c5cad0da7bf6&language=en-US&page=1';
              const res = await fetch(url);
              const data = await res.json()
              setMovies(data.results)
              console.log(data)
              
              const getGenreUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=a5babee5a188ccf49db8c5cad0da7bf6&language=en-US';
              const genreRes = await fetch(getGenreUrl);
              const genreData = await genreRes.json();
              setGenreList(genreData)
            }
            catch(err){
                console.error(err)
            }
            }
        fetchNowplayingMovies()
    },[])

    
  return (
  <Router>
    <div className='container'>
      <h1 className='title'> TMDb App</h1>
      <Switch>
              <Route path="/about">
                <AboutMovie movie={clickedMovie} genreList={genreList} />
              </Route>

              <Route path="/">
                <SearchMovies movies={movies} />
                    <h2>Now Playing</h2>
                    <SelectWrapper>
                    <span style={{margin:'5px'}}>Sort By:</span>
                    <Select onChange={() => setOrder(!order)}>
                        <option value="Asc" >Ascending</option>
                        <option value="Desc">Descending</option>
                    </Select>
                    </SelectWrapper>
                    {orderedMovie.map((movie) => {
                    return (
                    <Container key={movie.id} onClick={() => SetClickedMovie(movie)}>
                    <Link to='/about'><img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt= {`${movie.title}_img`} /></Link>
                    <p><b>Title:</b> {movie.title}</p>
                    <p><b>Release Date:</b> {movie.release_date}</p>
                    <p><b>Vote Average:</b> {movie.vote_average}</p>
                    </Container>
                    )
                    })}

          </Route>
        </Switch>
    </div>
  </Router>
  );
}

export default App;
