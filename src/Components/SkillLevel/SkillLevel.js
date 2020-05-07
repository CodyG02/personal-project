import React, {useState} from 'react'
import {connect} from 'react-redux'
import {userDifficulty} from '../../ducks/difficultyReducer'
import './SkillLevel.css'


const SkillLevel = (props) => {
    const [difficulty, setDifficulty] = useState('')
    // console.log(difficulty)
    
    const  userDifficulty = (color) => {
        setDifficulty(color)
        props.userDifficulty(color)
        props.history.push('/lifts')
    }

    


    return( 
        <div className='skill-main'>
            
            
                <button className='green-button' onClick={() => {
                    userDifficulty('green')
                } }  ><img className='green' src='https://i.etsystatic.com/8837396/r/il/c28ea6/720369752/il_1140xN.720369752_pdxb.jpg'/> </button>
           
                <button className='blue-button' onClick={() => {
                    userDifficulty('blue')
                } }  ><img className='blue' src='https://i.etsystatic.com/8837396/r/il/9d5a50/720497439/il_1140xN.720497439_tat6.jpg'/> </button>
           
                <button className='black-button' onClick={() => {
                    userDifficulty('black')
                } }  ><img className='black' src='https://i.etsystatic.com/8837396/r/il/0552ce/720497527/il_1140xN.720497527_al9k.jpg'/> </button>
           
                <button className='dblack-button' onClick={() => {
                    userDifficulty('doubleblack')
                } }  ><img className='dblack' src='https://i.etsystatic.com/8837396/r/il/5320fd/720497619/il_1140xN.720497619_mnpz.jpg'/> </button>
           
            
           
        </div>
        )
}

const mapStateToProps = state => {
    return state.difficulty
}

export default connect(mapStateToProps, {userDifficulty})(SkillLevel)