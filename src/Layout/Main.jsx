import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../pages/shared/footer/Footer'
import Navbar from '../pages/shared/navbar/Navbar'

export default function Main() {


  
const  location= useLocation();
const noHeaderFooter=location.pathname.includes('login');


  return (
    <div>
        {noHeaderFooter || <Navbar></Navbar>}
        <Outlet></Outlet>
        { noHeaderFooter || <Footer></Footer>}
        
    </div>
  )
}
