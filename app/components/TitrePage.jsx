import React from 'react'

const TitrePage = ({t, cls}) => {
  return (
    <div className={`${cls} font-bold text-3xl mb-4`}>{t}</div>
  )
}

export default TitrePage