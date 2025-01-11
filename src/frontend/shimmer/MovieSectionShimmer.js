import React from 'react'
import MovieCardShimmer from './MovieCardShimmer'

const MovieSectionShimmer = () => {
  return (
    <div className="relative md:p-2 flex gap-2 md:gap-4 overflow-x-scroll scrollbar-hide scroll-smooth py-2" style={{ height: '210px',scrollbarWidth: 'none'}}>
        {Array(11).fill(0).map((_, index) => <MovieCardShimmer key={index} />)}
    </div>
  )
}

export default MovieSectionShimmer
