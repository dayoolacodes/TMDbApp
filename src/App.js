import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import AboutMovie from './components/Nowplaying/AboutMovie';
import { useEffect, useState } from 'react';
import { Container, Select, SelectWrapper } from './components/Nowplaying/NowplayingElements';
import { Button, Form, Input, Label } from './components/SearchMovies/SearchMoviesElements';
import { LinkR } from './components/Nowplaying/AboutMovie/AboutMovieElements';

function App() {
  const [movies, setMovies] = useState([])
  const [genreList, setGenreList] = useState([])
 const [order, setOrder] = useState(true)
 const [clickedMovie, setClickedMovie] = useState([])
 const [query, setQuery] = useState('')
const [searchedMovies, setSearchedMovies] = useState([])

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
              // console.log(data)
              
              const getGenreUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=a5babee5a188ccf49db8c5cad0da7bf6&language=en-US';
              const genreRes = await fetch(getGenreUrl);
              const genreData = await genreRes.json();
              setGenreList(genreData)

               const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=a5babee5a188ccf49db8c5cad0da7bf6&language=en-US&query=${query}&page=1&include_adult=false`;
                if(query){
                const searchRes = await fetch(searchUrl);
                const searchedData = await searchRes.json()
                setSearchedMovies(searchedData.results)
                
                }
            }
            catch(err){
                console.error(err)
            }
            }
        fetchNowplayingMovies()
    },[query])

 

    
  return (
  <Router>
    <div className='container'>
      <LinkR to='/'><h1 className='title'> TMDb App</h1></LinkR>
      <Switch>
              <Route path="/about">
                {clickedMovie&&genreList? <AboutMovie movie={clickedMovie} genreList={genreList} />: null}
              </Route>
              <Route path="/">
                <Form>
                <Label htmlFor='query'> Movies </Label>
                <Input type='text' name='query' value={query} placeholder="Search Movies..." onChange={(e) => setQuery(e.target.value)} />
                <Button type='submit'> Search </Button>
               {searchedMovies.length>0?<Button style={{color:'salmon', background:'white', border:'1px solid salmon'}}
                onClick={()=> window.location.reload()}> Cancel Search 
                </Button> : ' '}
              </Form>
            
          {searchedMovies.map((movie) => {
                    return (
                    <Container key={movie.id} onClick={() => setClickedMovie(movie)}>
                    <Link to='/about'><img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt= {`${movie.title}_img`} /></Link>
                    <p><b>Title:</b> {movie.title}</p>
                    <p><b>Release Date:</b> {movie.release_date}</p>
                    <p><b>Vote Average:</b> {movie.vote_average}</p>
                    </Container>
                    )
                    })
        }
                    <h2 style={{textAlign:'center'}}>Now Playing</h2>
                    <SelectWrapper>
                    <span style={{margin:'5px'}}>Sort By:</span>
                    <Select onChange={() => setOrder(!order)}>
                        <option value="Asc" >Ascending</option>
                        <option value="Desc">Descending</option>
                    </Select>
                    </SelectWrapper>
                    {orderedMovie.map((movie) => {
                    return (
                    <Container key={movie.id} onClick={() => setClickedMovie(movie)}>
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
