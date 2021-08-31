import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

const Forms = React.lazy(() => import('./views/forms/list/list'));
const FormCreate = React.lazy(() => import('./views/forms/create/create'));
const EditForm = React.lazy(() => import('./views/forms/edit/edit'));
const Form = React.lazy(() => import('./views/forms/display/display'));
const myEvents = React.lazy(() => import('./views/users/userForms'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/events', exact: true, name: 'Events' ,component: myEvents},
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/form', exact: true,  name: 'Forms', component: Forms },
  { path: '/form/list', exact: true,  name: 'Forms', component: Forms },
  { path: '/form/edit/:id', exact: true,  name: 'Edit Form', component: EditForm },
  { path: '/form/create', exact: true,  name: 'Create Form', component: FormCreate },
  { path: '/form/display/:id', exact: true,  name: 'Form', component: Form },
];

export default routes;
