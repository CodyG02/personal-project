import React, { useEffect} from 'react';
import './App.css';
import AuthHeader from './Components/AuthHeader/AuthHeader';
import Header from './Components/Header/Header'
import routes from './routes'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {loginUser} from './ducks/userReducer'



function App(props) {
  // console.log(props.user.isLoggedIn)
  useEffect(() => {
    axios.get('/api/auth/user').then(res => {
        console.log(res.data)
        props.loginUser(res.data)
        
    })
}, [])
  return (
    <div >
      {props.user.isLoggedIn === true ? <Header/> : <AuthHeader/>}
      {/* <Link to='/'>
                <button>home</button>
            </Link> */}
      {routes}
    </div>
  );
}

const mapStateToProps = state => state
 
export default connect(mapStateToProps, {loginUser})(App)
