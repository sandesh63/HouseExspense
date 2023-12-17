import React from 'react'
import NavigationBar from './NavigationBar'
import ExspenseTable from './ExspenseTable'

const Outlet = () => {
  return (
   <>
    <NavigationBar/>
    <ExspenseTable/>
   </>
  )
}

export default Outlet