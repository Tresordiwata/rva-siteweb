"use client"
import React from 'react'
import Container from '../../layout/Container'
import Section from '../../layout/Section'
import { Button, Image } from '@nextui-org/react'
import { Fade } from 'react-awesome-reveal'
import { Code, Filter, FolderOpen, MapIcon, MapPin, PhoneCall, PinIcon, TowerControlIcon } from 'lucide-react'
import Presentation from "./../Card"


const page = () => {
    return (
        <Container
            headerBgImg={"/fondactualite.png"}
            header={
                <div className='flex flex-col w-full justify-center items-center'>
                    <div className='py-2 flex items-center justify-center w-full'>Nos aéroports internationaux</div>
                    <p className='mb-3 italic text-lg text-center'>
                        La RVA gere 4 aeroports internationaux
                    </p>
                </div>
            }
            cls={"border-b-0 shadow-sm border-red-400 bg-center"}
        >
            <div className=' pl-[150px] mb-20 flex flex-col gap-5 bg-gray-100 pb-20'>
                
                <div className='flex flex-row flex-wrap gap-4'>
                    <Presentation id={1} categorie={"International"} localisation={"Kinshasa"} codeOaci={"FZQA"} nom={"Aéroport International de Ndjili"} img={"/tourcontrol.jpeg"} />
                    <Presentation id={2} categorie={"International"} localisation={"Lubumbashi"} codeOaci={"FZAA"} nom={"Aéroport international de Luano"} img={"https://laplumeinfos.net/img/galery/290b4a604c0f659c83336b25618cd6.jpg"} />
                    <Presentation id={3} categorie={"International"} localisation={"Goma"} codeOaci={"FZNA"} nom={"Aéroport International de Goma"} img={"https://b-onetv.cd/wp-content/uploads/2021/12/goma.jpeg"} />
                    <Presentation id={4} categorie={"International"} localisation={"Kisangani"} codeOaci={"FZIC"} nom={"Aéroport International de Bangoka"} img={"https://laplumeinfos.net/img/galery/290b4a604c0f659c83336b25618cd6.jpg"} />
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