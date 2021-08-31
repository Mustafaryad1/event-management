import React from 'react'
import { useSelector } from 'react-redux'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'

const TheLayout = () => {
  const login = useSelector(state => state.login)

  return (
    <div className="c-app c-default-layout">
      {login.isAdmin && <TheSidebar/>}
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
          <TheContent/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default TheLayout
