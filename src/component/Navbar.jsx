import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
    <div>
     <span></span>
   <Link to='/Cart'>  <span>Cart</span></Link>
    </div>



    <Outlet/>
    </>
  )
}
