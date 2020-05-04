import React, {useState} from 'react'
import {connect} from 'react-redux'
import {liftName} from '../../ducks/liftsReducer'

const Lifts = (props) => {
    const [lift, setLift] = useState('') 

    const userLift = (lift) => {
        setLift(lift)
        props.liftName(lift)
        props.history.push('/runs')
    }

    return( 
    <div>
        Lifts.js

    
        <button onClick={() => {
            userLift('lift1')}}  >lift1</button>
    
    
        <button onClick={() => {
            userLift('lift2')}}  >lift2</button>
    
    
        <button onClick={() => {
            userLift('lift3')}}  >lift3</button>
    
    
        <button onClick={() => {
            userLift('lift4')}}  >lift4</button>
    
    </div>
    )
}

const mapStateToProps = state => {
    return state.lift
}

export default connect(mapStateToProps, {liftName})(Lifts)