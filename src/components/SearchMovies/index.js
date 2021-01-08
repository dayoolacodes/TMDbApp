import React, { useState } from 'react';
import {Input, Form, Button, Label} from './SearchMoviesElements'

const SearchMovies = ({movies})  => {
const [query, setQuery] = useState('')
    const searchMovies = async (e)=>{
        e.preventDefault()
                const url = `https://api.themoviedb.org/3/search/movie?api_key=a5babee5a188ccf49db8c5cad0da7bf6&language=en-US&query=${query}&page=1&include_adult=false`;
                if(query){
                const res = await fetch(url);
                const data = await res.json()
                console.log(data)
                }
     
    }

    return ( 
        <Form onSubmit={searchMovies}>
        <Label htmlFor='query'> Movies </Label>
        <Input type='text' name='query' value={query} placeholder="Enter Movie Name" onChange={(e) => setQuery(e.target.value)} />
        <Button type='submit'> Search </Button>
        </Form>
     );
}
 
export default SearchMovies;