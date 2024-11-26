"use client"
import React from 'react'
import { NextUIProvider } from "@nextui-org/react";
import Header from '../components/Header/Header.jsx';
import { bg } from '../CONST/global.jsx';
import Footer from '../components/footer/Footer.jsx';
import Menu from "./../../app/components/Header/Menu.jsx";


const MainLayout = ({ children }) => {
  return (
    <NextUIProvider>
      
      <div className={`${bg} w-full pt-1 shadow-sm mb-0 z-50`}>
        <Header />
      </div>
      {/* <div>
        <div className="flex h-[7px] px-[0px]">
          <div className="w-full bg-blue-500">&nbsp;</div>
          <div className="w-full bg-yellow-500">&nbsp;</div>
          <div className="w-full bg-red-500">&nbsp;</div>
        </div>
      </div> */}
      <div className='z-20'>
        {children}
      </div>
      <div>
        <Menu />
      </div>
      <footer>
        <Footer />
      </footer>
    </NextUIProvider>
  )
}


export default MainLayout