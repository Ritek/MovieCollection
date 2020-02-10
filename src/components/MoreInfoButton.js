import React from 'react'

function MoreInfoButton({ showTip, toggleTip }) {
    return (
        <p className="moreButton" 
            onClick={ () => toggleTip( showTip === 1 ? 2 : 1) }>
            {showTip === 1 ? <>Show more &#8613;</> : <>Show less &#8615;</>}
        </p>
    )
}

export default MoreInfoButton
