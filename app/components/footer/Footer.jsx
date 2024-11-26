// import Image from 'next/image'
// import Section from './../../layout/Section'
// import React from 'react'
// import { BACKEND_URL, SITEWEB_URL } from './../../fcts/helper'
// import { FacebookIcon, Mail, MapPinIcon, TwitterIcon } from 'lucide-react'
// import { MessageFilled } from '@ant-design/icons'
// import { Input } from '@nextui-org/react'


// const Footer = () => {
//   return (
//     <div className='bg-cover bg-no-repeat bg-center bg-opacity-0 bg-gray-600 relative' style={{backgroundImage:"url('https://images.unsplash.com/photo-1548800687-96dc03940478?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFpcnBsYW5lfGVufDB8fDB8fHww')"}}>

//       <Section padding={true} bg={"bg-blue-800"}>
//         <div className='grid grid-cols-4 justify-center min-h-36 text-white gap-9'>
//           <div className='flex flex-col'>
//               <Image src={SITEWEB_URL+"logoRva.png"} width={300} height={300} />
//               <p className='text-center text-white mt-3 font-thin'>
//                 Régie des voies Aeriennes SA
//               </p>
//               <p className='text-center text-white font-light'>
//                 Retrouvez-nous sur :
//               </p>
//               <p className='flex justify-center items-center gap-4 mt-6'>
//                 <div className='border rounded-lg px-2 py-1 w-fit'><FacebookIcon size={14} color='white' /></div>
//                 <div className='border rounded-lg px-2 py-1 w-fit'><TwitterIcon size={14} color='white' /></div>
//               </p>
//           </div>
//           <div>
//             <h2 className='text-center font-thin'>
//               <p className=''>Contact</p><hr />
//               <p className='flex flex-col gap-3 pt-8'>
//                   <div className='flex justify-center gap-2 items-center'><MapPinIcon size={10} />  Adresse :</div>
//                   <div>
//                       Avenue des Aerodromes Nº548 Quartier Bon-Marché, Commune de Barumbu 
//                     <br />Kinshasa-RDC
//                     <br />BP : 6574
//                   </div>
//               </p>
//             </h2>
//             <p>

//             </p>
//           </div>
//           <div className='text-center font-thin'>
//             <h2>Nos Liens</h2> <hr />
//             <p>

//             </p>
//           </div>
//           <div className='text-center font-thin'>
//             <p>Newsletters</p><hr />

//             <p className='pt-8 mt-4'>
//               <Input startContent={<Mail color='black' />}  label="Votre e-mail" labelPlacement='inside' />
//             </p>
//           </div>
//         </div>
//         <hr className='border-gray-400 my-3' />
//         <div>
//           <p className='text-gray-400 text-center justify-center flex text-sm'>
//             © 2024 - Tous droits reservé. Régie des Voies Aeriennes
//           </p>
//         </div>
//       </Section>
//     </div>
//   )
// }

// export default Footer




import React, { useEffect, useState } from 'react'
import Image from "next/image"
import logoRva from "./../../assets/logoRva.png"
import styles from './footer.module.css'
import { bgPrimary, bgSecondary, colorSecondary } from './../../style/global'
import { bgSecondaryColor } from '../../style/global';
import { MapPinIcon } from 'lucide-react'
import { SITEWEB_URL, postData } from './../../fcts/helper'
import { ArrowUpOutlined } from '@ant-design/icons'
import { Spin, message } from 'antd'

const soulignement = "w-[70px] h-[3px] bg-blue-300 mb-10";
const titre = `text-[${bgSecondary}]`;


