import React, {useState, useEffect} from 'react'
import axios from 'axios'
// import Chart from '../Chart/Chart'
import {Bar} from 'react-chartjs-2'

const Profile = (props) => {
    const [userRuns, setUserRuns] = useState([])
    const [userComment, setUserComment] = useState('')
    const [isEditing, setIsEditing] = useState(false)
    const [chartData, setChartData] = useState({})
    // const [userDiff, setUserDiff] = useState([])

    const chart = () => {
        let greenDiff = 0
        let blueDiff = 0
        let blackDiff = 0
        let dblackDiff = 0
        axios.get(`/api/user/runs`).then(res => {
            // setUserDiff(res.data)
            console.log('chart call',res.data)
            for(const chartObj of res.data){
                if(chartObj.difficulty == 'green'){
                    greenDiff += 1
                }
                if(chartObj.difficulty == 'blue'){
                    blueDiff += 1
                }
                if(chartObj.difficulty == 'black'){
                    blackDiff += 1
                }
                if(chartObj.difficulty == 'doubleblack'){
                    dblackDiff += 1
                }
                // runDiff.push(chartObj.difficulty)
            }
            // console.log(runDiff)
            setChartData({
                labels: [`Green ${greenDiff}`, `Blue ${blueDiff}`, `Black ${blackDiff}`, `Double Black ${dblackDiff}`],
                datasets: [{
                    label: 'level of difficulty',
                    data: [greenDiff, blueDiff, blackDiff, dblackDiff],
                    backgroundColor: [
                        'rgba(2, 94, 47, .65)',
                        'rgba(1, 70, 139, .65)',
                        'rgba(0, 0, 0, .65)',
                        'rgba(0, 0, 0, .65)'
                    ],
                    borderWidth: 2
                }]
            })
        })
      
    }

    useEffect(() => {
        // console.log(userRuns)
        axios.get(`/api/user/runs`).then(res => {
            // console.log('does this hit',res.data)
            setUserRuns(res.data)
            chart()
            // console.log(res.data)
            
        })
    }, [userComment])

    const handleDelete = (user_run_join_id) => {
        axios.delete(`/api/user/runs/${user_run_join_id}`).then(res => {
            // console.log('hit',res.data)
            setUserRuns(res.data)
            
            // console.log('delete',res.data)
        }).catch(err => console.log(err))
    }

    const handleEdit = (user_run_join_id) => {
        let body ={
            comment: userComment
        }
        // console.log(userComment)
        axios.put(`/api/user/runs/${user_run_join_id}`, body).then(res => {
            // console.log(res.data)
            setUserComment(res.data)
            // console.log(res.data)
        }).catch(err => console.log(err))
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
            {/* <Chart/> */}
            <Bar data={chartData}
            options={{
                responsive: true,
                scales: {
                    yAxes: [{
                        ticks: {beginAtZero: true}
                    }]
                }
            }}
            />
            Profile.js
            <br/>
            
           {mappedRuns}
        </div>
        )
}

export default Profile