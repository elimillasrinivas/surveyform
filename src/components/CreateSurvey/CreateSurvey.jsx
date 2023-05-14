import React from 'react'
import './createsurvey.css'
import Topbar from '../Topbar/Topbar'

const CreateSurvey = () => {
  return (
    <div className='create-survey-container'>
        <Topbar/>
        <div className="create-actions">
        <h3>Create Survey</h3>
        <button>Cancel</button>
        <button>Next</button>

        </div>
        <form >
            <label htmlFor="name">Name</label>
            <input type="text" placeholder='survey name' id='name'/>
            <label htmlFor="name">Description</label>
            <input type="text" placeholder='survey name' id='description'/>
        </form>

    </div>
  )
}

export default CreateSurvey