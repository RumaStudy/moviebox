let initialState={
  popularMovies:{},
  topRatedMovies:{},
  upComingMovies:{},
}
function movieReducer(state=initialState, action){
  let{type,payload}=action;
  switch(type){
  case "GET_MOVIES":
    return{
      ...state,
      popularMovies:payload.popularMovies
    };
    default:
      return{...state};
  } 
}
export default movieReducer