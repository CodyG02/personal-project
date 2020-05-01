import React from 'react';
import './App.css';
import AuthHeader from './Components/AuthHeader/AuthHeader';
import Header from './Components/Header/Header'
import routes from './routes'

function App() {
  return (
    <div>
      App.js
      <Header/>
      <AuthHeader/>
      {routes}
    </div>
  );
}

export default App;
