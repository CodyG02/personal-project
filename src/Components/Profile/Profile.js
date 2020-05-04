import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Profile = (props) => {
    const [userRuns, setUserRuns] = useState([])
    // const [userComment, setUserComment] = useState('')

    useEffect((user_id) => {
        // console.log(userRuns)
        axios.get(`/api/user/runs/${user_id}`).then(res => {
            // console.log('does this hit',res.data)
            setUserRuns(res.data)
            // console.log(res.data)
            
        })
    }, [])

    const handleDelete = (user_run_join_id) => {
        axios.delete(`/api/user/runs/${user_run_join_id}`).then(res => {
            // console.log('hit',res.data)
            setUserRuns(res.data)
            
            // console.log('delete',res.data)
        })
    }

    // const handleEdit = (user_run_join_id, ) => {
    //     let body ={
    //         comment:''
    //     }
    //     axios.post(`/api/user/runs/${user_run_join_id}`, body).then(res => {
    //         setUserComment(res.data)
    //     })
    // }

    const mappedRuns = userRuns.map((userRun) => {
        console.log(userRun)
        return (
        <div>
            
            {userRun.username}
            {userRun.name}
            {userRun.difficulty}
            {userRun.comment}
            <button>edit</button>
            <button onClick={() => handleDelete(userRun.user_run_join_id)}>delete</button>
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