"use client"
import { Avatar, Button, Divider } from '@nextui-org/react'
import { Image } from '@nextui-org/react'
import Container from './../layout/Container'
import { bg, bgMin, paddingContent, textColor, titre } from './../CONST/global'
// import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { ArrowRight, ArrowRightCircle, BaggageClaim, CheckCircle, ChevronRight, ChevronsRight, HomeIcon, Link, MapPinned, Mic, Plane, ShieldCheck, TowerControl } from "lucide-react"
import Slide from './../home/Slide'
// import 'react-id-swiper/lib/styles/css/swiper.css';
import _1 from "./../assets/bg/1.png"
import logoRva from "./../assets/logoRva.png"
import { Divider as DividerAnt, Card, Carousel } from 'antd'
import Section from './../layout/Section'
import { ButtonDanger } from './../layout/Button'
import Motdg from './../home/Motdg'
import { API_URL, BACKEND_URL, SITEWEB_URL, getData, oldUrl } from './../fcts/helper'
import { Fade, Rotate, Slide as SlideAnim, Zoom } from "react-awesome-reveal";
import CardHome from './../components/Home/Card'
import SlideHome from './../components/Home/Slide'
import CountUp from 'react-countup';
import LinkNative from "next/link"
import { useEffect, useState } from 'react'
import moment from 'moment'
import { vols } from "./../data/liste"
import { Skeleton } from '@nextui-org/react'
import Titre from "./../layout/Titre"
import Actu from "./../layout/Actu"

const { Meta } = Card;


const titre1 = "text-yellow-600 font-bold text-xl";
const titre2 = "text-white font-bold text-3xl ";



export const SectionCounter = ({ titre, nbre, icone }) => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center w-full rounded-md '>
      <div className='text-blue-400'>{icone && icone}</div>
      <CountUp start={8990} end={nbre} enableScrollSpy={true} prefix='+'>
        {({ countUpRef, start }) => (
          <div className='font-[900] text-[40px] text-white'>

            <span ref={countUpRef} />
          </div>
        )}
      </CountUp>
      <div className='font-bold text-white'>{titre}</div>

    </div>
  )
}

