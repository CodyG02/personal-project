import React from 'react';
import './App.css';
import AuthHeader from './Components/AuthHeader/AuthHeader';
import Header from './Components/Header/Header'
import routes from './routes'
import {connect} from 'react-redux'



function App(props) {
  console.log(props.user.isLoggedIn)
  return (
    <div>
      {props.user.isLoggedIn === true ? <Header/> : <AuthHeader/>}
      <Header/>
      <AuthHeader/>
      {routes}
    </div>
  );
}

const mapStateToProps = state => state
 
export default connect(mapStateToProps)(App)
