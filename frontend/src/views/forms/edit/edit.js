import React, { useEffect, useState } from 'react';
import {FormEdit} from 'react-formio';
import axios from 'axios';
import { CCard, CCardBody, CCol, CSwitch } from '@coreui/react';
import { useDispatch, useSelector } from 'react-redux';

export default function EditForm(props) {
    const [event, setEvent] = useState(props.location.state.event);
    useEffect(()=>{
        const date = props.location.state.event.dateOfEvent.split('T')[0];
        setEvent({...event,dateOfEvent:date})

    },[])

    const handleUpdate = ()=>{
        axios.put(`/event/${event.id}`,event).then(res=>{
            props.history.push('/form/list')
        }).catch(err=>{
            console.log(err)
        })
    }
  return (
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
            <button className={"btn btn-primary"} onClick={handleUpdate}>Update</button>
        </div>
    );
  
}