import React from 'react'
import MovieTile from './MovieTile'

function Collection({movieList}) {
    return (
        <div className="row">
            {
                movieList.map( (movie, i) => {
                    return <MovieTile key={i} movie={movie}/>
                })
            }
        </div>
    )
}

export default Collection
