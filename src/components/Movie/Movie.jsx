import React from 'react';
import { FaRegBookmark} from 'react-icons/fa';
import { BsFillBookmarkCheckFill} from 'react-icons/bs';
const Movie = ({movie,addtoLocalStorage}) => {
   
 
   const {movieName,poster,watchTime,imdbRating,description}=movie
   let sum=0;
   function bookmarkadd(){
    const stored=JSON.parse(localStorage.getItem("watch-time"))
    if(stored){
     sum=stored+watchTime;
     localStorage.setItem("watch-time",sum)
    }
    else{
        localStorage.setItem("watch-time",watchTime)
    }
    
}
    return (
        <>
           <div className="card card-compact border-4 w-80 p-4 m-3 text-white bg-[#66347F] my-4 shadow-xl">
           <div className='text-white flex gap-60'>
            <FaRegBookmark/>
            {/* <BsBookFill/> */}
            <span onClick={bookmarkadd}>
            <BsFillBookmarkCheckFill />
            </span>
          
           
           </div>
         <figure>
            <img src={poster} className="w-[200px]" alt="Shoes" /></figure>
        <div className="card-body">
        <h2 className="card-title">{movieName}</h2>
       <p>{description}</p>
       <p>Time:{watchTime}</p>
       <p>Rating:{imdbRating}</p>
       <div className="card-actions justify-end">
      <button onClick={()=>addtoLocalStorage(watchTime)} className="btn w-full bg-violet-500">Book Now</button>
    </div>
  </div>
</div> 
        </>
    );
};

export default Movie;