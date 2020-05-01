import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {difficulty} from '../../ducks/difficultyReducer'
import axios from 'axios'

const SkillLevel = (props) => {
    const [difficulty, setDifficulty] = useState('')

    const userDifficulty = () => {
        const query = {
            difficulty: difficulty
        }
        axios.get(`/api/runs?difficulty=${query}`).then(res => {
            props.difficulty(res.data)
            props.history.push('/lifts')
        })
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

const mapStateToProps = state => state

export default connect(mapStateToProps, {difficulty})(SkillLevel)