import React from 'react'
import Section from '../layout/Section'
import { Image } from '@nextui-org/react';
import { MailIcon, MapPin, PhoneIcon } from 'lucide-react';
import Link from 'next/link';
import { Tabs } from 'antd';


const iconAvion=<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plane"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>;

const aeroports=[
    {
        id:1,
        nom:"Aeroport International de Ndili",
        image:"https://images.unsplash.com/photo-1573076978602-a16914734d61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFpcnBvcnRzfGVufDB8fDB8fHww",
        email:"aerport@rva.cd",
        telephone:"+243992129404",
        ville:"Kinshasa"
    },
    {
        id:2,
        nom:"Aeroport International de Luano",
        image:"https://images.unsplash.com/photo-1573076978602-a16914734d61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFpcnBvcnRzfGVufDB8fDB8fHww",
        email:"aerport@rva.cd",
        telephone:"+243992129404",
        ville:"Lubumbashi"
    },
    {
        id:3,
        nom:"Aeroport International de Goma",
        image:"https://images.unsplash.com/photo-1573076978602-a16914734d61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFpcnBvcnRzfGVufDB8fDB8fHww",
        email:"aerport@rva.cd",
        telephone:"+243992129404",
        ville:"Goma"
    },
    {
        id:4,
        nom:"Aeroport International de Bangoka",
        image:"https://images.unsplash.com/photo-1573076978602-a16914734d61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFpcnBvcnRzfGVufDB8fDB8fHww",
        email:"aerport@rva.cd",
        telephone:"+243992129404",
        ville:"Kisangani"
    },
];

const Card=({titre,image,ville,telephone,email,href})=>{
    return(
        <div className='w-[400px] shadow-md h-[350px] px-3 rounded-md'>
            <h3 className='h-14 text-center text-medium pt-2 uppercase font-bold'>{titre}</h3>
            <Image src={image} fill isZoomed  />
            <div className='flex justify-center items-center py-3 gap-2'>
                <MapPin size={13} /> {ville} 
            </div>
           
            <div className='flex justify-center items-center py-2 text-sm gap-2 text-zinc-500'>
                <PhoneIcon size={10} />  {telephone} 
            </div>
            <div className='flex justify-center items-center py-2 text-sm gap-2 text-zinc-500'>
                <MailIcon size={10} />  {email} 
            </div>
            <hr />
            <div className='flex justify-center items-center py-2 text-sm gap-2 text-blue-400'>
                <Link href={href}>Detail</Link>
            </div>
        </div>
    )
}

const AeroportsInternational=()=>{
    return(
        <div className='bg-white rounded-sm overflow-hidden py-3 mb-5'>
                <div className='py-4 border-b-0 text-center items-center justify-center  px-3  text-2xl flex gap-3 text-blue-400'>{iconAvion} Aéroports Internationaux (4)</div>
                <div className='flex gap-3 p-4'>
                    {
                        aeroports.map(aeroport=>(
                            <Card titre={aeroport?.nom} image={aeroport.image} ville={aeroport.ville} telephone={aeroport.telephone} email={aeroport.email} href={`/aeroports/${aeroport.id}`}  />
                        ))
                    }
                </div>
            </div>
    )
}

const AeroportsNationaux=()=>{
    return(
        <div className='bg-white rounded-sm overflow-hidden py-3 mb-5'>
                <div className='py-4 border-b-0 text-center items-center justify-center  px-3  text-2xl flex gap-3 text-blue-400'>{iconAvion} Aéroports Nationaux (4)</div>
                <div className='flex gap-3 p-4'>
                    {
                        aeroports.map(aeroport=>(
                            <Card titre={aeroport?.nom} image={aeroport.image} ville={aeroport.ville} telephone={aeroport.telephone} email={aeroport.email} href={`/aeroports/${aeroport.id}`}  />
                        ))
                    }
                </div>
            </div>
    )
}
const Aerodromes=()=>{
    return(
        <div className='bg-white rounded-sm overflow-hidden py-3 mb-5'>
                <div className='py-4 border-b-0 text-center items-center justify-center  px-3  text-2xl flex gap-3 text-blue-400'>{iconAvion} Aérodromes (4)</div>
                <div className='flex gap-3 p-4'>
                    {
                        aeroports.map(aeroport=>(
                            <Card titre={aeroport?.nom} image={aeroport.image} ville={aeroport.ville} telephone={aeroport.telephone} email={aeroport.email} href={`/aeroports/${aeroport.id}`}  />
                        ))
                    }
                </div>
            </div>
    )
}
const page = () => {
   
   
    const items=[
        {
            key:"I",
            label:"Aéroports Internationaux",
            children:<AeroportsInternational />,
        },
        {
            key:"N",
            label:"Aéroports Nationaux",
            children:<AeroportsNationaux />,
        },
        {
            key:"A",
            label:"Aérodromes",
            children:<Aerodromes />,
        }
    ]
      
    return (
    <div className='h-full bg-white'>
        <Section padding={true}>
            <Tabs items={items} />
            {/* 
            <div className='bg-white rounded-sm overflow-hidden py-3'>
                <div className='py-4 border-b px-3 font-bold text-2xl flex gap-3 text-blue-400'>{iconAvion} Aéroports Nationaux (39)</div>
                <div className='flex gap-3 p-4'>
                    {
                        aeroports.map(aeroport=>(
                            <Card titre={aeroport?.nom} image={aeroport.image} ville={aeroport.ville} telephone={aeroport.telephone} email={aeroport.email} href={`/aeroports/${aeroport.id}`}  />
                        ))
                    }
                </div>
            </div>
            <div className='bg-white rounded-sm overflow-hidden py-3'>
                <div className='py-4 border-b px-3 font-bold text-2xl flex gap-3 text-blue-400'>{iconAvion} Aérodromes (39)</div>
                <div className='flex gap-3 p-4'>
                    {
                        aeroports.map(aeroport=>(
                            <Card titre={aeroport?.nom} image={aeroport.image} ville={aeroport.ville} telephone={aeroport.telephone} email={aeroport.email} href={`/aeroports/${aeroport.id}`}  />
                        ))
                    }
                </div>
            </div> */}
        </Section>
    </div>
  )
}

export default page