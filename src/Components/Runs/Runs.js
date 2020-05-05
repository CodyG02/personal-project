import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {liftName} from '../../ducks/liftsReducer'
import {userDifficulty} from '../../ducks/difficultyReducer'
import {connect} from 'react-redux'

const Runs = (props) => {
    const [filteredRuns, setFilteredRuns] = useState([])
    const [userComment, setUserComment] = useState('')
    const [isSaving, setIsSaving] = useState(false)

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

const handleSave = (id) =>{
    let body ={
        comment: userComment
    }
    axios.post(`/api/user/runs/${id}`, body).then(res => {
        console.log('succeeded')
        setIsSaving(false)
    }).catch(() => alert('Something went wrong'))
}
    
    const mappedRuns = filteredRuns.map((selectedRuns) => {
        return (
            <div>
                {selectedRuns.name}
                {selectedRuns.difficulty}
                {isSaving ? 
                <div>
                    <input placeholder='add comment' onChange={e => setUserComment(e.target.value)}/>
                    <button onClick={() => setIsSaving(false)} >cancel</button>
                    <button onClick={() => handleSave(selectedRuns.id)} >save</button>
                </div> 
                :
                <div>
                    <button onClick={() => setIsSaving(true)}>save</button>
                </div>
                }
                
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