import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen);
    
  return (
    <div className='sidebar' hidden={!isMenuOpen}>
        <Link to='/'><div>Home</div></Link>
        <div>Shorts</div>
        <div>Subscriptions</div>
        <hr/>
        <div>Your channel</div>
        <div>History</div>
        <div>Your Videos</div>
        <hr/>
        <div>Watch Later</div>
        <div>Others</div>
        
    </div>
  )
}

export default Sidebar