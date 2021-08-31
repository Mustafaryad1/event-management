import React, { useEffect, useState } from 'react';
import {Form} from 'react-formio';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { CButton, CCard, CCardBody, CCardFooter, CCardHeader, CCol, CCollapse, CRow } from '@coreui/react';



const chunksQueue = (number_of_chaunks)=>  new Array(number_of_chaunks).fill().map((_, index) => index).reverse();
const CHUNK_SIZE = 50*1024

export default function DisplayForm(props) {
    
    
    const [form, setForm] = useState({});
    const [attendance, setAttendance] = useState(0);
    const { match: { params } } = props;
    const event_id =  params.id;
    console.log(event_id)
    useEffect(()=>{
        axios.get(`/event/${event_id}`).then(res=>{
            console.log('event')
            let _form =  res.data;
            setForm(_form[0])
            axios.get(`/attendance/event/${event_id}`).then(res=>{
                console.log(res.data)
                setAttendance(res.data[0].attendance_count)
            }).catch(err=>{
                setAttendance(0)
            })
        }).catch(err=>{
            alert("Not Found")
            props.history.push('/events')
        })
    },[])
    
   
  return (
        <div>
            <h1>Event</h1>
            <hr/>
            <h4>Name: {form.name}</h4>
            <h4>description: {form.description}</h4>
            <h4>event-date : {form.dateOfEvent}</h4>
            <h4>Attendance : {attendance}</h4>
            
        </div>
    );
  
}