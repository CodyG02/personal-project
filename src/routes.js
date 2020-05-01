import React from 'react'
import {Route, Switch } from 'react-router-dom'
import Landing from './Components/Landing/Landing'
import Profile from './Components/Profile/Profile'
import SkillLevel from './Components/SkillLevel/SkillLevel'
import Lifts from './Components/Lifts/Lifts'
import Runs from './Components/Runs/Runs'
import Register from './Components/Register/Register'

export default 
<Switch>
    <Route exact path='/' component={Landing}/>
    <Route path='/skilllevel' component={SkillLevel}/>
    <Route path='/profile' component={Profile}/>
    <Route path='/lifts' component={Lifts} />
    <Route path='/runs' component={Runs}/>
    <Route path='/register' component={Register}/>
</Switch>