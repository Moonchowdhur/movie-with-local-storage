import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Movies from './components/Movies/Movies';


const App = () => {
  const [time,setTime]=useState(0)
  let sum=0
  function addtoLocalStorage(time){
    const storedData=JSON.parse(localStorage.getItem("watch-time"))
    if(storedData){
      sum=storedData+time
      localStorage.setItem("watch-time",sum)
      setTime(sum)
    }
    else{
      localStorage.setItem("watch-time",time)
      setTime(time)
    }
  }
  console.log(8,time)
  return (
    <>
     <Header></Header>
     <div className=' bg-black flex px-12 gap-20'>
     <Movies addtoLocalStorage={addtoLocalStorage}></Movies>
     <Cart time={time}></Cart>
     </div>
    </>
  );
};

export default App;