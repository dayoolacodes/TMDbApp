import React, { useEffect, useState } from 'react';
import {FaStar} from 'react-icons/fa'
import { Input } from './RatingElements';


const Rating = ({movie}) => {
    const [ratingVal, setRatingVal] = useState(null)


   

    const postRating = async (e)=>{
        setRatingVal(e)
        const data = {
            value: e * 2
        }
        // await axios.post(`https://api.themoviedb.org/3/movie/${movie.id}/rating?api_key=a5babee5a188ccf49db8c5cad0da7bf6`, data)
        // .then((resp)=>{
        //     console.log(resp)
        // })
        await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/rating?api_key=a5babee5a188ccf49db8c5cad0da7bf6`, {
        method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({data})
        }).then(resp =>{
            console.log(resp)
            alert('Your Rating Has Been Submitted')
             
        });
    }


    return ( 
        <>
        {
        [1,2,3,4,5].map(e => 
        <label key={e}>
            <Input type="radio" name="rating" value={e} onClick={() =>{postRating(e)}} />
            <FaStar color={e <= ratingVal? '#EA8B20' : '#e4e5e9'} />
        </label>)
        
        }
        
        
        </>
     );
    
}
 
export default Rating;