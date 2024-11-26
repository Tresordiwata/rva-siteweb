import React from 'react'
import { paddingContent } from '../CONST/global'

const Section = ({children,padding,bg,style,cls, titre,titreCls,titreIcone}) => {
  return (
    <div style={style} className={`${padding && paddingContent} ${bg && bg} ${cls} py-4` }>
        {
          titre && (<div className={`${titreCls} flex gap-3 pl-4`}>{titreIcone && titreIcone} {titre}</div>)
        }
        {children}
    </div>
  )
}

export default Section