import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AboutMovie from './components/Nowplaying/AboutMovie';
import { useEffect, useState } from 'react';
import { Button, Form, Input} from './components/SearchMovies/SearchMoviesElements';
import { LinkR } from './components/Nowplaying/AboutMovie/AboutMovieElements';
import Favorites from './components/FavoritesMovies';
import SearchMovies from './components/SearchMovies';
import Nowplaying from './components/Nowplaying';


function App() {
  const [movies, setMovies] = useState([])
  const [genreList, setGenreList] = useState([])
 const [order, setOrder] = useState(true)
 const [clickedMovie, setClickedMovie] = useState([])
 const [query, setQuery] = useState('')
const [searchedMovies, setSearchedMovies] = useState([])
const [favMovie, setFavMovie] = useState([])
const [clickedFav, setClickedFav] = useState(false)
 
  const baseUrl = 'https://api.themoviedb.org/3/movie/';
  const apiKey = 'a5babee5a188ccf49db8c5cad0da7bf6'


   useEffect (()=>{
          async function fetchNowplayingMovies() {
            try{
              const url = `${baseUrl}now_playing?api_key=${apiKey}&language=en-US&page=1`;
              const res = await fetch(url);
              const data = await res.json()
              setMovies(data.results)
              
              
              const getGenreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;
              const genreRes = await fetch(getGenreUrl);
              const genreData = await genreRes.json();
              setGenreList(genreData)

               const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`;
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


  const orderedMovie =
     movies.sort((a,b)=>{
         if(order)
         {
            if(a.title.toLowerCase() > b.title.toLowerCase())
                return 1
            else if(a.title.toLowerCase() < b.title.toLowerCase())
                return -1
            return 0
        }
        else
        {
             if(a.title.toLowerCase() < b.title.toLowerCase())
                return 1
            else if(a.title.toLowerCase() > b.title.toLowerCase())
                return -1
            return 0
        }
        })
  
const handleSetOrder = () =>{
  setOrder(!order)
}

 const handleFavMovie = (m) =>{
      const newFavMovie = [...favMovie, m]
      Object.values(favMovie).map(e => {
        if(e.id===m.id){
          newFavMovie.pop()
          alert('movie already in favorites')
          
        }
      })
    setFavMovie(newFavMovie)  
   setClickedFav(!clickedFav)
 }
 const handleSetClickedMovie =(m) =>{
  setClickedMovie(m)
 }

    
  return (
  <Router>
    <div className='container'>
      <LinkR to='/'><h1 className='title'> TMDb App</h1></LinkR>
      
      <Switch>
          <Route path='/favorites'>
            <Favorites favMovie={favMovie} setClickedMovie={setClickedMovie} />
          </Route>
          
          <Route path="/about">
                <AboutMovie movie={clickedMovie} genreList={genreList} />
          </Route>

          <Route path="/">  
            <Form>
                <Input type='text' name='query' value={query} placeholder="Search Movies..." onChange={(e) => setQuery(e.target.value)} />
               
                {searchedMovies.length>0?<Button onClick={()=> window.location.reload()}> 
               Cancel Search 
                </Button> : ' '}
              
            </Form>
                <SearchMovies 
                searchedMovies={searchedMovies} 
                handleSetClickedMovie={handleSetClickedMovie} 
                handleFavMovie = {handleFavMovie}
                />
                <Nowplaying 
                handleSetOrder={handleSetOrder} 
                  orderedMovie={orderedMovie} 
                  handleSetClickedMovie={handleSetClickedMovie}
                  handleFavMovie={handleFavMovie}
                  />  
          </Route>
        </Switch>
        <p style={{textAlign:'center', color:'#cecece'}}> Dayoola &#169; 2021</p>
    </div>
  </Router>
  );
}

export default App;
