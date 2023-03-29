import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';

const Movies = ({addtoLocalStorage}) => {
    const [movies,setMovies]=useState([])
    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setMovies(data))
    },[])
    return (
        <div className='bg-black my-4 grid grid-cols-1 md:grid-cols-2'>
            {
               movies.map(movie=><Movie addtoLocalStorage={addtoLocalStorage} movie={movie}></Movie>) 
            }
        </div>
    );
};

export default Movies;