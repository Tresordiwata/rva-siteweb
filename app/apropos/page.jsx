"use client"
import React from 'react'
import Section from '../layout/Section'

import { Home, Info, InfoIcon } from 'lucide-react'
import Container from '../layout/Container'
import Titre from "./../layout/Titre"
import { Image } from '@nextui-org/react'
import Reveal,{Slide} from 'react-awesome-reveal'


const Card = ({ children }) => {
  return (
    <div className='w-[250px] lg:w-[250px] h-[150px] shadow-md rounded-md p-3 flex items-center justify-center border bg-cover text-white bg-[url("/1.png")]'>
      {children}
    </div>
  )
}
const page = () => {

  return (
    <Container
      headerBgImg={"https://images.unsplash.com/photo-1484156818044-c040038b0719?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWZyaWNhbnMlMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D"}
      header={<div className='py-10  flex items-center justify-center w-full text-3xl gap-4'><InfoIcon size={40} /> A Propos de la RVA</div>}
      cls={"border-b-0 shadow-sm border-red-400 bg-center"}
    >
      <Section padding={"250px"} cls={"mb-[150px]"}>
        <div className='flex flex-col lg:flex-row gap-10 mt-7 items-center justify-between'>
         
          <div className='flex-1 text-center gap-7 flex flex-col'>

            <div className='flex gap-20'>
              <div className='w-full'>
              <Slide direction='down'>
                <div className='items-center justify-center flex mb-10'>
                  <Titre text="Qui sommes-nous ?" />
                </div>
                <p className='text-xl'>
                La Régie des Voies Aériennes (RVA) est une société anonyme (SA) de la République Démocratique du Congo, créée par l&#39;ordonnance-loi n° 072-13 du 21 février 1972. 
                Elle est principalement chargée de la gestion de l’espace aérien et des aéroports du pays.
                </p>
              </Slide>
              </div>
              <div className='w-full'>
              <Slide direction='up'>
                <Image src='https://storage.googleapis.com/images.digitalcongo.net/Provinces/Kinshasa/ndjili-international-airport-kinshasa-040220-800px.jpg' />
              </Slide>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section padding={"250px"} cls={"mb-[30px] bg-gray-100 py-[50px]"}>
        <div className='flex gap-20'>
          <div className='w-full'>
            <Slide direction='left'>
            <Image src='https://s.rfi.fr/media/display/c5438f9c-10e7-11ea-8ca6-005056bf7c53/w:980/p:16x9/361161660_79b7a6d02e_0.jpg' />
            </Slide>
          </div>
          <div className='w-full'>
            <Slide direction='right'>
            {/* <div className='items-center justify-center flex mb-10'>
              <Titre text="Histoire de la RVA" />
            </div> */}
            <p className='text-xl'>
              La RVA fournit une large gamme de services dans le domaine de la navigation aérienne (gestion du trafic aérien, systèmes de communication, de navigation et de surveillance, information aéronautique, météorologie, procédures de vol aux instruments, messagerie aéronautique, formation du personnel, etc.), ainsi que des services aéroportuaires (infrastructures aéroportuaires, facilitation, sécurité incendie, sûreté, gestion des passagers,aires de stationnement, etc.). Toutefois, il convient de préciser que la RVA gère directement 52 aéroports et aérodromes parmi les nombreux aéroports que compte le pays.
            </p>
            </Slide>
          </div>

        </div>
      </Section>
      {/* <Section cls={"h-content bg-blue-950 py-[50px]"}>
        <Slide direction='up'>
        <div className='flex items-center justify-center px-[250px] gap-4'>
          <Card>
            <div className='flex flex-col items-center justify-center  font-bold'>
              <Home size={23} />
              <span className='text-2xl '>+10 Directions</span>
            </div>
          </Card>
          <Card>
            <div className='flex flex-col items-center justify-center  font-bold'>
              <Home size={23} />
              <span className='text-2xl '>+45 Services</span>
            </div>
          </Card>
          <Card>
            <div className='flex flex-col items-center justify-center  font-bold'>
              <Home size={23} />
              <span className='text-2xl '>+45 Aeroports</span>
            </div>
          </Card>
          <Card>
            <div className='flex flex-col items-center justify-center  font-bold'>
              <Home size={23} />
              <span className='text-2xl '>+45 Aeroports</span>
            </div>
          </Card>
        </div>
        </Slide>
      </Section> */}
    </Container>
  )
}

export default page