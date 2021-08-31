import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
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
import { useDispatch, useSelector } from 'react-redux'

import * as ACTIONS from '../../../store/actions/actions'


function validateEmail(email) {
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return re.test(String(email).toLowerCase());
}

const Login = (props) => {

  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("")
  const [isAdmin, setisAdmin] = useState("")
  const login = useSelector(state => state.login)
  const [formErrors, setFormErrors] = useState({
    username: "",
    password: "",
  });
  const onInputChange = (e) => {
    // console.log(e.target.value);

    if (e.target.name === "username") {
      setLoginForm({
        ...loginForm,
        username: e.target.value,
      });
      if (e.target.value.length < 1) {
        setFormErrors({
          ...formErrors,
          username: "Field Required",
        });
      } else {
        if (!validateEmail(e.target.value)) {
          console.log("invalid");
          setFormErrors({
            ...formErrors,
            username: "InVaild Email",
          });
        } else {
          setFormErrors({
            ...formErrors,
            username: "",
          });
        }
      }
    } else {
      setLoginForm({
        ...loginForm,
        password: e.target.value,
      });
      if (e.target.value.length < 1) {
        setFormErrors({
          ...formErrors,
          password: "Password is required",
        });
      } else {
        setFormErrors({
          ...formErrors,
          password: "",
        });
      }
    }
  };

  const handleLogin = async(e)=>{
    e.preventDefault();

    const body = {username:loginForm.username,password:loginForm.password};
    await dispatch(ACTIONS.LOGIN(body));
    if(!localStorage.getItem('token')){
      setError("Invalid Email or Password")
    }
    if(localStorage.getItem('role') !=='admin') {
      props.history.push('/events');
    }else{
      props.history.push("/home");
      // console.log(body);
    }

  }
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    {error && <CAlert color="danger">
                    {error}
                     </CAlert>}
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend >
                        <CInputGroupText >
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text"
                              name="username"
                              onChange={(e)=>onInputChange(e)}
                              placeholder="User Name"
                               />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password"
                              name="password"
                              onChange={(e)=>onInputChange(e)}
                              placeholder="Password"
                              autoComplete="current-password" />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton onClick={handleLogin}  color="primary" className="px-4">Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>To Create New Account</p>
                    <Link to="/register">
                      <CButton color="warning" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
