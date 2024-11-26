"use client"
import React, { useEffect, useState } from 'react'
import Section from '../../layout/Section'
import { actus } from '../../data/liste'
import Image from 'next/image'
import { API_URL, BACKEND_URL, getData } from '../../fcts/helper'
import moment from 'moment'
// import { Image } from '@nextui-org/react'

const page = ({params}) => {
    const [actu,setActu]=useState(null)
    useEffect(()=>{
        fetch(API_URL+"?actualiteBySlug&slug="+params.detail,{method:"GET"}).then(r=>r.json()).then((res) =>{
            setActu(res.data);
        })    
        // setActu(actus.find(a=>a.id==params.detail));
        console.clear()
    },[])
  return (
   <Section padding={false} cls={"px-[240px] mt-[50px]"}>
    {/* <div>{params.detail}</div> */}
        <div className='flex flex-col gap-4 justify-center items-center'>
            <h2 className='font-bold text-3xl text-start'>{actu?.titre}</h2>
            <div className='italic text-sm'>Publié le : {moment(actu?.datePub).format("DD/MM/YYYY HH:mm")} </div>
            <div className='w-full h-[400px] bg-cover rounded-md' style={{backgroundImage:`url(${BACKEND_URL+actu?.img})`}}>
                
            </div>
            <p className='text-justify'>
                {actu?.contenu}
            </p>
        </div>
   </Section>
  )
}

export default page