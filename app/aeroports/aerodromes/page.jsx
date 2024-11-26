"use client"
import React,{useEffect,useState} from 'react'
import Container from '../../layout/Container'
import Section from '../../layout/Section'
import { Button, Image } from '@nextui-org/react'
import { Fade, Slide } from 'react-awesome-reveal'
import { Code, Filter, FolderOpen, MapIcon, MapPin, PhoneCall, PinIcon, TowerControlIcon } from 'lucide-react'
import Presentation from "./../Card"
import { API_URL, BACKEND_URL, getData } from '../../fcts/helper'
import { Alert } from 'antd'


const page = () => {
    const [data,setData]=useState([])
    useEffect(() => {
        fetch(API_URL+"?qry=aeroports",{method:"GET"}).then(r=>r.json()).then(r=>{
        setData(r.data);
     })
    }, [])
    
    return (
        <Container
            headerBgImg={"/fondactualite.png"}
            header={
                <>
                    <div className='py-10 flex items-center justify-center w-full'>
                        Nos aéroports nationaux
                    </div>
                    <p className='mb-3 text-2xl text-center '>
                    La RVA gere {data?.filter(aero=>aero.typeAero).length} aerodromes
                    </p>
                </>
            }
            cls={"border-b-0 shadow-sm border-red-400 bg-center bg-gray-100"}

        >
            <div className=' pl-[150px] mb-20 flex flex-col gap-5 bg-gray-100'>
                <div className='flex flex-row flex-wrap gap-4'>
                    {
                        data.sort((nom,nom2)=>nom.nom<nom2.nom).filter(aero=>aero.typeAero=="N").map((d,i)=>(
                            <Slide duration={1000} cascade direction='down'>
                                <Presentation id={1} categorie={"National"} localisation={d.ville} codeOaci={d.codeAero} nom={`Aéroport national de ${d.nom}`}  img={BACKEND_URL+d.photoAero} />
                            </Slide>
                        ))
                    }
                    {/* // <Presentation id={2} categorie={"International"} localisation={"Lubumbashi"} codeOaci={"FZAA"} nom={"Aéroport international de Luano"} img={"https://laplumeinfos.net/img/galery/290b4a604c0f659c83336b25618cd6.jpg"} />
                    // <Presentation id={3} categorie={"International"} localisation={"Goma"} codeOaci={"FZAA"} nom={"Aéroport International de Goma"} img={"https://b-onetv.cd/wp-content/uploads/2021/12/goma.jpeg"} />
                    // <Presentation id={4} categorie={"International"} localisation={"Kisangani"} codeOaci={"FZAA"} nom={"Aéroport International de Bamgboka"} img={"https://laplumeinfos.net/img/galery/290b4a604c0f659c83336b25618cd6.jpg"} />
                     */}
                    {/* <Fade duration3{5000}> */}

                    {/* </Fade>
                    <Fade duration={5000} cascade> */}

                    {/* </Fade>
                    <Fade duration={5000}> */}

                    {/* </Fade> */}
                </div>
            </div>

        </Container>
    )
}

export default page