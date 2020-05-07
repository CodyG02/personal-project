// import React, {useState, useEffect} from 'react'
// import {Bar} from 'react-chartjs-2'
// import axios from 'axios'

// const Chart = (props) => {
//     const [runDifficulty, setRunDifficulty] = useState([])

//     useEffect(() => {
//         axios.get('/api/user/runs').then(res => {
//             setRunDifficulty(res.data)
//             console.log(res.data.difficulty)
//         })
//     }, [])

//     const mappedDifficulty = runDifficulty.forEach((runD) => {
//         return(
//             <div>
//                 <Bar
//                 data={}
//                 width={500}
//                 height={250}
//                 options={{ maintainAspectRatio: false }}/>

//             </div>
//         )
//     })
//     return (
//         <div>
            
//             {mappedDifficulty}
//         </div>
//     )
// }

// export default Chart