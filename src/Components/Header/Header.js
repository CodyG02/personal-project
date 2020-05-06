import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logoutUser} from '../../ducks/userReducer'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

const Header = (props) => {
    // console.log(props)
    

const logout = () => {
    axios.delete('/api/auth/logout').then(() => {
        props.logoutUser()
        props.history.push('/')
    })
}

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
            <button onClick={() => logout()} >logout</button>
        </div>
        )
}

const mapStateToProps = state => {
    return state.user
}

export default connect(mapStateToProps, {logoutUser})(withRouter(Header))