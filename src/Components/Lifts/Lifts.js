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
            userLift('Great Western Express')}}  ><img className='great-western' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsrsCXVrEquZhS14l1PS5hpY1qykM8zk_EeinmCVfdlzGV0Da-&usqp=CAU'/>GREAT WESTERN EXPRESS</button>
    
    
        <button className='snake-creek-button' onClick={() => {
            userLift('Snake Creek Express')}}  ><img className='snake-creek' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTu1SGduswpNoMfP_VO_LYgyHXYdLMSwMQftBKzHprqv0FRdCZb&usqp=CAU'/>SNAKE CREEK EXPRESS</button>
    
    
        <button className='crest-express-button' onClick={() => {
            userLift('Crest Express')}}  ><img className='crest-express' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgOuww_O0HycDz8dz6QATv_Qgi5ohBw3fqwVLfkK2COfiVC8oz&usqp=CAU'/>CREST EXPRESS</button>
    
    
        <button className='milly-button' onClick={() => {
            userLift('Milly Express')}}  ><img className='milly' src='https://img.geocaching.com/waymarking/display/277753d9-8933-41d7-9619-b3f59c3c50e2.JPG'/>MILLY EXPRESS</button>
    
    </div>
    )
}

const mapStateToProps = state => {
    return state.lift
}

export default connect(mapStateToProps, {liftName})(Lifts)