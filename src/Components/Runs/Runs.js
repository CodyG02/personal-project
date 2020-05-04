import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {liftName} from '../../ducks/liftsReducer'
import {userDifficulty} from '../../ducks/difficultyReducer'
import {connect} from 'react-redux'

const Runs = (props) => {
    const [filteredRuns, setFilteredRuns] = useState([])
    

useEffect(() => {
    // console.log(props)
    let userDifficulty = props.difficulty
    // console.log('difficulty', userDifficulty)
    let liftName = props.lift
    // console.log('lift', liftName)
    axios.get(`/api/runs?difficulty=${userDifficulty}&name=${liftName}`).then(res => {
        setFilteredRuns(res.data)
        console.log(res.data)
    })
}, [])
    
    const mappedRuns = filteredRuns.map((selectedRuns) => {
        return (
            <div>
                {selectedRuns.name}
                {selectedRuns.difficulty}
                <button>save</button>
                
            </div>
        )
    })
    return( 
        <div>
            Runs.js
            {mappedRuns}
        </div>
        )
}

const mapStateToProps = state =>{
    console.log('state',state.difficulty)
    console.log('state',state.lift)
    return {
        difficulty: state.difficulty.difficulty,
        lift: state.lift.lift
    }
}

export default connect(mapStateToProps, {userDifficulty, liftName})(Runs) 