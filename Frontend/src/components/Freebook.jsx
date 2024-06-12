import React from 'react';
// import list from '../../public/list.json';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Cards from './Cards';
import axios from "axios";
import { useState ,useEffect} from 'react';


const Freebook = () => {
  const [book,setBook]=useState([]);
  useEffect(()=>{
   const getBook=async()=>{
     try{
  const res=await axios.get("http://localhost:4001/book");
  console.log(res.data);
  setBook(res.data.filter((data) => data.category === 'Free'));
  
     }catch(error){
       console.log("error",error)
 
     }
   }
   getBook();
  },[])
  // const filterData = list.filter((data) => data.category === 'Free');

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // console.log(filterData);

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
          <h1 className='text-3xl font-bold pb-2 my-2'>Free offered Books</h1>
          <p className='m-5 text-xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, consequuntur! Explicabo aperiam, quod consequatur ratione accusamus sed numquam laudantium qui.</p>
        </div>
        <Slider {...settings}>
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Freebook;
