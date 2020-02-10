import React, {useState, useEffect, useRef} from 'react'
import {useSpring, animated, config} from 'react-spring'

import SmallInfo from './SmallInfo';
import BigInfo from './BigInfo';
import MoreInfoButton from './MoreInfoButton';

function MovieTile({movie}) {
    const [hover, setHover] = useState(false);
    const [props, set, stop] = useSpring( () => ({height : '0%', opacity: 0, backgroundColor: 'rgba(3, 119, 252, 1)', config: config.gentle}) );
    
    const [showTip, setShowTip] = useState(0);
    useEffect(() => {
        if (showTip === 0) set({height: '0%', opacity: 0});
        else if (showTip === 1) set({height: '33%', opacity: 1, backgroundColor: 'rgba(3, 119, 252, 1)'});
        else if (showTip === 2) set({height: '90%', backgroundColor: 'rgba(3, 119, 252, 0.7)'});
    }, [showTip]);

    const toggleTip = (state) => {
        if (showTip === 0) setShowTip(1);
        if (showTip === 1) setShowTip(0);

        if (showTip === 2) setShowTip(1);
        if (state === 2) setShowTip(2);
    }

    const hoverState = useSpring({
        transform: hover
            ? 'scale(1.03)'
            : 'scale(1)',
        cursor: 'pointer'
    });

    return (
        <div className="movieCard col-ms-auto">
            <animated.div className="movieTile" 
                onMouseEnter={() => {setHover(true)}}
                onMouseLeave={() => {setHover(false)}}
                onClick={ () => toggleTip() }
                style={{...hoverState, backgroundImage: `url(${movie.Poster})`}}  
                >
                <animated.div className="movieTip" style={props} onClick={(e) => e.stopPropagation()}>
                    <div>
                        <SmallInfo movie={movie}/>

                        {showTip === 2 &&
                            <BigInfo movie={movie}/>
                        }

                        <MoreInfoButton showTip={showTip} toggleTip={toggleTip}/>
                    </div>
                </animated.div>
            </animated.div>
        </div>
    )
}

export default MovieTile
