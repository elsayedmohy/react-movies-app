import axios from 'axios';
import React from 'react';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import { API_KEY, BASE_URL,IMAGE_PATH } from '../../api';
import {TiArrowBack} from "react-icons/ti"
import "./movieScreen.css"
import CustomSwiper from '../../components/Swiper/CustomSwiper';

export default function MovieScreen() {
  const {id} = useParams()
  const [movieData , setMovieData] = useState([]);
  const [movieVideos , setMovieVideos] = useState([]);
  const [similarMovies , setSimilarMovies] = useState([]);
  const [loading , setLoading] = useState(false)

  useEffect(()=>{
    const fetchMovieData = async()=> {
      setLoading(true)
      const {data} =await axios.get(`${BASE_URL}${id}?api_key=${API_KEY}&language=en-US&append_to_response=credits`)
      setMovieData(data)
      setLoading(false)
    };
    const fetchMovieVideos = async()=> {
      setLoading(true)

      const {data} =await axios.get(`${BASE_URL}${id}/videos?api_key=${API_KEY}&language=en-US`)
      
      setMovieVideos(data)
      setLoading(false)
    };
    const fetchSimilarMovies = async()=> {
      setLoading(true)
      const {data} =await axios.get(`${BASE_URL}${id}/similar?api_key=${API_KEY}&language=en-US&page=1`)
      setSimilarMovies(data.results);
      setLoading(false)
    };
    
    fetchMovieData()
    fetchMovieVideos()
    fetchSimilarMovies()
  },[])
  const genres = movieData.genres
  const cast = (movieData?.credits?.cast)
  const newCast = cast?.slice(0,6)
  const navigate = useNavigate()
  return (
    <motion.div initial={{ opacity:0 , duration:3}}  animate={{opacity:1,  duration:3}} exit={{opacity:0,  duration:3}}>
  <div className='screen'  style={{ 
    backgroundImage: `url(${IMAGE_PATH}${movieData?.backdrop_path})` 
  }}>

    <div className='holder'>
      <p className='backIcon' onClick={()=> navigate(-1)}><TiArrowBack/>Go Back</p>
  <div className='movieContainer'>
  <div className='posterContainer'>
    <img className='poster' src={`${IMAGE_PATH}${movieData?.poster_path}`} alt={movieData?.title}/>
  </div>
  <div className="detailsContainer">
    <p className='name'>{movieData?.title}</p>
    <div className='genres'>
      {genres?.map((genre)=>{
       return <p className='genre' key={genre.id}>{genre.name}</p>
      })}
    </div>
        <div className='description'><p>{movieData?.overview}</p></div>
    <div className='cast'>
      <p className='castText'>Casts:</p>
      <div style={{display:"flex"}}>
      {newCast?.map((cas)=>{
            return (<div key={cas.id}>
              <img  className='castImage' src={`${IMAGE_PATH}${cas.profile_path}`} alt={cas.name} />
              <p className='castName'>{cas.name}</p>
              </div>
            )
      })}
      </div>
    </div>
  </div>
</div>
</div>
</div>
<div className='vidoes'>
  {movieVideos.results?.map((movie)=> {
    return <div key={movie.id} className='videosContainer'>
      <p className='name'>{movie.name}</p>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${movie.key}`} width='1200px' height='720px' />
    </div>
  })}
</div>
<div className='similarMovies'>
  <CustomSwiper load={loading} movies={similarMovies} title="Similar" />
</div>
  </motion.div>)
}
