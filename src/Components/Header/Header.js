import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return( 
        <div>
            Header.js
            <Link to='/profile'>
                <button>profile</button>
            </Link>
            <Link to='/skilllevel'>
                <button>difficulty</button>
            </Link>
            <Link to='/'>
                <button>home</button>
            </Link>
        </div>
        )
}

export default Header