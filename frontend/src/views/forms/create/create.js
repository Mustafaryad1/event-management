import React, { useEffect, useState } from 'react';
import {FormEdit} from 'react-formio';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { CButton, CCard, CCardBody, CCardFooter, CCardHeader, CCol, CCollapse, CRow, CSwitch, CTextarea, CToggler } from '@coreui/react';
import { DocsLink } from 'src/reusable';


export default function CreateForm(props) {
    const [event, setEvent] = useState({name:"",description:"",dateOfEvent:"2021-08-31"});
    
    const handleCreate = ()=>{
        axios.post(`/event`,event).then(res=>{
            props.history.push('/form/list')
        }).catch(err=>{
            console.log(err)
        })
    }

  return (
        <div>
            <h1>Create Event</h1>
            <div>
            <h1>Edit Form</h1>
            name  <input
                        onChange={(e)=>{setEvent({...event,name:e.target.value})}} 
                        className={"form-control"} 
                        type="text" 
                        value={event.name}/>
            description  <input 
                          onChange={(e)=>{setEvent({...event,description:e.target.value})}}
                          className={"form-control"}
                          type="text" 
                          value={event.description}/>
            date  <input 
                        onChange={(e)=>{setEvent({...event,dateOfEvent:e.target.value})}}
                        className={"form-control"} 
                        type="date" 
                        value={event.dateOfEvent}/>
            <hr/>
            <button className={"btn btn-primary"} onClick={handleCreate}>Create</button>
        </div>
           
        </div>
    );
  
}