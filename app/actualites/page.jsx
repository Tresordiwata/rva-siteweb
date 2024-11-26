"use client"
import React, { useEffect, useState } from 'react'
import Container from "./../layout/Container"
import Section from '../layout/Section'
// import { Image } from "@nextui-org/react";
// import  from "next/image";
import { Carousel } from 'antd';
import { Button, Image } from '@nextui-org/react';
import { AlertTriangle, ArrowRight, ArrowRightIcon, Calendar, CalendarDays, ChevronRight, ChevronRightCircleIcon, Newspaper, Rss } from 'lucide-react';
import Link from 'next/link';
// import {actus} from "./../data/liste"
import { Slide } from 'react-awesome-reveal';
import { API_URL, BACKEND_URL, getData } from '../fcts/helper';
import moment from 'moment';
import Actu from '../layout/Actu';
import Titre from '../layout/Titre';

const page = () => {
    const [actus, setActus] = useState([])
    const Card = ({ id, img, titre, description, dtPublication }) => {
        return (<div className='w-[400px]'>
            <div className='w-[100%] h-[200px]'>
                <Image src={img} width={"100%"} />
            </div>
        </div>)
    }
    const contentStyle = {
        height: '360px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',

    };


    useEffect(() => {
        fetch(API_URL + "?qry=adminActualite", { method: "GET" }).then(r => r.json()).then((data) => {
            setActus(data.data);
        })
    }, [])
    return (
        <Container
            header={
                <div className='text-3xl  items-center justify-start flex flex-col w-full '>
                    <h2 className='font-bold text-5xl flex gap-3 items-center'><Newspaper strokeWidth={2} size={35} /> Nos Actualités</h2>
                    <p className='text-lg'>Restez informé de tout ce qui se passe à la RVA</p>
                </div>
            } headerBgImg={"/fondactualite.png"}
            headerBg={"bg-gray-200"}
            cls={"border-b-0 shadow-sm border-red-400 bg-center"}
        >
            {/* <Section padding={false} cls={"px-[150px]"}>
                <div className='flex items-center justify-center animate-pulse flex-col'>
                    <Titre text="Urgent" icon={<AlertTriangle />} />
                    <div className='w-full'>
                        <img src='https://pbs.twimg.com/media/Ew7IeKEXIAEDEds.jpg' className='w-full' />
                    </div>
                </div>
            </Section> */}
            <Section padding={false} cls={"px-[150px] bg-gray-100"} >
                <div className='flex items-center justify-center'><Titre text={"Nos nouvelles"} icon={<Newspaper />} /></div>
                {/* <Carousel effect="fade" autoplay={true} autoplaySpeed={2000} dots={true}>
                {
                    actus.map((actu) => (
                        <div className='bg-blue-950 h-[350px] text-white rounded-md flex flex-col items-center justify-center py-2'>
                            <div className='flex flex-row items-center justify-center'>
                                <div className='font-bold text-center w-[70%]  flex flex-col justify-between h-full gap-10 mt-10'>
                                    <span className='text-3xl font-bold text-start bg-blue-400 w-fit px-4 rounded-r-full py-4 line-clamp-1'>{actu.titre}</span>
                                    <p className='px-2 line-clamp-3 font-extralight text-justify pr-12 text-xl'>
                                        {actu.description}
                                    </p>
                                    <p className='px-2 flex items-center justify-center'>
                                        <Link href={`/actualites/${actu.id}`}> 
                                            <Button radius='full' color='danger' className='text-white' size='lg'>Lire l'article</Button>
                                        </Link>
                                    </p>
                                </div>
                                <div className='flex-1 px-4'>
                                    <Image className='rounded-md' src={actu.img} width={400} height={400} />
                                </div>
                            </div>

                        </div>
                    ))
                }
            </Carousel> */}
                <div className='mt-10 grid grid-cols-4 gap-3 '>

                    {
                        actus?.map(actu => (
                            <Slide duration={800}>
                                {/* <div className='flex flex-col gap-3 border-b-none w-full overflow-hidden bg-zinc-100 px-3 rounded-sm mb-8 shadow-sm py-4'>
                            <div className='flex flex-col gap-2'>
                                <div className='font-bold text-center flex gap-3 items-center justify-center text-md line-clamp-1 rounded-lg py-3 '>
                                    <ChevronRightCircleIcon size={14} /> {actu.titre}
                                </div>
                                <p className='italic text-sm text-center flex gap-2 items-center justify-center font-thin'>
                                    <CalendarDays color='orange' size={14} /> Publié le : {moment(actu.datePub).format('DD/MM/YYYY HH:mm')}
                                </p>
                                <div className='w-full max-h-[200px]'><Image src={BACKEND_URL+ actu.img} isZoomed fill className='rounded-md'  /></div>
                                <p className='text-justify line-clamp-3'>{actu.contenu}</p>
                                <p className='flex items-center justify-center'>
                                    <Link href={`/actualites/${actu?.slug}`}>
                                        <Button color='danger' radius='full' variant='solid'>Lire la suite</Button>
                                    </Link>
                                </p>
                            </div> */}
                                <Actu titre={actu.titre} img={actu.img} description={actu.contenu} lien={`/actualites/${actu?.slug}`} showDate={true} dt={moment(actu.datePub).format('DD/MM/YYYY HH:mm')} />
                                {/* </div> */}
                            </Slide>
                        ))
                    }
                </div>
            </Section>
        </Container>
    )
}

export default page