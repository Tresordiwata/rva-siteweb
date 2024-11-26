import { ArrowRight } from 'lucide-react'
import React from 'react'

const Titre = ({text,icon, cls}) => {
  return (
    <div className={`${cls || null} bg-[#F31260] text-white flex flex-row gap-3 px-4 py-2 rounded-full text-lg min-w-64 w-fit items-center text-center justify-center`}>
        {icon ?? <ArrowRight strokeWidth={1} />}
        {text}
    </div>
  )
}

export default Titre