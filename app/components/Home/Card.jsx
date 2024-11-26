import React from 'react'
import Section from '../../layout/Section'
import { Fade,Roll,Reveal } from 'react-awesome-reveal'

const Card = ({ children, icon, titre }) => {
    return (
        <Reveal damping={30} duration={500}>
            <div className='bg-indigo-500 text-white border shadow-sm rounded-md h-[300px] w-[300px] flex flex-col p-3'>
                <div className='flex flex-row gap-3 mb-4 border-b items-center pb-3'>
                    <div className='justify-start items-start flex'>{icon && icon} </div>
                    <div className='text-center mb-4 font-bold text-xl'>{titre}</div>
                </div>
                <div className='text-gray-300 h-full flex flex-col justify-between'>{children}</div>
            </div>
        </Reveal>
    )
}

export default Card