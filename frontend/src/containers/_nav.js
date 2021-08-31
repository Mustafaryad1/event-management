import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,

  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Form']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'List',
    to: '/form/list',
    icon: 'cil-list',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Create',
    to: '/form/create',
    icon: 'cil-task',
  },


]

export default _nav
