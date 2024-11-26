import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css';
import 'swiper/css/scrollbar';
import { useSwiper } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper/modules';
import { textColor } from '../CONST/global';
import { CheckCircle } from 'lucide-react';
import { Button } from '@nextui-org/react';
import { SITEWEB_URL } from '../fcts/helper';
import slide1 from './../assets/slide1.jpeg'
import Image from "next/image"

const Slide = () => {
    const swiper = useSwiper();
    return (
        // <div>
        //     <Swiper
        //         spaceBetween={20}
        //         slidesPerView={1}
        //         onSlideChange={() => console.log('slide change')}
        //         onSwiper={(swiper) => console.log(swiper)}
        //         autoplay={{
        //             delay: 4500,
        //             disableOnInteraction: false,
        //         }}
        //         pagination={{
        //             clickable: false,
        //         }}
        //         navigation={true}
        //         modules={[Autoplay, Pagination, Navigation]}
        //     >

        //         <SwiperSlide>
        //             <div className="px-0.5 py-1">
        //                 <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2bRqvi-lrx-Z2NFFKiaOJtkjXfhhJL1m0R18E10bU_1TYaT0G6F8XuZftWa7aMaOi35c&usqp=CAU' />
        //             </div>
        //         </SwiperSlide>
        //         <SwiperSlide>
        //             <div className="px-0.5 py-1">
        //                 <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzhk5Z701yD5owTARK8LpqlRur2CxbJ5DNwQ&usqp=CAU' />
        //             </div>
        //         </SwiperSlide>
        //         <SwiperSlide>
        //             <div className="px-0.5 py-1">
        //                 <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2bRqvi-lrx-Z2NFFKiaOJtkjXfhhJL1m0R18E10bU_1TYaT0G6F8XuZftWa7aMaOi35c&usqp=CAU' />
        //             </div>
        //         </SwiperSlide>

        //     </Swiper>
        // </div>
        <div className='w-full px-2 mt-[50px]'>
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                autoplay={{

                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
            >
                <SwiperSlide>
                    <div className={`flex-1 flex justify-between items-start gap-10 px-11`} >
                        <div className={`${textColor}`}>
                            <div className='flex-1 text-2xl flex flex-col gap-4' >
                                <p className='text-5xl fade-in-5 mb-7'>
                                    <h1 className='font-semibold mb-4 '>Bienvenue à la R.V.A</h1>
                                    <h1>Regie des Voies Aeriennes</h1>
                                </p>
                                {/* <hr /> */}
                                <p className='flex gap-3 font-thin fade-in-10'>
                                    <CheckCircle />
                                    Bienvenue à la RVA-RDC. Nous sommes heureux de vous compter parmi ceux qui nous font confiance
                                </p>
                                <p className='flex gap-3 font-thin fade-in-15'>
                                    <CheckCircle />
                                    Nous securisons l'espace aerien de la République Démocratique du Congo
                                </p>
                                <p className='flex gap-3 font-thin fade-in-100'>
                                    <CheckCircle />
                                    Voyager avec plus de sécurité
                                </p>
                            </div>
                            <div className='pt-4 flex justify-center'>
                                <Button color='danger' className='rounded-full py-2'>Découvrez qui-sommes nous?</Button>
                            </div>
                        </div>
                        <div className=''>
                            <img className='rounded-lg h-full' src={"https://gdb.voanews.com/8356576A-272F-4A32-9FF1-AE55379740D8_cx0_cy10_cw0_w1023_r1_s.jpg"} />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`flex-1 flex justify-between items-start gap-10 px-11`} >
                        <div className={`${textColor}`}>
                            <div className='flex-1 text-2xl flex flex-col gap-4 text-center' >
                                <p className='text-5xl fade-in-5 mb-7 '>
                                    <h1 className='font-semibold mb-4 '>Nouvelle équipe à la tête de la RVA</h1>
                                </p>
                                <p className='flex gap-3 font-thin fade-in-10'>

                                    Un nouveau vent souffle à la RVA, apres installation de  la nouvelle équipe constitué d'un nouveau DG et DGA avecleurs cabinets respectifs
                                </p>
                                <p className='justify-center flex'>
                                    <img className='w-[350px] h-[100px]' src={SITEWEB_URL+"logoRva.png"} />
                                </p>
                            </div>
                            <div className='pt-4 flex justify-center'>
                                <Button color='danger' className='rounded-full py-2'>Lire l'article</Button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div className={`flex-1 w-full flex justify-between items-start gap-10 px-11`} >
                        <Image src="/../assets/slide1.jpeg" fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
 />
                    </div>
                </SwiperSlide> */}
                <SwiperSlide>
                <div className={`flex-1 flex justify-between items-start gap-10 px-11`} >
                        <div className={`${textColor}`}>
                            <div className='flex-1 text-2xl flex flex-col gap-4 text-center' >
                                <p className='text-5xl fade-in-5 mb-7 '>
                                    <h1 className='font-semibold mb-4 '>Un aéroport tout neuf pour à Mbuji-mayi</h1>
                                </p>
                                <p className='grid grid-cols-3 gap-3 font-thin fade-in-10'>
                                    <img className='rounded-md h-[250px] w-full' src='https://media.istockphoto.com/id/1477997501/photo/airport-waiting-area-with-luggages-empty-seats-and-blurred-background.webp?b=1&s=170667a&w=0&k=20&c=Ka3XsWc6hzQXho0pfG1lrpexm92cAc1Sm7lYDF7Grb0=' />
                                    <img className='rounded-md h-[250px] w-full' src='https://media.istockphoto.com/id/1316256415/photo/top-view-of-airplane-at-airport-terminal-in-3d.webp?b=1&s=170667a&w=0&k=20&c=-8Z0BGegqRg9gH03X4za3rJi60tS6RTITyRR6TMx9LM=' />
                                    <img className='rounded-md h-[250px] w-full' src='https://media.istockphoto.com/id/1477997501/photo/airport-waiting-area-with-luggages-empty-seats-and-blurred-background.webp?b=1&s=170667a&w=0&k=20&c=Ka3XsWc6hzQXho0pfG1lrpexm92cAc1Sm7lYDF7Grb0=' />
                                </p>
                            </div>
                            <div className='pt-4 flex justify-center'>
                                <Button color='danger' className='rounded-full py-2'>Lire l'article</Button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slide