export default function Home() {
  const [actus, setActus] = useState([]);
  const [dataHome, setDataHome] = useState({});
  useEffect(() => {
    console.log(API_URL);

    fetch(API_URL + "?qry=adminActualite", { method: "GET" }).then(r => r.json()).then((data) => {
      let newActusList = []
      for (var i = 0; i < 4; i++) {

        newActusList.push(data.data[i]);
      }
      setActus(newActusList);

    }).catch(err => {

      console.log(err);
    })
    fetch(API_URL + "?qry=homeData").then(r => r.json()).then((data) => {
      setDataHome(data?.data);
    });
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Container
        padding={false}
        header={""}
        headerBg={"bg-white"}
      // headerBg={"bg-blue-900"}
      >
        <iframe src={`${oldUrl}`} className="h-[710px] w-full z-10 -mt-[30px]" />
        <Section cls={"bg-gray-100 px-[200px] py-20 bg-[url('/7.png')] flex flex-col items-center justify-center"}>
          <p className='font-thin text-3xl mb-3 flex gap-3 items-center '>
            <Titre text={"À la une"} icon={<ArrowRight strokeWidth={1} />} />
          </p>
          <div className='grid grid-cols-4 gap-3 flex-wrap justify-center items-center'>
            {
              actus.map(a => (
                <Actu titre={a.titre}
                  dt={moment(a.datePub).format("DD/MM/YYYY HH:mm")}
                  img={a.img}
                  description={
                    <div>
                      <div className='line-clamp-4'>{a.contenu}</div>

                    </div>
                  } />
              ))
            }
          </div>
          <div className='flex justify-center items-center py-4'><LinkNative href='/actualites'><Button variant='solid' color='primary' radius='full'>Toutes les actualités</Button></LinkNative> </div>
        </Section>
        <Section cls={"relative px-[200px] justify-center mb-0 min-h-[300px] bg-[url('https://media.istockphoto.com/id/1477997501/fr/photo/zone-dattente-de-la%C3%A9roport-avec-bagages-si%C3%A8ges-vides-et-arri%C3%A8re-plan-flou.jpg?s=612x612&w=0&k=20&c=6A7B2aO_FoLG2njcb7zGE5G98OSaxtRky4ZY74paz34=')] bg-cover bg-center"}>
          <div class="absolute inset-0 bg-black bg-opacity-60"></div>
          <DividerAnt> <Titre cls={"relative bg-green-400"} text={"Bienvenue à la RVA"} icon={<HomeIcon strokeWidth={1} />} /></DividerAnt>
          <p className='text-xl text-white relative '>
            Bienvenue sur le site de la Régie des Voies Aériennes (RVA), le principal acteur de l'aviation civile en République Démocratique du Congo.
            À travers cette plateforme, nous vous offrons un aperçu complet de nos missions, de nos services et des valeurs qui guident chacune de nos actions. En tant qu'institution dédiée à la gestion de l'espace aérien et des infrastructures aéroportuaires, la RVA met un point d'honneur à assurer la sécurité, la fluidité et la modernisation des déplacements aériens en RDC. Explorez notre site pour découvrir nos activités, nos projets et nos engagements au service de l'aviation civile.
          </p>
        </Section>
        <Section cls={"bg-blue-600 h-content px-[200px] min-h-[300px] flex flex-col gap-4 bg-cover bg-black opacity-[90] "}>
          <Zoom delay={200}>
          <DividerAnt style={{color:"white", borderColor:"white"}}> <Titre cls={"relative "} text={"Mot du Directeur Général"} icon={<Mic strokeWidth={1} />} /></DividerAnt>
         
              <div className={`flex flex-row gap-24 border-x-[0px] px-3 border-orange-400 justify-center items-center`}>
                  <div className='text-justify text-white text-xl w-full'  dangerouslySetInnerHTML={{__html:dataHome?.motDg}} />
                  <div className='w-[500px] text-center text-white'>
                    <Image radius='md' src={BACKEND_URL+dataHome?.photoDg} className='w-[100%] mb-2' />
                    <p className="font-extrabold">NGOMA MBAKI Léonard</p>
                    <p>Directeur Général</p>
                  </div>
              </div>
              </Zoom>
          {/* <div className='flex gap-4 py-11 justify-center items-center'>
            <CardHome icon={<TowerControl size={50} strokeWidth={1} />} titre={"Sécurité"}>
              <div className='flex flex-col justify-between items-center h-full'>
                Morem area are psum dolor sitteme odern sectet aweur adipiscing always.<br />
                <div className='text-center justify-center items-center flex w-full'>
                  <Button variant='shadow' color='primary'>Decouvrir <ArrowRightCircle /></Button>
                </div>
              </div>
            </CardHome>
            <CardHome icon={<Plane size={50} strokeWidth={1} />} titre={"Fiabilité"}>
              <div className='flex flex-col justify-between items-center h-full'>
                Morem area are psum dolor sitteme odern sectet aweur adipiscing always.<br />
                <div className='text-center justify-center items-center flex w-full'>
                  <Button variant='shadow' color='primary'>Decouvrir <ArrowRightCircle /></Button>
                </div>
              </div>
            </CardHome>
            <CardHome icon={<ShieldCheck size={50} strokeWidth={1} />} titre={"Information"}>
              <div className='flex flex-col justify-between items-center h-full'>
                Morem area are psum dolor sitteme odern sectet aweur adipiscing always.<br />
                <div className='text-center justify-center items-center flex w-full'>
                  <Button variant='shadow' color='primary'>Decouvrir <ArrowRightCircle /></Button>
                </div>
              </div>
            </CardHome>
            <CardHome icon={<BaggageClaim size={50} strokeWidth={1} />} titre={"Fierté"}>
              <div className='flex flex-col justify-between items-center h-full'>
                Morem area are psum dolor sitteme odern sectet aweur adipiscing always.<br />
                <div className='text-center justify-center items-center flex w-full'>
                  <Button variant='shadow' color='primary'>Decouvrir <ArrowRightCircle /></Button>
                </div>
              </div>
            </CardHome>
          </div> */}
        </Section>
        
        <Section cls={"relative bg-white-500 bg-[url('https://www.matininfos.net/wp-content/uploads/2020/07/Aeroport-de-Njili-660x330.jpg')]  bg-cover bg-no-repeat"} >
          <div className={` flex gap-3 justify-between px-[250px] py-4 h-auto bg-black bg-no-repeat bg-opacity-60`}>
            <div className='border rounded-md flex items-center justify-center w-full border-blue-0   h-[300px] text-white'><SectionCounter nbre={25} titre={"Entités"} icone={<MapPinned strokeWidth={1} size={60} color='orange' />} /></div>
            <div className='border rounded-md flex items-center justify-center w-full border-blue-0   h-[300px] text-white'><SectionCounter nbre={4} titre={"Aéroports internationaux"} icone={<TowerControl strokeWidth={1} size={60} color='orange' />} /></div>
            <div className='border rounded-md flex items-center justify-center w-full border-blue-0   h-[300px] text-white'><SectionCounter nbre={64} titre={"Aéroport Nationaux"} icone={<TowerControl strokeWidth={1} size={60} color='orange' />} /></div>
            <div className='border rounded-md flex items-center justify-center w-full border-blue-0   h-[300px] text-white'><SectionCounter nbre={30} titre={"Aéroport Aérodromes"} icone={<TowerControl strokeWidth={1} size={60} color='orange' />} /></div>

          </div>
        </Section>
        {/* <Section cls={" h-content px-[250px] flex flex-col gap-4"}>
          
          <div className={"justify-center items-center flex flex-row"}><Titre text="Programmes des vols" /></div>
          <div className='flex gap-4 py-11 justify-center items-center'>
            {
              vols.map(vol => (
                <CardHome icon={vol.icon} titre={vol.nom}>
                  <div className='flex flex-col justify-between items-center h-full'>
                    {vol.contenu}
                    <div className='text-center justify-center items-center flex w-full'>
                      <Button variant='shadow' color='primary'>Detail <ArrowRightCircle /></Button>
                    </div>
                  </div>
                </CardHome>
              ))
            }


          </div>
        </Section> */}
      </Container>
    </main>
  )
}
