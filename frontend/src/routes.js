import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Inscrip = React.lazy(() => import('./views/Inscrip'))
const Estudiantes = React.lazy(() => import('./views/Estudiantes'))
const Secciones = React.lazy(() => import('./views/Secciones')) 

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/inscrip', name: 'Dashboard', element: Inscrip },
  { path: '/estudiantes', name: 'Dashboard', element: Estudiantes},
  { path: '/secciones', name: 'Dashboard', element: Secciones},

]

export default routes
