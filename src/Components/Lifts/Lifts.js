import React, {useState} from 'react'
import {connect} from 'react-redux'
import {liftName} from '../../ducks/liftsReducer'
import './Lifts.css'

const Lifts = (props) => {
    const [lift, setLift] = useState('') 

    const userLift = (lift) => {
        setLift(lift)
        props.liftName(lift)
        props.history.push('/runs')
    }

    return( 
    <div  className='lifts-main'>
        

    
        <button className='great-western-button' onClick={() => {
            userLift('lift1')}}  ><img className='great-western' src='https://lh3.googleusercontent.com/proxy/HA3tkqZ4UmYaRd7wyJtmimTN9XlEdUJDExFx3wIByTLZRkoNN474j_eKUjZ5mbsHVkmIzrJ0z9eJJwYJl6AaSnhD7B9laYRq'/>GREAT WESTERN EXPRESS</button>
    
    
        <button className='snake-creek-button' onClick={() => {
            userLift('lift2')}}  ><img className='snake-creek' src='https://lh3.googleusercontent.com/proxy/g10Lt4ouDyCchPaCXpKLVPQvb3o7xt8U-m94bYNyNH7aunlKmEU7uGdPtwTQKGgx-v3eEwSyjyQT1E5DsOq66HOi-d-PoVZhTLjhDDDWmwvBzBoN7YHGG3Uahc4kjuaImEiUe8x20h73UJ8-HefeXBA'/>SNAKE CREEK EXPRESS</button>
    
    
        <button className='crest-express-button' onClick={() => {
            userLift('lift3')}}  ><img className='crest-express' src='https://lh3.googleusercontent.com/proxy/s30QP39XyY9_KKSELm2rOKbFblUNUnNR9wjmTXtJSxv0DKIZzAoFiQ92QyG4CdITYnjAPxpuU-axiHLc2ghe3xGw8EWnUT_ZS4vBZEVrp8xDoJ9h8aJ0zAyjo1pUcWnE2Eo0rciXpAgQ0w'/>CREST EXPRESS</button>
    
    
        <button className='milly-button' onClick={() => {
            userLift('lift4')}}  ><img className='milly' src='https://img.geocaching.com/waymarking/display/277753d9-8933-41d7-9619-b3f59c3c50e2.JPG'/>MILLY EXPRESS</button>
    
    </div>
    )
}

const mapStateToProps = state => {
    return state.lift
}

export default connect(mapStateToProps, {liftName})(Lifts)