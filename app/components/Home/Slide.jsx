import { ButtonGroup,Button } from '@nextui-org/react'
import { Button as ButtonAnt } from 'antd'
import React from 'react'

const Slide = ({lieu,titre, lien,stitre,img}) => {
  return (
    <div className='flex flex-col justify-center items-center h-[400px] bg-cover  bg-center bg-[url("/avionvol.jpg")]' style={{backgroundColor: "rgba(255, 255, 255, 0.3)",backgroundColor: "white"}}>
        <p className='text-red-600 font-bold text-xl'>{lieu}</p>
        <p className='text-center flex items-center justify-center text-[50px] font-bold text-white z-10'>{titre}</p>
        <p>{stitre}</p>
        <div className='mt-8'>
            <Button color='primary' className='rounded-none rounded-tl-md rounded-br-md' size='lg'>En savoir plus</Button>
        </div>
    </div>
  )
}

export default Slide