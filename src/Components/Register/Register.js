import React, {useState} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {loginUser} from '../../ducks/userReducer'

const Register = (props) => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = () => {
        const body ={
            email: email,
            username: username,
            password: password
        }
        axios.post('/api/auth/register', body).then(res => {
            props.loginUser(res.data)
            props.history.push('/skilllevel')
        }).catch(err => alert('failed to register'))
    }
    return(
        <div>
           
            <input placeholder='username' onChange={e => setUsername(e.target.value)}/>
            <br/>
            <input placeholder='email' onChange={e => setEmail(e.target.value)} />
            <br/>
            <input placeholder='password' onChange={e => setPassword(e.target.value)} />
            <br/>
            <button onClick={() => handleRegister()} >sign up</button>
        </div>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps, {loginUser})(Register)