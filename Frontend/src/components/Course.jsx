
import React, { useEffect, useState } from 'react';
// import list from "../../public/list.json";
import Cards from './Cards';
import axios from "axios";
import { Link } from "react-router-dom";

const Course = () => {
  const [book,setBook]=useState ([])
 useEffect(()=>{
  const getBook=async()=>{
    try{
 const res=await axios.get("http://localhost:4001/book");
 console.log(res.data);
 setBook(res.data);
    }catch(error){
      console.log("errpr",error)

    }
  }
  getBook();
 },[])
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 bg-light dark:bg-dark'>
  <input type="text" className="grow outline-none text-1xl dark:bg-slate-900 "  />
        <div className='mt-20 items-center justify-center text-center '>
          <h1 className='text-2xl font-bold md:text-4xl'>
            We are delighted to have you <span className='text-pink-500'>here!</span>
          </h1>
          <p className='mt-15 text-2xl'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam nemo id quaerat consequuntur neque numquam aliquid eligendi nesciunt soluta accusamus iste magnam provident quod velit, modi eaque? Est culpa repellat enim reprehenderit, deleniti rem! Itaque.
          </p>
          <Link to="/">
            <button className='bg-pink-500 text-white px-4 py-2 mt-5 rounded-md'>Back</button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            book.map((item) => (
              <Cards item={item} key={item.id} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Course;

