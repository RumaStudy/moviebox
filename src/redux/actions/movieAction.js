import api from '../api';

const API_KEY=process.env.REACT_APP_API_KEY;
function getMovies(){
  return async (dispatch)=>{
    const popularMovieApi = api.get(
      `movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    const topRatedApi = api.get(
      `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
    const upComingApi = api.get(
      `movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
    let [popularMovies, topRatedMovies, upComingMovies] = await Promise.all([
    popularMovieApi,
    topRatedApi,
    upComingApi
  ]);
  dispatch({
    type:"GET_MOVIES",
    payload:{
      popularMovies:popularMovies.data, 
      topRatedMovies:topRatedMovies.data,
      upComingMovies:upComingMovies.data
    }
  });
  // console.log('인기영화', popularMovies);
  // console.log('등급별', topRatedApi);
  // console.log('돌아오는영화', upComingApi);
   };
}
export const movieAction ={getMovies};