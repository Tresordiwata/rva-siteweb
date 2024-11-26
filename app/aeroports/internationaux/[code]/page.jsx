"use client"

import React, { useEffect, useState } from 'react'
import Container from '../../../layout/Container'
import { Info, Library, Map, MapPin, Newspaper, Plane, PlaneLanding, Receipt } from 'lucide-react'
import { Image } from '@nextui-org/react'
import { API_URL, getData } from '../../../fcts/helper'


const page = ({params}) => {
    const [detail,setDetail]=useState({
        ville:null,
        code:null,
        photo:null,
        historique:null,
        description:null,
        typeAero:null,
        altitude:null,
        telephone:null,
        email:null,
        piste:null,
        maps:null
    })
    useEffect(() =>{
        fetch(API_URL+"?qry=aeroportByCode&code="+params.code,{method:"GET"}).then(r=>r.json()).then(r=>{
        let detailReturned=r?.detail;
       // alert(r?.data?.ville)
        setDetail({
            ville:detailReturned?.ville,
            code:detailReturned?.code,
            photo:detailReturned?.photo,
            historique:detailReturned?.historique,
            description:detailReturned?.description,
            typeAero:detailReturned?.typeAero,
            altitude:detailReturned?.altitude,
            telephone:detailReturned?.telephone,
            email:detailReturned?.email,
            piste:detailReturned?.piste,
            maps:detailReturned?.maps,
        })
       }).catch(err=>{
        console.log(err)
       
       });
    },[])
  return (
   <Container
    header={
        <div className='flex flex-col items-center justify-center w-full'>
            <div className='text-center flex items-center justify-center w-full gap-3'>
                <Plane size={40} strokeWidth={1} />Aeroport International de la Luano<PlaneLanding size={40} strokeWidth={1} />
            </div>
            {/* <div className='text-center flex items-center justify-center w-full text-lg'><MapPin />Lubumbashi</div> */}
        </div>
    }
    headerBgImg={"https://images.unsplash.com/photo-1539027994943-7d6960acfaad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk5fHxtb3RpZiUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D"}
    cls={"bg-[black]"}
   >
        <div className='px-[300px]'>
            <div className='flex py-10'>
                <div className='w-1/2'>
                    <Image width={"full"} src={`https://projetsite.rva.cd/images/aero/${detail.pho}`} />
                </div>
                <div className='w-1/2 flex flex-col px-[30px] text-[20px]'>
                    <div className='font-bold text-2xl mb-4 border-b-1 py-2 flex gap-3 items-center'><Info /> Information</div>
                    <div className='flex flex-col gap-2'>
                        <div className='text-center flex  w-full text-lg'>Ville : {detail.ville}</div>
                        <div>Categorie : {detail.typeAero=="I"?"INTERNATIONAL":detail.typeAero=="N"?"NATIONAL":""}</div>
                        <div>Code OACI : {detail.code}</div>
                        <div>Code IATA : FZQA</div>
                        <div>Altitude : {detail.altitude}</div>
                        <div>Telephone :{detail.telephone}</div>
                        <div>Email : {detail.email}</div>
                    </div>
                    
                </div>
            </div>
            <div className='border-b-0 mb-3'>
                <div className='font-bold text-2xl mb-4 border-b-1 py-2 flex gap-3 items-center'><Newspaper /> Piste</div>
                <div className='text-justify' dangerouslySetInnerHTML={{__html:detail.piste}} />
            </div>
            <div className='border-b-0 mb-3'>
                <div className='font-bold text-2xl mb-4 border-b-1 py-2 flex gap-3 items-center'><Newspaper /> Description</div>
                <div className='text-justify' dangerouslySetInnerHTML={{__html:detail.description}} />
            </div>
            <div className='border-b-0 mb-3'>
                <div className='font-bold text-2xl mb-4 border-b-1 py-2 flex gap-3 items-center'><Map />Géolocalisation</div>
                <div className='text-justify h-[300px]'>
                    {
                        detail.maps
                    }
                </div>
            </div>
            <div className='border-b-0 mb-3'>
                <div className='font-bold text-2xl mb-4 border-b-1 py-2 flex gap-3 items-center'><Library /> Historique</div>
                <div className='text-justify' dangerouslySetInnerHTML={{__html:detail.historique}} />
            </div>
        </div>
   </Container>
  )
}

export default page