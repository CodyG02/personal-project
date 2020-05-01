import React from 'react'
import {Link} from 'react-router-dom'

const SkillLevel = () => {
    return( 
        <div>
            SkillLevel.js
            <Link to='/lifts' >
                <button>green</button>
            </Link>
            <Link to='/lifts'>
                <button>blue</button>
            </Link>
            <Link to='/lifts'>
                <button>black</button>
            </Link>
            <Link to='/lifts'>
                <button>double black</button>
            </Link>
        </div>
        )
}

export default SkillLevel