const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [spinningNewsletter,setSpinningNewsletter]=useState(false)
  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js
  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const handleScroll = () => {

    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const handleSubmitNewsletter=(e) => {
    e.preventDefault();
    setSpinningNewsletter(true);
    let data=Object.fromEntries(new FormData(e.target));
    postData("addEmailnewsletter",data).then(r=>{
      if(r.success){
        message.success("Votre inscription s'est bien faite");
        document.getElementById("formulaire").reset();
      }else{
        message.error("Echec d'enregistrement");
      }
    }).finally(()=>{
      setSpinningNewsletter(false)
    })
  }
  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="pt-10 w-full overflow-x-hidden border-t-1 bg-slate-600" style={{backgroundColor:bgPrimary}}>
      <div className=' flex flex-col md:flex-col lg:flex-row justify-between px-10 md:px-60 lg:px-60 gap-10 '>
        <div className="border-l-2 border-white text-white pl-2 md:pl-6 lg-pl-6">
          <h2 className="text-xl md:text-3xl lg:text-3xl">Lettre d'information</h2>
          <p className="text-sm">Restez informé de toutes nos activités, inscrivez-vous maintenant</p>
        </div>
        <div>
          <Spin spinning={spinningNewsletter}>
          <form id="formulaire" onSubmit={handleSubmitNewsletter}>
          <div className="border flex flex-row rounded-tl-lg rounded-br-lg flex-wrap overflow-hidden" style={{ borderColor: bgSecondary }}>
            <input required={true} type="email" name='email' className={`w-[120px] md:w-[120px] lg:w-[300px] outline-none flex-1 text-sm pl-4 ${colorSecondary}`} placeholder="Votre adresse Email" />
            <button type='submit' className={`${bgSecondaryColor} h-[40px] text-white px-2`}>S'INSCRIRE</button>
          </div>
          </form>
          </Spin>
        </div>
      </div>
      <div className="pt-5">
        <div className="flex h-[7px] px-[0px]">
          <div className="w-full bg-blue-500">&nbsp;</div>
          <div className="w-full bg-yellow-500">&nbsp;</div>
          <div className="w-full bg-red-500">&nbsp;</div>
        </div>
        <div className="px-4 md:px-4 lg:px-0 grid grid-cols-2 grid- lg:flex lg:flex-row  min-h-[320px] bg-accent-foreground bg-blue-700" style={{  backdropFilter: "revert-layer", backgroundImage: `url(${SITEWEB_URL + "fond.png"})`, backgroundPosition: "left center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
          <div className="w-1/2 lg:w-1/5 xs:w-5/5 flex flex-col gap-4 text-center justify-center items-center">
            <Image src={logoRva} width={200} height={80} alt='' />
            <p className="text-center text-white">
              Regie des Voies Ariennes <br />
              SA
            </p>
          </div>
          <div className={styles.colone + " w-full lg:w-1/5 xs:5/5"}>
            <h1 className={titre} style={{ color: bgSecondary, fontSize: 18, fontWeight: "bold" }}>A Propos de nous</h1>
            <div className={soulignement} style={{ backgroundColor: bgSecondary }}>&nbsp;</div>
            <div className="mt-5">
              <div><a href="#">- Qui sommes-nous</a></div>
              <div><a href="#">- Nos services</a></div>
              <div><a href="#">- Nous contacter</a></div>
              <div><a href="#">- General Management</a></div>
            </div>
          </div>
          <div className={styles.colone + " w-full lg:w-1/5 xs:5/5"}>
            <h1 className={titre} style={{ color: bgSecondary, fontSize: 18, fontWeight: "bold" }}>Nos Aeroports</h1>
            <div className={soulignement} style={{ backgroundColor: bgSecondary }}>&nbsp;</div>
            <div className="mt-5">
              <div><a href="#">- Kinshasa</a></div>
              <div><a href="#">- Lubumbashi</a></div>
              <div><a href="#">- Goma</a></div>
              <div><a href="#">- Kisangani</a></div>
            </div>
          </div>
          <div className={styles.colone + "  w-full lg:w-1/5 xs:5/5"}>
            <h1 className={titre} style={{ color: bgSecondary, fontSize: 18, fontWeight: "bold" }}>Liens utiles</h1>
            <div className={soulignement} style={{ backgroundColor: bgSecondary }}>&nbsp;</div>
            <div className="mt-5">
              <div><a href="#">- Http://oaci.org</a></div>
              <div className='flex-wrap'><a className="flex-wrap" href="#">- Http://ministeretransport.gouv.cd</a></div>
            </div>
          </div>
          <div className={styles.colone + " w-full  lg:w-1/5 xs:5/5"}>
            <h1 className={titre} style={{ color: bgSecondary, fontSize: 18, fontWeight: "bold" }}>Nos contacts</h1>
            <div className={soulignement} style={{ backgroundColor: bgSecondary }}>&nbsp;</div>
            <div className="mt-5">
              <p className='flex flex-col gap-3'>
                <div className='flex gap-2 items-center'>
                  <MapPinIcon size={10} />  Adresse :</div>
                <div>
                  Avenue des Aerodromes Nº548 Quartier Bon-Marché, Commune de Barumbu
                  <br />Kinshasa-RDC
                  <br />BP : 6574
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-900 text-sm text-center text-white border-t-0 py-3 border-white">copyright © 2023 Régie des Voies Aeriennes | Mentions légales</div>
      <button
        className={`fixed bottom-0 right-0 bg-white shadow-md rounded-full p-4 mr-6 mb-[41px] z-50 items-center text-xs flex gap-2`}
        onClick={scrollToTop}
      >
        {/* BACK TO TOP */}
        <ArrowUpOutlined color='white' />
      </button>
    </div>
  )
}

export default Footer