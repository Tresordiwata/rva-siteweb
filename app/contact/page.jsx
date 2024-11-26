import React from 'react'
import Container from '../layout/Container'
import {ArrowRight, Facebook, Home, Info, LampDesk, Linkedin, Mail, MailsIcon, MapIcon, MapPin, MessageCircle, PhoneCall, PinIcon, Twitter } from 'lucide-react'
import Section from '../layout/Section'
import TitrePage from '../components/TitrePage'
import { FacebookFilled, MessageOutlined } from '@ant-design/icons'
import { Avatar, Button, Input, Textarea } from '@nextui-org/react'
import { Divider } from 'antd'

export const Contact = ({ titre,adresse,telephone, email, lienFormulaire,cls }) => {
    const row=<div classname="flex gap-4 items-center text-xl font-bold  mb-7 text-white rounded-full px-3 py-2 bg-rose-600 w-fit text-center gap-2"> <ArrowRight />{titre}</div> 
    return (
        <div className={`${cls} w-1/2  rounded-sm px-3 py-2`} style={{width:"100%"}}>
            <div className="flex items-center text-xl font-bold  mb-7 text-white rounded-full px-3 py-2 bg-rose-600 w-fit text-center gap-2"> <ArrowRight />{titre}</div>
            <div className='mb-7 flex flex-col gap-3'>
                <div className='flex gap-2 items-center w-fit'><MapPin size={12} /> Adresse : </div>
                <div className='flex gap-2 items-center w-fit'><PhoneCall size={12} /> Téléphone :</div>
                <div className='flex gap-2 items-center w-fit'><MailsIcon size={12} />Email :</div>

            </div>
        </div>
    )
}

const page = () => {
    let contacts=[
        {
            titre:"Direction Générale",
            telephone:"",
            email:"",
            adresse:"",
            lien:"",
        },
        {
            titre:"Questions d'Exploitation et/ou Techniques",
            telephone:"",
            email:"",
            adresse:"",
            lien:"",
        },
        {
            titre:"Questions Relatives au Personnel et à la Formation",
            telephone:"",
            email:"",
            adresse:"",
            lien:"",
        },
        {
            titre:"Information sur les Vols",
            telephone:"",
            email:"",
            adresse:"",
            lien:"",
        },
        {
            titre:"Questions Commerciales",
            telephone:"",
            email:"",
            adresse:"",
            lien:"",
        },
        {
            titre:"Pour un rendez-vous",
            telephone:"",
            email:"",
            adresse:"",
            lien:"",
        },
    ]
    return (
        <Container

            headerBgImg={"/fondcontact2.png"}
            header={
                <>
                    {/* <img className='w-full' src={"https://images.unsplash.com/photo-1587560699334-bea93391dcef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbnRhY3R8ZW58MHx8MHx8fDA%3D"} /> */}
                    <h2 className='text-yellow-500 font-bold text-5xl items-center justify-center flex w-full gap-4'>
                        <MapPin strokeWidth={1} size={30} />
                        Nos contacts
                    </h2>
                </>
            }>
                <Section padding={true}>
                    <p className="text-xl flex gap-3 text-center">
                        {/* <Info color='blue' /> */}
                        Nos services sont disponibles du [Jour] au [Jour], de [Heure] à [Heure]. En dehors de ces horaires, vous pouvez nous laisser un message via notre formulaire en ligne, et nous vous répondrons dans les plus brefs délais.
                    </p>
                    {/* <p>
                        Adresse : 
                    </p> */}
                </Section>
            <Section padding={true} cls={"grid grid-cols-2 gap-4 mt-3"}>
                
                    {
                        contacts.map(c=>(
                            <Contact titre={c.titre} cls="w-1/2" />
                        ))
                    }
                
            </Section>
            <Section padding={true}>
                <div className='flex flex-col'>
                    <div className='flex flex-col gap-7 flex-1'>
                        {/* <div className='mb-7'>
                            <TitrePage t={<div className='flex gap-4 items-center'><MapIcon />Adresse</div>} />
                            <p>
                                <div className='flex flex-col gap-3'>
                                    
                                    <span>Avenue Aerodrome 45, Commune de Barumbu</span>
                                </div>
                            </p>
                        </div>
                        <div className='mb-7'>
                            <TitrePage  t={<div className='flex gap-4 items-center'><PhoneCall />Téléphone</div>} />
                            <p>
                                <div className='flex flex-col gap-3'>
                                   
                                    <span>+243 99 21 29 404</span>
                                </div>
                            </p>
                        </div>
                        <div className='mb-7'>
                            <TitrePage t={<div className='flex gap-4 items-center'><Mail />Email</div>} />
                            <p>
                                <div className='flex flex-col gap-3'>
                                   
                                    <span>info@rva.cd</span>
                                </div>
                            </p>
                        </div> */}
                        
                    </div> 
                    {/* Espace Nous ecrire */}
                    <div className='flex-1'>
                        <Divider><TitrePage t={<div> Nous écrire</div>} cls={""} /></Divider>
                        <div>
                            <form className='flex flex-col gap-4'>
                                <Input label="Votre nom" />
                                <Input label="Votre email" />
                                <Textarea label="Votre message" minRows={7}></Textarea>
                                <p className='flex items-center justify-center'>
                                    <Button color='danger' radius='full' size='lg'>Envoyer</Button>
                                </p>
                            </form>
                        </div>
                    </div>
                    <div className='mb-7 mt-8'>
                            <Divider><TitrePage t={"Nos Reseaux sociaux"} cls={"text-center"} /></Divider>
                            <p className='mt-6'>
                                <div className='flex flex-row gap-6 text-center justify-center'>
                                    <span className='w-[50px] h-[50px] hover:bg-red-500 transition-all  rounded-full bg-slate-900 flex items-center justify-center'>
                                        <Facebook color='white' />
                                    </span>
                                    <span className='w-[50px] h-[50px]  hover:bg-red-500 transition-all rounded-full bg-slate-900 flex items-center justify-center'>
                                        <Twitter color='white' />
                                    </span>
                                    <span className='w-[50px] h-[50px]  hover:bg-red-500 transition-all rounded-full bg-slate-900 flex items-center justify-center'>
                                        <Linkedin color='white' />
                                    </span>
                                </div>
                            </p>
                        </div>
                </div>
            </Section>
            <Section padding={true}>
                <p className='text-xl text-center'>
                Nous Vous Répondons Rapidement !<br />
                
                Nous nous engageons à répondre à toutes les demandes dans les plus brefs délais. Merci de nous avoir contactés !
                </p>
            </Section>
        </Container>
    )
}

export default page