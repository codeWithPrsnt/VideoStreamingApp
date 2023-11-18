import React, { useState } from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import View from './View'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Body = () => {
  const isMenuOpen = useSelector(state=>state.app.isMenuOpen);
    
  return (<div className={isMenuOpen?'body':'body-full'}>
        <Sidebar/>
        <Outlet/>
        
  </div>
    
  )
}

export default Body