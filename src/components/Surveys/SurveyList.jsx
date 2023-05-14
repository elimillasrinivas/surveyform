import React from 'react'
import Topbar from '../Topbar/Topbar'
import search from '../../assets/search.png'
import './surveylist.css'
import edit from '../../assets/pen.png'
import deleteIcon from '../../assets/bin.png'
import { useNavigate } from 'react-router-dom'

const SurveyList = () => {
    const navigate=useNavigate()
    const createHandler=()=>{
        navigate("/create")
    }
  return (
    <div className='surveylist-container'>
        <Topbar/>
        <div className="surveys-top">
            <h3>Survey List</h3>
            <input type="text" />
           <img src={search} alt="search" className='searchbar'/>
           <button onClick={createHandler}>Create</button>
        </div>
        <div className="survey-table">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Actions</th>
                </tr>
                <tbody>
                    <tr>
                        <td>Movie</td>
                        <td>Movieeeeeeeeee</td>
                        <td>Movie</td>
                        <td>23-04-2023</td>
                        <td>23-04-2023</td>
                        <td>
                            <img src={edit} alt="edit" className='action'/>
                            <img src={deleteIcon} alt="delete" className='action'/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default SurveyList