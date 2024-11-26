"use client"
import React from 'react';
import { Image } from '@nextui-org/react';
import { redirect, useRouter } from 'next/navigation';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LaptopOutlined,
  NotificationOutlined,
  SettingOutlined,
  MailOutlined,
  SearchOutlined,
  HomeOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { SITEWEB_URL } from '../../fcts/helper';
import Link from 'next/link';
import { TowerControl,Newspaper,Home,Megaphone,Settings,Mails,CalendarRange } from 'lucide-react';
const { Header, Content, Footer, Sider } = Layout;

const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
  LaptopOutlined,
  Settings,
  Mails,
  SearchOutlined,
  Home,
  TowerControl,
  Newspaper,
  Megaphone,
  CalendarRange 
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const items2 = [
  {
    "menu": "Home",
    "icon": Home,
    "key": "accueil",
    "smenu": [
      { "label": "Tableau de Bord", "lien": "/" },
    ]
  },
  {
    "menu": "Aeroports",
    "icon": TowerControl,
    "key": "aeroport",
    "smenu": [
      { 
        "label": "Nouveau", 
        "lien": "/aeroport/" 
      },
      { 
        "label": "Tous les aeroports", 
        "lien": "/aeroport/liste" 
      }
    ]
  },
  {
    "menu": "Actualités",
    "icon": Newspaper,
    "key": "actualite",
    "smenu": [
      { "label": "Recherche par mot clé", "lien": "/recherche/motcle" }
    ]
  },
  {
    "menu": "Offres",
    "icon": Megaphone,
    "key": "rapport",
    "smenu": [
      { "label": "Visites par villes", "lien": "/statistique/statistiqueparville" },
      { "label": "Recherche", "lien": "/statistique/recherche" },
    ]
  },
  {
    "menu": "Evénements", 
    "icon": CalendarRange, 
    "key": "ressources",
    "smenu": [
      { "label": "Nouveau", "lien": "/evenement/nouveau" },
      { "label": "Liste", "lien": "/evenement/liste" },
    ]
  },
  {
    "menu": "Messages", 
    "icon": Mails, 
    "key": "messages",
    "smenu": [
      { "label": "Nouveau à tous", "lien": "/message/to_all" },
      { "label": "Boite d'envois", "lien": "/message/envoye" },
      { "label": "Boite de reception", "lien": "/message/reception" },
      { "label": "Archives", "lien": "/message/#" }
    ]
  },
  {
    "menu": "Paramètres", 
    "icon": Settings, 
    "key": "parametres",
    "smenu": [
      // {"label":"Gestion secteur","lien":"/parametre/secteur"},
      { "label": "Utilisateurs", "lien": "/parametre/utilisateur" },
      { "label": "Gestion localisation", "lien": "/parametre/localisation" },
      { "label": "Gestion type Aeroports", "lien": "/parametre/localisation" },
      { "label": "Gestion compagnies", "lien": "/parametre/localisation" },
      { "label": "Gestion aeronefs", "lien": "/parametre/localisation" },
    ]
  }
]
  .map((icon, index) => {
    const key = String(index + 1);
    return {
      key: `${icon.key}`,
      icon: React.createElement(icon.icon),
      label: `${icon.menu}`,
      children: icon.smenu.map((smenu, j) => {
        const subKey = smenu.lien;
        return {
          key: subKey,
          label: `${smenu.label}`,
        };
      }),
    };
  });
const LayoutSidebar = () => {
  const router = useRouter();
  const _red = () => {
    router.push('/dashboard/');
  }
  return (
    <div className=''>
      
      <Sider
        style={{

          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
        className="min-h-screen"
      >
        <div className='flex justify-center items-center w-[310px] h-32 bg-cover bg-gradient-to-tr' 
          // style={
          //   {backgroundImage:
          //     `url("${SITEWEB_URL}rva-fond-blue-etoile.png")`, backgroundSize:"cover", backgroundRepeat: "no-repeat"
          //   }
          // }
        >
          <Link href={"/"}>
          <img src={`${SITEWEB_URL}rva-fond-blue-etoile.png`} className='self-center bg-center' />
          {/* <img width={190} height={90} className='p-2 rounded-md ' src={SITEWEB_URL+"logo_sans_fond.png"} /> */}
          </Link>
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{
            height: '100%',
            borderRight: 0,
            width: "310px",
            marginTop: '50px'
          }}
          iconSize={40}
          items={items2}
          className="pt-[40px]"
          onClick={(e) => {
            router.push(`${e.key}`);
            // _red();
            // console.log("ok")
          }}
        />
      </Sider>
    </div>
  )
}

export default LayoutSidebar