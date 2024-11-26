"use client"
import React, { useEffect, useState } from 'react'
import Container from '../../layout/Container'
import Section from '../../layout/Section'
import { Button, Image } from '@nextui-org/react'
import { Fade } from 'react-awesome-reveal'
import { Code, Filter, FolderOpen, MapIcon, MapPin, PhoneCall, PinIcon, Plane, TowerControl, TowerControlIcon } from 'lucide-react'
import Presentation from "./../Card"
import { API_URL, getData } from '../../fcts/helper'
import { Spin } from 'antd'
import Link from 'next/link'


const page = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch(API_URL+"?qry=aeroports",{method:"GET"}).then(r=>r.json()).then(d => {
            setData(d.data);
            setLoading(false)
        })
    }, [])
    return (
        <Container
            headerBgImg={"/fondactualite.png"}
            header={<div className='py-10 flex items-center justify-center w-full'>Tous nos aéroports</div>}
            cls={"border-b-0 shadow-sm border-red-400 bg-center"}
        >
            <div className='px-[250px] mb-20 flex flex-col gap-5 bg-gray-100 pb-20 pt-3'>
                <Spin spinning={loading}>
                    <div className='grid grid-cols-3 gap-4'>
                        {
                            data.filter(d => d.codeAero !== "").map(d => (

                                <div className='border-none bg-white rounded-md py-4 w-full shadow-none px-5 items-center justify-center flex flex-col gap-3 hover:border-red-500 hover-border-2 transition-all'>
                                    <div className='w-full pb-4 flex gap-3 text-2xl text-gray-800 items-center justify-center border-b'>
                                        <Plane strokeWidth={1} /> {`Aéroport`} de {d.nom}
                                    </div>
                                    <div className='flex justify-between w-full'>
                                        <div>Categorie : {d?.typeAero == "I" ? "International" : "National"}</div>
                                        <div>Code : {d?.codeAero}</div>
                                    </div>
                                    <div>
                                        <Link href={`/aeroports/detail/${d?.id}`}><Button size='sm' color='primary' radius='lg'>Consulter</Button></Link>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </Spin>
            </div>

        </Container>
    )
}

export default page