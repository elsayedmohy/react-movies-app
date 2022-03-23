import React,{useEffect , useState} from 'react';
import {BASE_URL , API_KEY, IMAGE_PATH} from "../../api"
import axios from 'axios';
import "./hero.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';


import 'swiper/css';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
    const [result , setResult] =useState([])
    useEffect(()=>{
        const fetchHero = async()=> {
            const {data} = await axios.get(`${BASE_URL}popular?api_key=${API_KEY}&language=en-US`)
            setResult(data.results)
        }

        fetchHero()

    },[])

const navigate = useNavigate()

    return (
        <div className='hero'>
         <Swiper
         className='heroSwiper'
         centeredSlides={true}
      spaceBetween={0}
      modules={[Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
    >
        {result.map((res)=>{
            return  <SwiperSlide className='heroSwiper-slider' key={res.id}>
                        <div className='heroInfo'>
                            <p className='heroTitle'>{res.title}</p>
                            <p className='heroDescription'>{res.overview}</p>
                            <button onClick={()=> navigate(`movies/${res.id}`)} style={{margin:"20px 50px"}} className='heroButton'>Play</button>
                            <button className='heroButton'>My List</button>
                        </div>
                        <div className='overlay'></div>
                        <img src={`${IMAGE_PATH}${res.backdrop_path}`} alt="" />
                </SwiperSlide>
     
        })}
    </Swiper>
        </div>
    )
}
