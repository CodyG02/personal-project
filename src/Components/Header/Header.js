import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logoutUser} from '../../ducks/userReducer'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import './Header.css'

const Header = (props) => {
    // console.log(props)
    

const logout = () => {
    axios.delete('/api/auth/logout').then(() => {
        props.logoutUser()
        props.history.push('/')
    })
}

    return( 
        <div className='header-main'>
            <h1 className='user-name'>
                {props.user.username}
            <div className='header-buttons'>
                <Link  className='header-buttons' to='/profile'>
                    <button className='profile-button'>profile</button>
                </Link>
                <Link  className='header-buttons' to='/skilllevel'>
                    <button className='difficulty-button'>difficulty</button>
                </Link>
                <button className='logout-button' onClick={() => logout()} >logout</button>
            </div>
            </h1>
        </div>
        )
}

const mapStateToProps = state => {
    return state.user
}

export default connect(mapStateToProps, {logoutUser})(withRouter(Header))