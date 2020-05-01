import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Header = (props) => {
    console.log(props)
    return( 
        <div>
            <h1>
                {props.user.username}
            </h1>
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

const mapStateToProps = state => {
    return state.user
}

export default connect(mapStateToProps)(Header)