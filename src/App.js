import React from 'react';
import './App.css';
import AuthHeader from './Components/AuthHeader/AuthHeader';
import Header from './Components/Header/Header'
import routes from './routes'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'



function App(props) {
  console.log(props.user.isLoggedIn)
  return (
    <div>
      {props.user.isLoggedIn === true ? <Header/> : <AuthHeader/>}
      <Link to='/'>
                <button>home</button>
            </Link>
      {routes}
    </div>
  );
}

const mapStateToProps = state => state
 
export default connect(mapStateToProps)(App)
