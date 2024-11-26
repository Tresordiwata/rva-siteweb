import React from 'react'
import { bg } from '../CONST/global'
import {Image} from "@nextui-org/react";
import tourcontrol from './../assets/tourcontrol.jpeg' 

const Container = ({children,header,hideHeader, headerBg, headerBgImg, padding,cls}) => {
  return (
    <div className={`w-full `}>
        {
          !hideHeader &&
          <div className={`${cls} backdrop-blur-3xl  bg-no-repeat bg-center  ${headerBg || bg} w-[100%] flex  ${padding==false?null:'p-[100px]'} text-white text-5xl font-bold`} style={{backgroundSize:"cover", backgroundPosition:"top", backgroundImage:headerBgImg?`url(${headerBgImg})`:"none"}}>
           {header}
          </div>
        }
        <div className='pt-4 mb-0'>
        {children}
        </div>
    </div>
  )
}

export default Container