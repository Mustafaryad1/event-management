import React, { useState } from 'react'
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axios from 'axios'

const Register = (props) => {
  const [register, setRegister] = useState({username:"",email:"",password:""})
  const [error, setError] = useState("")
  const handleRegister = ()=>{
    axios.post("/user/register",register).then(res=>{
      props.history.push("/login")
    }).catch(err=>{
      // setError(err.message+ " : " +err.error.split(":")[1] + err.error.split(":")[2])
      let registerError = err.response.data;
      if(registerError.error.includes("dup")){
        setError(registerError.message+ " : "+ "this user   exist")
      }else{
      setError(registerError.message+ " : " +registerError.error.split(":")[1] + registerError.error.split(":")[2])
      }
    })
  }
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  {error && <CAlert color="danger">
                    {error}
                  </CAlert>}
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text"
                            onChange={(e)=>setRegister({...register,username:e.target.value})}
                            value={register.username}
                            placeholder="Username"
                            autoComplete="username" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password"
                            onChange={(e)=>setRegister({...register,password:e.target.value})}
                            placeholder="Password"
                            value={register.password}
                            autoComplete="new-password" />
                  </CInputGroup>
                  <CButton onClick={handleRegister} color="success" block>Create Account</CButton>
                </CForm>
              </CCardBody>
              <CCardFooter className="p-4">

              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
