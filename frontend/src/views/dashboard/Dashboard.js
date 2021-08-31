import {
  CCardGroup,
  CCardFooter,
  CCol,
  CLink,
  CRow,
  CWidgetProgress,
  CWidgetIcon,
  CWidgetProgressIcon,
  CWidgetSimple,
  CProgress,
} from '@coreui/react'
import axios from 'axios'

import React, { useEffect, useState } from 'react'



const Dashboard = () => {
  const [users,setUsers] = useState(0);
  const [forms,setForms] = useState(0);
  const [submissions,setSubmissions] = useState(0);

  useEffect(()=>{
    axios.get("/form/statistics").then(res=>{
      setUsers(res.data.users)
      setForms(res.data.forms)
      setSubmissions(res.data.submissions)
    }).catch(err=>{

    })
  },[])
  return (
    <>
     <CRow>
        <CCol sm="4" lg="4">
          <CWidgetSimple header="Events" text={forms}>

          </CWidgetSimple>
        </CCol>
        <CCol sm="4" lg="4">
          <CWidgetSimple header="Users" text={submissions}>

          </CWidgetSimple>
        </CCol>
        <CCol sm="4" lg="4">
          <CWidgetSimple header="Attendances" text={users}>

          </CWidgetSimple>
        </CCol>


      </CRow>

    </>
  )
}

export default Dashboard
