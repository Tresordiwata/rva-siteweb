import React from 'react'
import { Button, Image } from '@nextui-org/react'
import { Fade } from 'react-awesome-reveal'
import { Code, Filter, FolderOpen, MapIcon, MapPin, PhoneCall, PinIcon, TowerControlIcon } from 'lucide-react'
import Link from 'next/link'

const Card = ({ id, nom, img, bg, localisation, categorie, codeOaci, children }) => {
  return (
    <>

    <div className={`w-full lg:w-[400px]  flex flex-col h-fit shadow-sm rounded-lg overflow-hidden bg-opacity-30 bg-[url("/4.png")]`}>
        <div>
            <div className='w-full overflow-hidden font-semibold text-lg text-white bg-blue-800 px-5 py-4 flex gap-3'>
                {/* <img width={50} height={50} src={"https://static.vecteezy.com/ti/vecteur-libre/p1/4595816-aeroport-batiment-de-nuit-concept-in-flat-cartoon-illustration-vector-vectoriel.jpg"}  /> */}
                <TowerControlIcon strokeWidth={1} size={30} />
                {nom}
            </div>
        </div>
        <div className='w-full h-fit'> <Image  fallbackSrc={"https://img.freepik.com/photos-premium/interieur-aeroport-fenetre-coucher-soleil-avion-arriere-plan_31965-142614.jpg"} isZoomed src={img} radius='none' className='w-[400px] h-[250px]  shadow-md' /></div>
        <div className='flex-col gap-4 flex w-full  bg-white'>

            <div className='px-4 py-3 flex flex-col gap-4'>
                <p className='flex gap-4 items-center '><MapPin color='orange'  /> Ville:<span className='font-bold bg-slate-200 px-3 py-2 rounded-md text-blue-400'>{localisation}</span></p>
                <p className='flex gap-4'><Filter color='orange'  /> Categorie : {categorie}</p>
                <p className='flex gap-4'><Code color='orange'  /> Code : {codeOaci}</p>
                <div className='flex items-center gap-5 justify-center border-t pt-3'>
                    <Link href={`/aeroports/detail/${id}`}>
                        <Button radius="full" variant='ghost' color='primary'  startContent={<FolderOpen size={20} strokeWidth={1} />}>Consulter</Button>
                    </Link>
                    <Button radius="full" variant='ghost' color='primary'  startContent={<PhoneCall size={20} strokeWidth={1} />}>Contact</Button>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default Card