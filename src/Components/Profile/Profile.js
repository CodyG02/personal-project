import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Bar} from 'react-chartjs-2'
import YourRuns from '../YourRuns/YourRuns'
import './Profile.css'


const Profile = (props) => {
    const [userRuns, setUserRuns] = useState([])
    const [userComment, setUserComment] = useState('')
    const [chartData, setChartData] = useState({})
    const [isEditing, setIsEditing] = useState(false)

    const chart = () => {
        let greenDiff = 0
        let blueDiff = 0
        let blackDiff = 0
        let dblackDiff = 0
        axios.get(`/api/user/runs`).then(res => {
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
            }
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
        axios.get(`/api/user/runs`).then(res => {
            setUserRuns(res.data)
            chart()
        })
    }, [userComment])

    const handleDelete = (user_run_join_id) => {
        axios.delete(`/api/user/runs/${user_run_join_id}`).then(res => {
            setUserRuns(res.data)
            chart()
        }).catch(err => console.log(err))
    }

    const handleEdit = (user_run_join_id) => {
        let body ={
            comment: userComment
        }
        axios.put(`/api/user/runs/${user_run_join_id}`, body).then(res => {
            setUserComment(res.data)
            setIsEditing(false)
        }).catch(err => console.log(err))
    }

    const mappedRuns = userRuns.map((userRun) => {
        return (
            <YourRuns
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            setUserComment={setUserComment}
            key={userRun.id}
            userRun={userRun}
            edit={handleEdit}
            delete={handleDelete}
            />
        )
    })

    return( 
        <div className='profile-main'>
            <div className='graph-parent'>
                <div className='bar-graph' >
                    <Bar data={chartData}
                    options={{
                    responsive: true,
                    scales: {
                    yAxes: [{
                    ticks: {beginAtZero: true},
                    
                     }]
                    }
                   }}/>
                </div>
            </div>
            <br/>
           {mappedRuns}
        </div>
        )
}

export default Profile