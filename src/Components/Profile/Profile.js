import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Profile = () => {
    const [userRuns, setUserRuns] = useState([])
    

    useEffect(() => {
        axios.get(`/api/user/runs`).then(res => {
            console.log('does this hit',res.data)
            setUserRuns(res.data)
            
        })
    }, [])

    const handleDelete = (id) => {
        axios.delete(`/api/user/runs/${id}`).then(res => {
            console.log('delete',res.data)
            setUserRuns(res.data)
            
            console.log('delete',res.data)
        })
    }

    const mappedRuns = userRuns.map((userRun) => {
        return (
        <div>
            
            {userRun.username}
            {userRun.name}
            {userRun.difficulty}
            {userRun.comment}
            <button>edit</button>
            <button onClick={() => handleDelete(userRun.id)}>delete</button>
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