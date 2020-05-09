// import React, {useState, useEffect} from 'react'
// import {Bar} from 'react-chartjs-2'
// import Profile from '../Profile/Profile'


// const Chart = (props) => {
//     const [chartData, setChartData] = useState({})

//     const chart = () => {
//         let greenDiff = 0
//         let blueDiff = 0
//         let blackDiff = 0
//         let dblackDiff = 0
//         axios.get(`/api/user/runs`).then(res => {
//             for(const chartObj of res.data){
//                 if(chartObj.difficulty == 'green'){
//                     greenDiff += 1
//                 }
//                 if(chartObj.difficulty == 'blue'){
//                     blueDiff += 1
//                 }
//                 if(chartObj.difficulty == 'black'){
//                     blackDiff += 1
//                 }
//                 if(chartObj.difficulty == 'doubleblack'){
//                     dblackDiff += 1
//                 }
//             }
//             setChartData({
//                 labels: [`Green ${greenDiff}`, `Blue ${blueDiff}`, `Black ${blackDiff}`, `Double Black ${dblackDiff}`],
//                 datasets: [{
//                     label: 'level of difficulty',
//                     data: [greenDiff, blueDiff, blackDiff, dblackDiff],
//                     backgroundColor: [
//                         'rgba(2, 94, 47, .65)',
//                         'rgba(1, 70, 139, .65)',
//                         'rgba(0, 0, 0, .65)',
//                         'rgba(0, 0, 0, .65)'
//                     ],
//                     borderWidth: 2
//                 }]
//             })
//         })
      
//     }
//     return (
//         <div> 
//             <Bar data={chartData}
//             options={{
//                 responsive: true,
//                 scales: {
//                     yAxes: [{
//                         ticks: {beginAtZero: true}
//                     }]
//                 }
//             }}/>
        
            
//         </div>
//     )
// }

// export default Chart