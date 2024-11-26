import React from 'react'
import Container from '../layout/Container'
import { Facebook, Home, Linkedin, Mail, MapIcon, MapPin, MessageCircle, PhoneCall, PinIcon, Twitter } from 'lucide-react'
import Section from '../layout/Section'
import TitrePage from '../components/TitrePage'
import { FacebookFilled, MessageOutlined } from '@ant-design/icons'
import { Avatar, Button, Input, Textarea } from '@nextui-org/react'

const page = () => {
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
                <div className='flex'>
                    <div className='flex flex-col gap-7 flex-1'>
                        <div className='mb-7'>
                            <TitrePage t={<div className='flex gap-4 items-center'><MapIcon />Adresse</div>} />
                            <p>
                                <div className='flex flex-col gap-3'>
                                    {/* <span>Adresse :</span> */}
                                    <span>Avenue Aerodrome 45, Commune de Barumbu</span>
                                </div>
                            </p>
                        </div>
                        <div className='mb-7'>
                            <TitrePage  t={<div className='flex gap-4 items-center'><PhoneCall />Téléphone</div>} />
                            <p>
                                <div className='flex flex-col gap-3'>
                                    {/* <span>Adresse :</span> */}
                                    <span>+243 99 21 29 404</span>
                                </div>
                            </p>
                        </div>
                        <div className='mb-7'>
                            <TitrePage t={<div className='flex gap-4 items-center'><Mail />Email</div>} />
                            <p>
                                <div className='flex flex-col gap-3'>
                                    {/* <span>Adresse :</span> */}
                                    <span>info@rva.cd</span>
                                </div>
                            </p>
                        </div>
                        <div className='mb-7'>
                            <TitrePage t={"Nos Reseaux sociaux"} />
                            <p className='mt-6'>
                                <div className='flex flex-row gap-6'>
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
                    <div className='flex-1'>
                        <TitrePage t={<div> Nous écrire</div>} cls={""} />
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
                </div>
            </Section>
        </Container>
    )
}

export default page