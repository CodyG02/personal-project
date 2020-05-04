import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {difficulty} from '../../ducks/difficultyReducer'
import axios from 'axios'

const SkillLevel = (props) => {
    const [difficulty, setDifficulty] = useState('')
    console.log(difficulty)
    
    const  userDifficulty = () => {
        props.difficulty(difficulty)
        // props.history.push('/lifts')
    }


    return( 
        <div>
            SkillLevel.js
            
                <button onClick={() => {
                    setDifficulty('green')
                    userDifficulty()
                } }  >green</button>
           
                <button onClick={() => {
                    setDifficulty('blue')
                    userDifficulty()
                } }  >blue</button>
           
                <button onClick={() => {
                    setDifficulty('black')
                    userDifficulty()
                } }  >black</button>
           
                <button onClick={() => {
                    setDifficulty('doubleblack')
                    userDifficulty()
                } }  >doubleblack</button>
           
            
           
        </div>
        )
}

const mapStateToProps = state => {
    return state.difficulty
}

export default connect(mapStateToProps, {difficulty})(SkillLevel)