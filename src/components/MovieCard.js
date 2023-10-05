import React from 'react'

const MovieCard = ({item}) => {
  return (
    <div className='movieCard'
      style={{
        backgroundImage:
        "url("
        +`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`
        +")",
    }}
    >
    </div>
  )
}

export default MovieCard