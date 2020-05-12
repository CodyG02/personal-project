import React, {useState} from 'react'
import axios from 'axios'


const Run = (props) => {
    const [userComment, setUserComment] = useState('')
    const [isSaving, setIsSaving] = useState(false)

    const handleSave = (id) =>{
        let body ={
            comment: userComment
        }
        axios.post(`/api/user/runs/${id}`, body).then(res => {
            // console.log('succeeded')
            setIsSaving(false)
        }).catch(() => alert('Something went wrong'))
    }
    return(
        <div className='lets-flex'>
                <div className='runs'>
            
                     <div className='run-text'>
                        {props.selectedRuns.name}
                            <br/>
                        {props.selectedRuns.difficulty}
                    </div>
            
                    { isSaving ? 
                    <div className='parent'>
                        <textarea
                            className='runs-comment'
                            cols="40"
                            rows="5"
                            placeholder={`${props.selectedRuns.name}`}
                            onChange={e => setUserComment(e.target.value)}>

                        </textarea>
                        <br/>
                        <button className='toggled-button' onClick={() => setIsSaving(false)} >Cancel</button>
                        <button className='toggled-button-2' onClick={() => handleSave(props.selectedRuns.id)} >Save</button>
                    </div>  
            :
                    <div>
                        <button className='initial-save' onClick={() => setIsSaving(true)}>Save</button>
                    </div>
                    }
            
                </div>
        </div>
    )
}

export default Run