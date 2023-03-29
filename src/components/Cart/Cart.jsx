import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Cart = ({time}) => {
    const [watchtime,setWatchtime]=useState(0)
    const [breakt,setBreakt]=useState(0)

    // to show ui , we collect data from local storage using useeffect
    useEffect(()=>{
     const storedtime=JSON.parse(localStorage.getItem("watch-time"))
     if(storedtime){
        setWatchtime(storedtime)
     }
     const storedbreaktime=JSON.parse(localStorage.getItem("break-time"))
     if(storedbreaktime){
        setBreakt(storedbreaktime)
     }
    },[time])

    function clicktoast(){
        const sub=watchtime-breakt;
        console.log(sub)
        toast("Total Time is:"+sub+"sec")
    }
     
    function handledata(breaktime){
    localStorage.setItem("break-time",breaktime)
      setBreakt(breaktime)
    }
    function handle2data(breaktime){
        localStorage.setItem("break-time",breaktime)
        setBreakt(breaktime)
      }
      function handle3data(breaktime){
        localStorage.setItem("break-time",breaktime)
        setBreakt(breaktime)
      }
    return (
        <div className='border-4 px-24 bg-[#ABC4AA] fixed top-13 right-5'> 
            <h2 className='text-3xl font-bold'>My cart</h2>
            <h2 className='text-xl my-5'>Total Watch time</h2>
            <input type="text" value={watchtime} className="input input-bordered  my-3 input-primary w-full max-w-xs" />
            <h2 className='text-xl font-bold my-5'>Add Break time</h2>
            <button onClick={()=>handledata(15)} className="btn btn-success mx-3">15</button>
            <button onClick={()=>handle2data(20)} className="btn btn-warning mx-3">20</button>
            <button onClick={()=>handle3data(25)} className="btn btn-error mx-3">25</button><br></br>
            <input type="text" value={breakt} className="input input-bordered  my-3 input-primary w-full max-w-xs" />
            <button onClick={clicktoast} className="btn bg-red-600 my-16 mx-4">Complete</button>
            <ToastContainer />
        </div>
    );
};

export default Cart;