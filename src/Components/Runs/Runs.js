import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {liftName} from '../../ducks/liftsReducer'
import {userDifficulty} from '../../ducks/difficultyReducer'
import {connect} from 'react-redux'
import './Runs.css'

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
                
                <div className='run-text'>
                        {selectedRuns.name}
                        <br/>
                        {selectedRuns.difficulty}
                 </div>
    
                {isSaving ? 
                <div className='parent'>
                     <textarea 
                     className='runs-comment'
                     cols="40" 
                     rows="10" 
                     placeholder={`${selectedRuns.name}`}
                     onChange={e => setUserComment(e.target.value)}></textarea>
                     <br/>
                    <button className='toggled-button' onClick={() => setIsSaving(false)} >Cancel</button>
                    <button className='toggled-button-2' onClick={() => handleSave(selectedRuns.id)} >Save</button>
                </div> 
                :
                <div>
                    <button className='initial-save' onClick={() => setIsSaving(true)}>Save</button>
                </div>
                }
                
            </div>
        )
    })
    return( 
        <div className='runs-main' >
            <div className='runs' >
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