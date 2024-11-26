import React from 'react'
import Container from '../layout/Container'
import Section from '../layout/Section'
import { ArrowBigRight, CheckCircle2, ChevronsRight, Dot } from 'lucide-react'
import Titre from "./../layout/Titre"


const page = () => {
  return (
    <Container cls="" headerBgImg={"/tourcontrol.jpeg"} header={<div className='flex flex-row items-center justify-center w-full'><div className='flex items-center gap-4 px-11 bg-blue-400 content-center text-3xl rounded-full py-2 bg-opacity-30 w-fit'><ChevronsRight size={40} />Notre mission</div></div>}>
       <Section padding={"250px"} cls={"flex flex-col gap-5"}>
            
            <p className='text-center font-bold mb-7 text-blue-900'>La mission fondamentale de la Régie des voies aériennes est de gérer l'ensemble du patrimoine du pays relevant de sa compétence en vue d'assure la sécurité de la navigation aérienne selon les normes de l'organisation de l'aviation civile internationale (OACI)</p>
            <div className='flex items-center justify-center'>
              <Titre text="Les missions Confiées à la RVA sont :" />
            </div>
            <div className='grid-cols-3 grid gap-8'>
                {/* <div className='flex flex-col gap-5 w-1/2 italic'> */}
                    <div className=' items-center flex gap-4'><span className='text-2xl bg-slate-100 rounded-full py-2 px-5 text-blue-400'>1</span> Construire, aménager, entretenir et exploiter les aéroports et leurs dépendances;</div>
                    <div className=' items-center flex gap-4'><span className='text-2xl bg-slate-100 rounded-full py-2 px-5 text-blue-400'>2</span> Assurer la sécurité de la navigation aérienne;</div>
                
                    <div className=' items-center flex gap-4'><span className='text-2xl bg-slate-100 rounded-full py-2 px-5 text-blue-400'>3</span> Percevoir pour son compte les taxes et redevances instituées par le gouvernement sur les aéroports et leurs dépendances, (aérogares ,bâtiments , hangars);</div>
                    <div className=' items-center flex gap-4'><span className='text-2xl bg-slate-100 rounded-full py-2 px-5 text-blue-400'>4</span> Participer , avec les autorités compétentes, à l'elaboration des plans de formation et de perfectionnement du personnel de l'aéronautique civile. </div>
                    <div className=' items-center flex gap-4'><span className='text-2xl bg-slate-100 rounded-full py-2 px-5 text-blue-400'>5</span> Grâce à son appareillage, ses télécommunications et les systèmes d'aide à la navigation aérienne dont elle dispose , elle assure le guidage des avions , au décollage , Ã l'atterrissage et dans le ciel.</div>
                {/* </div> */}
            </div>
            <p className='text-justify mt-20'>
            Ces missions englobent l'ingénierie aéroportuaire , le contrôle de la circulation aérienne , la gestion de l'espace aérien du pays , la gestion des informations en vol et d'alerte , les recherches et sauvetages en cas d'accidents d'avion la lutte contre l'incendie , les técommunications et la météorologie aéronautiques , ainsi que le balisage des routes aériennes et des pistes d'aviation. Ces missions comprennent en outre la formation aéronautique. 
            </p>
       </Section>
    </Container>
  )
}

export default page