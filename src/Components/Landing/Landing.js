import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {loginUser} from '../../ducks/userReducer'
import  './Landing.css'

const Landing = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        const body = {
            email: email,
            password: password
        }
        axios.post('/api/auth/login', body).then( res => {
            props.loginUser(res.data)
            props.history.push('/skilllevel')
        }).catch(err => alert('failed to log in'))
    }
    return( 
        <div className='main'>
            {/* <image className='test' url=''/> */}
            <div className='information'>
                <input className='input' placeholder='email' onChange={e => setEmail(e.target.value)} />
                <br/>
                <input className='input' placeholder='password' onChange={e => setPassword(e.target.value)} />
                <br/>
                <button className='button' onClick={() => handleLogin()} >login</button>
                <br/>
                <Link to='/register'>
                    <button className='button'>register</button>
                </Link>
            </div>
        </div>

        )
}

const mapStateToProps = state => state

export default connect(mapStateToProps, {loginUser})(Landing)