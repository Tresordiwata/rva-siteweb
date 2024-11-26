import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Avatar, Button, Divider } from '@nextui-org/react'
import { BACKEND_URL } from '../fcts/helper';
import Link from 'next/link';
import { CalendarDays } from 'lucide-react';
import moment from 'moment';

const Actu = ({titre,description, dt, img,lien,showDate }) => {
    const imgDistant = BACKEND_URL + img;
  return (
    <Fade duration={2000}>
      <div className=''>
        <div
          style={{
            width: "100%",
          }}
          // className={`flex gap-4 hover:shadow-md p-3 rounded-sm bg-[url("${img ? img : imgDistant}")]`}
          className={`w-[300px] h-[480px] bg-white rounded-md overflow-hidden hover:shadow-sm hover:bg-gray-50`
          }
        >
          <img src={imgDistant} className='w-full max-h-[200px]' style={{ filter: "brightness(100%) contrast(100%) saturate(100%) blur(0px) hue-rotate(0deg)" }} />
          <div className='text-start mb-16 text-gray-800 px-4 py-2 flex flex-col justify-between'>
            <div className='text-blue-900 font-extrabold text-[19px] mb-4 line-clamp-1 text-center'>{titre}</div>
            <div className='w-full text-justify  flex flex-col'>
                {
                    showDate? <div className='text-center text-sm italic flex gap-3 justify-center items-center mb-3 bg-slate-50 rounded-full py-2'><CalendarDays size={14} />Publié le : {moment(dt).format('DD/MM/YYYY HH:mm')}</div>:null
                }
                <div className='line-clamp-4'>{description}</div>
              {/* <div className='flex w-[100%] justify-end'>
              <div className='text-[11px] font-semibold text-black py-4'>Publié le {dt}</div>
            </div> */}
              {/* <div className='flex w-[100%] justify-center'>
                <a className='bg-blue-800 text-white rounded-full px-3 py-1 flex justify-center items-center gap-3' href="https://">
                  <Link size={14} /> Lire article
                </a>
              </div> */}

            </div>
            <div className='flex-1 mt-4 items-center justify-center w-full text-center'>
              <Link href={lien ?? "#"}>
                <Button color='warning' size='sm' variant='solid' radius='full' className='text-white hover:border-1 hover:shadow-sm box-border'>Detail article</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default Actu