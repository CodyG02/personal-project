import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Profile = (props) => {
    const [userRuns, setUserRuns] = useState([])
    const [userComment, setUserComment] = useState('')
    const [isEditing, setIsEditing] = useState(false)

    useEffect(() => {
        console.log(userRuns)
        axios.get(`/api/user/runs`).then(res => {
            console.log('does this hit',res.data)
            setUserRuns(res.data)
            // console.log(res.data)
            
        })
    }, [userComment])

    const handleDelete = (user_run_join_id) => {
        axios.delete(`/api/user/runs/${user_run_join_id}`).then(res => {
            // console.log('hit',res.data)
            setUserRuns(res.data)
            
            // console.log('delete',res.data)
        })
    }

    const handleEdit = (user_run_join_id) => {
        let body ={
            comment: userComment
        }
        // console.log(userComment)
        axios.put(`/api/user/runs/${user_run_join_id}`, body).then(res => {
            console.log(res.data)
            setUserComment(res.data)
            // console.log(res.data)
        })
    }

    const mappedRuns = userRuns.map((userRun) => {
        // console.log(userRun)
        return (
        <div>
            
            {userRun.username}
            {userRun.name}
            {userRun.difficulty}
            {userRun.comment}
            {isEditing ? 
            <div>
                <input placeholder='new comment' onChange={e => setUserComment(e.target.value)}/>
                <button onClick={() => setIsEditing(false)}>cancel</button>
                <button onClick={() => handleEdit(userRun.user_run_join_id)}>save</button>
            </div>
            :
            <div>
                <button onClick={() => setIsEditing(true)} >edit</button>
                <button onClick={() => handleDelete(userRun.user_run_join_id)}>delete</button>
            </div>
            }
            
        </div>
        )
    })
    // {console.log(userRuns[0].name)}
    return( 
        <div>
            Profile.js
            <br/>
            
           {mappedRuns}
        </div>
        )
}

export default Profile