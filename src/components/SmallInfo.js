import React from 'react'

function SmallInfo({movie}) {
    return (
        <div>
            <p className="movieTitle" style={{marginBottom: '5px'}}>{movie.Title}</p>
            <p>{movie.Genre}</p>
        </div>
    )
}

export default SmallInfo
