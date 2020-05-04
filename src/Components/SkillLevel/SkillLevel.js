import React, {useState} from 'react'
import {connect} from 'react-redux'
import {userDifficulty} from '../../ducks/difficultyReducer'


const SkillLevel = (props) => {
    const [difficulty, setDifficulty] = useState('')
    // console.log(difficulty)
    
    const  userDifficulty = (color) => {
        setDifficulty(color)
        props.userDifficulty(color)
        props.history.push('/lifts')
    }

    


    return( 
        <div>
            SkillLevel.js
            
                <button onClick={() => {
                    userDifficulty('green')
                } }  >green</button>
           
                <button onClick={() => {
                    userDifficulty('blue')
                } }  >blue</button>
           
                <button onClick={() => {
                    userDifficulty('black')
                } }  >black</button>
           
                <button onClick={() => {
                    userDifficulty('doubleblack')
                } }  >doubleblack</button>
           
            
           
        </div>
        )
}

const mapStateToProps = state => {
    return state.difficulty
}

export default connect(mapStateToProps, {userDifficulty})(SkillLevel)