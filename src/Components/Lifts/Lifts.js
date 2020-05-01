import React from 'react'
import {Link} from 'react-router-dom'

const Lifts = () => {
    return( 
    <div>
        Lifts.js

    <Link to='/runs' >
        <button>lift1</button>
    </Link>
    <Link to='/runs' >
        <button>lift2</button>
    </Link>
    <Link to='/runs' >
        <button>lift3</button>
    </Link>
    <Link to='/runs' >
        <button>lift4</button>
    </Link>
    </div>
    )
}

export default Lifts