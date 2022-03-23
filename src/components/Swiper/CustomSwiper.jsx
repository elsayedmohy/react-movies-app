import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Skeleton from '@mui/material/Skeleton';
import { IMAGE_PATH } from '../../api';
import "swiper/css";
import "./swiper.css"
import { useNavigate } from 'react-router-dom';
import { Box, Grid } from '@mui/material';



export default function CustomSwiper({load , title , request}) {
  const [movies , setMovies] = useState([]);
  const [loading , setLoading] = useState(false)
    useEffect(()=>{
     
        const fetchMovies = async () => {
            setLoading(true)
            const {data} = await axios.get(`${request}`)
            setMovies(data.results)
            setLoading(false)
        } ;
        fetchMovies()
    },[])
    const navigate = useNavigate()
  return   <>
  <p className='rowTitle'>{title}</p>

    <Swiper
    slidesPerView={8}
    spaceBetween={17}
    pagination={{
      clickable: true,
    }}
    className="myCustomSwiper"
  >
   {!loading && !load  ? movies.map((movie)=> (
            <SwiperSlide className='CustomSwiper-slide' onClick={()=> navigate(`movies/${movie.id}`)} key={movie.id}>
            <img src={`${IMAGE_PATH}${movie.poster_path}`} alt={movie.title} />
            </SwiperSlide>    
   )) :
   <Grid container>
   <Skeleton variant="rectangular"  sx={{borderRadius:2,margin:1 , backgroundColor:"#454e56"}} width={210} height={340} /> 
   <Skeleton  variant="rectangular"  sx={{borderRadius:2 ,margin:1, backgroundColor:"#454e56"}} width={210} height={340} /> 
   <Skeleton  variant="rectangular"  sx={{borderRadius:2 ,margin:1, backgroundColor:"#454e56"}} width={210} height={340} /> 
   <Skeleton  variant="rectangular"  sx={{borderRadius:2 ,margin:1, backgroundColor:"#454e56"}} width={210} height={340} /> 
   <Skeleton  variant="rectangular"  sx={{borderRadius:2 ,margin:1, backgroundColor:"#454e56"}} width={210} height={340} /> 
   <Skeleton  variant="rectangular"  sx={{borderRadius:2 ,margin:1, backgroundColor:"#454e56"}} width={210} height={340} /> 
   <Skeleton  variant="rectangular"  sx={{borderRadius:2 ,margin:1, backgroundColor:"#454e56"}} width={210} height={340} /> 
   </Grid>   
   }
      
  </Swiper>
  </>;
}
