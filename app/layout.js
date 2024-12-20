import { Inter,Michroma,Lora,Pinyon_Script,Poiret_One,Poppins,Nunito } from 'next/font/google'
import './globals.css'
import MainLayout from './layout/MainLayout'

const inter = Inter({ subsets: ['latin'] })

const lora = Lora({ subsets: ['latin'] })
const poiret = Poiret_One({ subsets: ['latin'],weight:'400' })
const pignon = Pinyon_Script({ subsets: ['latin'],weight:'400' })
const michroma = Michroma({ subsets: ['latin'],weight:'400' })
const poppins = Poppins({ subsets: ['latin'],weight:'400' })
const nunito = Nunito({ subsets: ['latin'],weight:'400' })

export const metadata = {
  title: 'RVA::Régie des Voies Aèriennes',
  description: 'Siteweb officiel de la Regie des Voies Aeriennes'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={nunito.className}>
      <MainLayout children={children} />
      {/* <div>{children}</div> */}
      </body>
    </html>
  )
}
