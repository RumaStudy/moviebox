import React,{useEffect, useState} from 'react'
import { movieAction } from '../redux/actions/movieAction';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../components/Banner';
import MovieSlide from '../components/MovieSlide'; 
const Home = () => {
  const dispatch = useDispatch();
  const {popularMovies, topRatedMovies, upComingMovies} = useSelector(state=>state.movie);
  console.log('인기영화',popularMovies);
  useEffect(() => {
    dispatch(movieAction.getMovies());
  },[]);
  return (
    <div>
      {/* 배너영역 */}
      {popularMovies.results && <Banner movie={popularMovies.results[0]}/>}
    </div>
  )
}

export default Home