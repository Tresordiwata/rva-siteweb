import React from 'react'
import Container from '../../../layout/Container'
import { Info, Library, Map, MapPin, Newspaper, Plane, PlaneLanding, Receipt } from 'lucide-react'
import { Image } from '@nextui-org/react'

const page = ({params}) => {
  return (
   <Container
    header={
        <div className='flex flex-col items-center justify-center w-full'>
            <div className='text-center flex items-center justify-center w-full gap-3'>
                <Plane size={40} strokeWidth={1} />Aeroport International de la Luano<PlaneLanding size={40} strokeWidth={1} />
            </div>
            {/* <div className='text-center flex items-center justify-center w-full text-lg'><MapPin />Lubumbashi</div> */}
        </div>
    }
    headerBgImg={"https://images.unsplash.com/photo-1539027994943-7d6960acfaad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk5fHxtb3RpZiUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D"}
    cls={"bg-[black]"}
   >
        <div className='px-[300px]'>
            <div className='flex py-10'>
                <div className='w-1/2'>
                    <Image width={"full"} src='https://projetsite.rva.cd/images/aero/fl_lubumbashi.jpg' />
                </div>
                <div className='w-1/2 flex flex-col px-[30px] text-[20px]'>
                    <div className='font-bold text-2xl mb-4 border-b-1 py-2 flex gap-3 items-center'><Info /> Information</div>
                    <div className='flex flex-col gap-2'>
                        <div className='text-center flex  w-full text-lg'>Ville : Lubumbashi</div>
                        <div>Categorie : INTERNATIONAL</div>
                        <div>Code OACI : FZQA</div>
                        <div>Code IATA : FZQA</div>
                        <div>Altitude : 1309m(4320ft)</div>
                        <div>Telephone :+243 911111111</div>
                        <div>Email : luanoaero@yahoo.fr</div>
                    </div>
                    
                </div>
            </div>
            <div className='border-b-0 mb-3'>
                <div className='font-bold text-2xl mb-4 border-b-1 py-2 flex gap-3 items-center'><Newspaper /> Piste</div>
                <div className='text-justify'>
                Credibly visualize front-end supply chains via plug-and-play e-services. Distinctively conceptualize vertical deliverables before market-driven convergence. Assertively maximize magnetic human capital without proactive supply chains. Monotonectally whiteboard equity invested e-commerce vis-a-vis accurate niches. Seamlessly create parallel niches vis-a-vis highly efficient channels. Credibly pursue stand-alone innovation with corporate innovation. Proactively unleash multifunctional paradigms and.
                </div>
            </div>
            <div className='border-b-0 mb-3'>
                <div className='font-bold text-2xl mb-4 border-b-1 py-2 flex gap-3 items-center'><Newspaper /> Description</div>
                <div className='text-justify'>
                Credibly visualize front-end supply chains via plug-and-play e-services. Distinctively conceptualize vertical deliverables before market-driven convergence. Assertively maximize magnetic human capital without proactive supply chains. Monotonectally whiteboard equity invested e-commerce vis-a-vis accurate niches. Seamlessly create parallel niches vis-a-vis highly efficient channels. Credibly pursue stand-alone innovation with corporate innovation. Proactively unleash multifunctional paradigms and.
                </div>
            </div>
            <div className='border-b-0 mb-3'>
                <div className='font-bold text-2xl mb-4 border-b-1 py-2 flex gap-3 items-center'><Map />Géolocalisation</div>
                <div className='text-justify h-[300px]'>
                    {/* Credibly visualize front-end supply chains via plug-and-play e-services. Distinctively conceptualize vertical deliverables before market-driven convergence. Assertively maximize magnetic human capital without proactive supply chains. Monotonectally whiteboard equity invested e-commerce vis-a-vis accurate niches. Seamlessly create parallel niches vis-a-vis highly efficient channels. Credibly pursue stand-alone innovation with corporate innovation. Proactively unleash multifunctional paradigms and. */}
                </div>
            </div>
            <div className='border-b-0 mb-3'>
                <div className='font-bold text-2xl mb-4 border-b-1 py-2 flex gap-3 items-center'><Library /> Historique</div>
                <div className='text-justify'>
                Credibly visualize front-end supply chains via plug-and-play e-services. Distinctively conceptualize vertical deliverables before market-driven convergence. Assertively maximize magnetic human capital without proactive supply chains. Monotonectally whiteboard equity invested e-commerce vis-a-vis accurate niches. Seamlessly create parallel niches vis-a-vis highly efficient channels. Credibly pursue stand-alone innovation with corporate innovation. Proactively unleash multifunctional paradigms and.
                </div>
            </div>
        </div>
   </Container>
  )
}

export default page