import React from 'react'
import {connect} from 'react-redux'
import {logoutUser} from '../../ducks/userReducer'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import './Header.css'

const Header = (props) => {
    // console.log(props)
    
const handleDifficulty = () => {
    props.history.push('/skilllevel')
}

const handleProfile = () => {
    props.history.push('/profile')
}

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
                <button className='head-buttons' onClick={() => handleProfile()} >profile</button>
                <button className='head-buttons' onClick={() => handleDifficulty()}>difficulty</button>
                <button className='head-buttons' onClick={() => logout()} >logout</button>
            </div>
            </h1>
        </div>
        )
}

const mapStateToProps = state => {
    return state.user
}

export default connect(mapStateToProps, {logoutUser})(withRouter(Header))