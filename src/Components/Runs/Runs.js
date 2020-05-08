import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {liftName} from '../../ducks/liftsReducer'
import {userDifficulty} from '../../ducks/difficultyReducer'
import {connect} from 'react-redux'
import './Runs.css'
import Run from '../Run.js/Run'

const Runs = (props) => {
    const [filteredRuns, setFilteredRuns] = useState([])

useEffect(() => {
    let userDifficulty = props.difficulty
    let liftName = props.lift
    axios.get(`/api/runs?difficulty=${userDifficulty}&name=${liftName}`).then(res => {
        setFilteredRuns(res.data)
        // console.log(res.data)
    })
}, [])

    const mappedRuns = filteredRuns.map((selectedRuns) => {
        return (
            <Run
            key={selectedRuns.id}
            selectedRuns={selectedRuns}
            />
        )
    })
    
    return( 
        <div className='runs-main' >
            <div  >
                {mappedRuns}
            </div>
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