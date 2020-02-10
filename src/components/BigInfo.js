import React from 'react'

function BigInfo({movie}) {
    return (
        <div>
            <p>Director: {movie.Director} | Released{movie.Released}</p>
            <p>Actors: {movie.Actors}</p>
            <p>Plot: {movie.Plot}</p> 
        </div>
    )
}

export default BigInfo
