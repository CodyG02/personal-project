import React, {useState, useEffect} from 'react'
import axios from 'axios'

const YourRuns = (props) => {

    return(
        <div>
            {props.userRun.username}
            {props.userRun.name}
            {props.userRun.difficulty}
            {props.userRun.comment}
            {props.isEditing ? 
            <div>
                <input placeholder='new comment' onChange={e => props.setUserComment(e.target.value)}/>
                <button onClick={() => props.setIsEditing(false)}>cancel</button>
                <button onClick={() => props.edit(props.userRun.user_run_join_id)}>save</button>
            </div>
            :
            <div>
                <button onClick={() => props.setIsEditing(true)} >edit</button>
                <button onClick={() => props.delete(props.userRun.user_run_join_id)}>delete</button>
            </div>
            }
            
        </div>
    )
}

export default YourRuns