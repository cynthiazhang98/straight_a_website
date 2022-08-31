import React from 'react'
import { useState } from 'react'
import './FormResponseCard.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteForm, updateForm } from '../features/forms/formSlice'
import { useNavigate } from 'react-router-dom'
const FormResponseCard = (form) => {
   // {timestamp, studentName, parentName, phone, email, school, grade, comments, resolved}
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {user} = useSelector((state) => state.auth);

    const defaultColor = form.resolved === true ? '#cfcfcf' : 'white'

    const [containerColour, setContainerColour] = useState(defaultColor) 

    const checkboxChange = () => {
        if(!user){
            navigate('/login')
        }
        console.log(form.id)
        dispatch(updateForm(form.id))
        if(containerColour === 'white'){
            setContainerColour('gray')
        }
        else{
            setContainerColour('white')
        }
        console.log('changed')
    }

    

  return (
    <div className='form-card-container' style={{backgroundColor:containerColour}}>
        <div className='form-content'>
        <ul className='form-horizontal-ul'>
            <li className='hl-li'>
                <div className='left-side'>
                <div>
                    
                    <ul className='form-horizontal-ul' style={{alignContent:'flex-start'}}>
                        <li>
                       <p> <b>timestamp:</b> {form.timestamp}</p>
                        <p> <b>Student:</b> {form.studentName} <b>Parent:</b> {form.parentName}</p>
                        <p> <b>Email:</b> {form.email} <b>Phone:</b> {form.phone} </p>
                        <p> <b>School: </b> {form.school} <b>Grade: </b> {form.grade}</p>
                        </li>
                            
                        </ul>
                
                

                </div>
                </div>
            </li>
            
            <li className='hl-li'>
                <div className='right-side'>
                <ul className='form-vertical-ul'>
                    <li>
                        <b>Comments:</b>
                    </li>
                    <li>
                        <p> {form.more} </p>
                    </li>
                </ul>
                </div>
            </li>
            <li>
                <ul>
                    <li>
                        <label htmlFor="resolved" style={{fontSize:'60%'}}> Mark Resolved </label>
                                        <input type='checkbox' defaultChecked={form.resolved} id='resolved' onChange={checkboxChange}/>
                                    </li>
                                    <li>
                                        <div className='delete-form'  onClick={() => {
                                            if(!user){
                                                navigate('/login')
                                            }
                                            console.log('click delete')
                                            dispatch(deleteForm(form.id))
                                        }}>
                                            Delete
                                        </div>
                                    </li>
                                </ul>
                            </li>
        </ul>
        </div>
        
    </div>
  )
}

export default FormResponseCard