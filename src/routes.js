import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Inscrip = React.lazy(() => import('./views/Inscrip')) 

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/inscrip', name: 'Dashboard', element: Inscrip }
]

export default routes
