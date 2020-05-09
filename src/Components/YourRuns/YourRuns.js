import React, {useState} from 'react'
import './YourRuns.css'

const YourRuns = (props) => {
    const [isEditing, setIsEditing] = useState(false)

    const dualFire = () => {
        props.edit(props.userRun.user_run_join_id)
        setIsEditing(false)
    }

    return(
    <div className='flex-element'>

        <div className='saved-display'>
           { `${props.userRun.username} ${props.userRun.name} ${props.userRun.difficulty}`}
           <br/>
            <div className='user-comment'>
                {props.userRun.comment}
            </div>
            {isEditing ?
            <div className='profile-toggle-buttons'>
                <textarea
                    className='input-profile'  
                    maxLength='250'
                    cols="40"
                    rows="5" 
                    placeholder='new comment' onChange={e => props.setUserComment(e.target.value)}>
                </textarea>
                <div className='editing-buttons'>
                    <button className='cancel-profile' onClick={() => setIsEditing(false)}>Cancel</button>
                    <button className='save-profile' onClick={() => dualFire()}>Save</button>
                </div>
            </div>
    :
            <div className='profile-initial-buttons'>
                <button className='edit-button' onClick={() => setIsEditing(true)} >Edit</button>
                <button className='delete-button' onClick={() => props.delete(props.userRun.user_run_join_id)}>Delete</button>
            </div>
            }
    
        </div>
    </div>
    )
}

export default YourRuns