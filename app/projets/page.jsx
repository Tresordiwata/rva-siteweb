"use client"
import React from 'react'
import Container from '../layout/Container'
import { Button, Image } from '@nextui-org/react'
import Section from '../layout/Section'
import { FolderArchive } from 'lucide-react'
import { Fade } from 'react-awesome-reveal'

const Presentation = ({ id, numero, titre, description, img }) => {
    return (
        <Fade duration={1000} direction='down' >
        <div className='mb-14'>
            <div className='font-semibold text-center flex items-center justify-center text-lg line-clamp-1'>{numero} . {titre}</div>
            <Image src={img} width={"full"} />
            <div className='text-justify line-clamp-3'>
                {description}
            </div>
            <div className='flex items-center justify-center mt-4'>
                <Button variant='solid' color='danger' radius='full'>Consulter</Button>
            </div>
        </div>
        </Fade>
    )
}
const page = () => {

    return (
        <Container
            headerBgImg={"/projet.jpg"}
            header={<div className='py-10 flex items-center justify-center w-full'><FolderArchive  size={40}/> Nos projets</div>}
            cls={"border-b-0 shadow-sm border-red-400 bg-center"}
        >
            <Section>
                <div className='grid grid-cols-3 px-[250px] gap-3'>
                    <Presentation
                        numero={1}
                        titre={"Construction d'un nouvel aeroport à Goma"}
                        img="https://images.unsplash.com/photo-1591484222677-eb91797e696f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHByb2plY3R8ZW58MHx8MHx8fDA%3D"
                        description={"Credibly visualize front-end supply chains via plug-and-play e-services. Distinctively conceptualize vertical deliverables before market-driven convergence. Assertively maximize magnetic human capital without proactive supply chains. Monotonectally whiteboard equity invested e-commerce vis-a-vis accurate niches. Seamlessly create parallel niches vis-a-vis highly efficient channels Credibly pursue stand-alone innovation with corporate innovation. Proactively unleash multifunctional paradigms and."}
                    />
                    <Presentation
                        numero={2}
                        titre={"Monotonectally scale strategic materials vis-a-vis fully"}
                        img="https://images.unsplash.com/photo-1561131668-f63504fc549d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWlycG9ydHxlbnwwfHwwfHx8MA%3D%3D"
                        description={"Credibly visualize front-end supply chains via plug-and-play e-services. Distinctively conceptualize vertical deliverables before market-driven convergence. Assertively maximize magnetic human capital without proactive supply chains. Monotonectally whiteboard equity invested e-commerce vis-a-vis accurate niches. Seamlessly create parallel niches vis-a-vis highly efficient channels Credibly pursue stand-alone innovation with corporate innovation. Proactively unleash multifunctional paradigms and."}
                    />
                    <Presentation
                        numero={3}
                        titre={"Competently productivate proactive collaboration"}
                        img="https://plus.unsplash.com/premium_photo-1663039887624-82bb708dcced?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fGFpcnBvcnR8ZW58MHx8MHx8fDA%3D"
                        description={"Credibly visualize front-end supply chains via plug-and-play e-services. Distinctively conceptualize vertical deliverables before market-driven convergence. Assertively maximize magnetic human capital without proactive supply chains. Monotonectally whiteboard equity invested e-commerce vis-a-vis accurate niches. Seamlessly create parallel niches vis-a-vis highly efficient channels Credibly pursue stand-alone innovation with corporate innovation. Proactively unleash multifunctional paradigms and."}
                    />
                    <Presentation
                        numero={4}
                        titre={"Seamlessly reintermediate multimedia based"}
                        img="https://images.unsplash.com/photo-1490430657723-4d607c1503fc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGFpcnBvcnR8ZW58MHx8MHx8fDA%3D"
                        description={"Credibly visualize front-end supply chains via plug-and-play e-services. Distinctively conceptualize vertical deliverables before market-driven convergence. Assertively maximize magnetic human capital without proactive supply chains. Monotonectally whiteboard equity invested e-commerce vis-a-vis accurate niches. Seamlessly create parallel niches vis-a-vis highly efficient channels Credibly pursue stand-alone innovation with corporate innovation. Proactively unleash multifunctional paradigms and."}
                    />
                </div>
            </Section>
        </Container>
    )
}

export default page