import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { Divider } from 'antd';
import { Slide } from 'react-awesome-reveal';

const Motdg = () => {
    return (
        <div>
            <h1 className=' mb-5'>
                <Divider className='border-white '> <span className='text-white text-2xl font-bold'>Mot du Directeur Général</span></Divider>
            </h1>
            <div className='flex gap-5 items-center'>
                <div className='w-1/2'>
                    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">

                        <Image
                            removeWrapper
                            alt="Relaxing app background"
                            className="z-0 w-full h-full object-contain bg-slate-100"
                            src="https://afridesk.org/wp-content/uploads/2021/07/EA95133C-AD7A-45DB-923A-004FDA75871F-Afridesk-683x1024.jpeg"
                        />

                        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">

                            <div className="flex flex-grow gap-2 items-center">
                                <Image
                                    alt="Breathing app icon"
                                    className="rounded-full w-10 h-11 bg-black"
                                    src=""
                                />
                                <div className="flex flex-col">
                                    <p className="text-tiny text-white/60">Alphonse SHUNGU MAHUNGU</p>
                                    <p className="text-tiny text-white/60">Directeur General</p>
                                </div>
                            </div>
                            <Button radius="full" size="sm">Biographie</Button>
                        </CardFooter>
                    </Card>
                </div>
                <div className='text-white w-1/2 text-justify text-medium'>
                    <p>
                        Je tiens à redorer l’image de l’entreprise ternie depuis près de deux décennies. Je me donne la mission de promouvoir un système de transport aérien efficient et moderne appelé à devenir un vecteur de développement socioéconomique de la RDC sur les plans de transport/logistique domestique interne, régional et international. L’objectif à terme est de parvenir à la résilience du système de sécurité aérienne et à la levée des différentes mesures de bannissement qui frappent la RDC du fait de la non-conformité du système de supervision de la sûreté et la sécurité aériennes aux normes internationales minimales de sécurité. »
                    </p><br />
                    {/* <p>
                        Je serai très exigeant vis-à-vis de moi-même et de tous mes collaborateurs avec lesquels je serai en contacts réguliers sur le terrain. Je serai également très rigoureux dans toutes mes prises de décision et choix stratégiques pour atteindre les objectifs précités »
                    </p> */}
                </div>
            </div>
        </div>
    )
}

export default Motdg