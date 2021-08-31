import React from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import * as ACTIONS from '../store/actions/actions'
import { useDispatch, useSelector } from 'react-redux'


const TheHeaderDropdown = () => {
  const dispatch = useDispatch();

  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={'avatars/4.jpg'}
            className="c-avatar-img"
            alt="admin"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Account</strong>
        </CDropdownItem>
        <CDropdownItem  onClick={ ()=> {
                dispatch(ACTIONS.LOGOUT())
                console.log("logout");
          }
             }>
          <CIcon name="cil-account-logout" className="mfe-2"/>
            Logout
        </CDropdownItem>

      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown;
