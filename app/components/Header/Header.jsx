// import React from 'react';
// import * as NavigationMenu from '@radix-ui/react-navigation-menu';
// import classNames from 'classnames';

// import './styles.css';
// import Image from 'next/image';
// import { SITEWEB_URL } from './../../fcts/helper';
// import { CaretDownFilled, GlobalOutlined } from '@ant-design/icons';
// import { Divider } from 'antd';
// import { ChevronRightIcon, Facebook, Globe2Icon, MailCheckIcon, Navigation, PhoneCall, TwitterIcon, X } from 'lucide-react';
// import * as Select from '@radix-ui/react-select';
// import { greatvibes, inter, lora, pignon, nunito, poppins, michroma, sourceCodePro400, sourceCodePro700 } from "./../../style/fonts"


// import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
// import Link from 'next/link';

// const Header = () => {
//   return (
//     <div className="">
//       <div className='border-b border-slate-400 mb-4 flex justify-between py-3'>
//         <div className='flex gap-3 items-center justify-center pr-3'>
//           <GlobalOutlined className='text-white' />
//           <div className=' border-r-1 border-slate-400 bg-transparent'>
//             <Select.Root>
//               <Select.Trigger className="SelectTrigger" aria-label="Food">
//                 <Select.Value placeholder="Francais" />
//                 <Select.Icon className="SelectIcon">
//                   <ChevronDownIcon />
//                 </Select.Icon>
//               </Select.Trigger>
//               <Select.Portal>
//                 <Select.Content className="SelectContent">
//                   <Select.ScrollUpButton className="SelectScrollButton">
//                     <ChevronUpIcon />
//                   </Select.ScrollUpButton>
//                   <Select.Viewport className="SelectViewport">
//                     <Select.Group>
//                       <Select.Label className="SelectLabel">Langue</Select.Label>
//                       <SelectItem value="fr">Francais</SelectItem>
//                       <SelectItem value="en">English</SelectItem>

//                     </Select.Group>


//                   </Select.Viewport>
//                   <Select.ScrollDownButton className="SelectScrollButton">
//                     <ChevronDownIcon />
//                   </Select.ScrollDownButton>
//                 </Select.Content>
//               </Select.Portal>
//             </Select.Root>
//           </div>
//           <div className='flex gap-2'>
//             <Facebook size={16} fill='white' color='white' />
//             <TwitterIcon size={16} fill='white' color='white' />

//           </div>
//         </div>
//         <div className='text-white text-3xl font-bold' >
//           <span className={sourceCodePro700.className}>Régie des Voies Aèriennes</span>
//         </div>
//         <div className='flex'>
//           <div className='text-sm text-white flex gap-2 border-r px-3 items-center justify-center'>
//             <PhoneCall size={16} fill='white' color='white' />
//             +243 99 236 6766
//           </div>
//           <div className='text-sm text-white flex gap-2 border-r-0 px-3 items-center justify-center'>
//             <MailCheckIcon size={16} color='white' />
//             info@rva.cd
//           </div>
//         </div>
//       </div>

//       <div className='flex justify-between items-end border-b-0 border-slate-400'>
//         <div>
//           <Link href="/"><Image src={SITEWEB_URL + "logoRva.png"} width={260} height={230} className='border-r-0' /></Link>
//         </div>
//         <NavigationMenu.Root className="NavigationMenuRoot">
//           <NavigationMenu.List className="NavigationMenuList">
//             <NavigationMenu.Item>
//               <NavigationMenu.Trigger className="NavigationMenuTrigger">
//                 A Propos

//               </NavigationMenu.Trigger>
//               <NavigationMenu.Content className="NavigationMenuContent">
//                 <ul className="List one">
//                   <li style={{ gridRow: 'span 4' }}>
//                     <NavigationMenu.Link asChild>
//                       <a className="Callout" href="/">
//                         <img src={"/logoRva.png"} className='w-[200px] ' />
//                       </a>
//                     </NavigationMenu.Link>
//                   </li>
//                   <ListItem href="/apropos" title="">
//                     Qui sommes-nous ?
//                   </ListItem>
//                   <ListItem href="/mission" title="">
//                     Mission de la RVA
//                   </ListItem>
//                   <ListItem href="/structure" title="">
//                     Structure de la RVA
//                   </ListItem>
//                   <ListItem href="/contact" title="">
//                     Contact
//                   </ListItem>
//                 </ul>
//               </NavigationMenu.Content>
//             </NavigationMenu.Item>
//             <NavigationMenu.Item>
//               <NavigationMenu.Trigger className="NavigationMenuTrigger">
//                 Actualités

//               </NavigationMenu.Trigger>
//               <NavigationMenu.Content className="NavigationMenuContent">
//                 <ul className="List one" style={{gridRow:1}}>
//                   <ListItem href="/actualites" title="">
//                     <span className='flex gap-3'><ChevronRightIcon />Actualités</span>
//                   </ListItem>
//                   <ListItem href="/evenements" title="">
//                     <span className='flex gap-3'><ChevronRightIcon />Evènements</span>
//                   </ListItem>
//                   <ListItem href="/projets" title="">
//                     <span className='flex gap-3'><ChevronRightIcon />Nos projets</span>
//                   </ListItem>
//                   <ListItem href="/realisations" title="">
//                     <span className='flex gap-3'><ChevronRightIcon />Nos réalisations</span>
//                   </ListItem>
//                 </ul>
//               </NavigationMenu.Content>
//             </NavigationMenu.Item>
//             <NavigationMenu.Item>
//               <NavigationMenu.Trigger className="NavigationMenuTrigger">
//                 Aeroports

//               </NavigationMenu.Trigger>
//               <NavigationMenu.Content className="NavigationMenuContent">
//                 <ul className="List one">
//                   <li style={{ gridRow: 'span 4' }}>
//                     <NavigationMenu.Link asChild>
//                         <img src='/fondtourcontrol.png' className='h-[200px] rounded-md' />
//                     </NavigationMenu.Link>
//                   </li>

//                   <ListItem href="/aeroports/internationaux" title="Aéroports internationaux">

//                   </ListItem>
//                   <ListItem href="/aeroports/nationaux" title="Aéroports nationaux">

//                   </ListItem>
//                   <ListItem href="/aeroports/aerodromes" title="Aérodromes">

//                   </ListItem>
//                   <ListItem href="/aeroports/tous" title="Aeroports par ordre alphabetique">

//                   </ListItem>
//                 </ul>
//               </NavigationMenu.Content>
//             </NavigationMenu.Item>

//             <NavigationMenu.Item>
//               <NavigationMenu.Trigger className="NavigationMenuTrigger">
//                 Appel d'offres

//               </NavigationMenu.Trigger>
//               <NavigationMenu.Content className="NavigationMenuContent">
//                 <ul className="List one">
//                   <ListItem title="Offre du jour" href="/primitives/docs/overview/introduction">

//                   </ListItem>
//                   <ListItem title="Appel d'offre" href="/appel-offre/">

//                   </ListItem>

//                 </ul>
//               </NavigationMenu.Content>
//             </NavigationMenu.Item>

//             <NavigationMenu.Item>
//               <NavigationMenu.Trigger className="NavigationMenuTrigger">
//                 Services RVA
//               </NavigationMenu.Trigger>
//               <NavigationMenu.Content className="NavigationMenuContent">
//                 <ul className="List two">
//                   <ListItem title="Introduction" href="/primitives/docs/overview/introduction">

//                   </ListItem>
//                   <ListItem title="Getting started" href="/primitives/docs/overview/getting-started">

//                   </ListItem>
//                   <ListItem title="Styling" href="/primitives/docs/guides/styling">

//                   </ListItem>
//                   <ListItem title="Animation" href="/primitives/docs/guides/animation">

//                   </ListItem>
//                   <ListItem title="Accessibility" href="/primitives/docs/overview/accessibility">

//                   </ListItem>
//                   <ListItem title="Releases" href="/primitives/docs/overview/releases">

//                   </ListItem>
//                 </ul>
//               </NavigationMenu.Content>
//             </NavigationMenu.Item>
//             <NavigationMenu.Item>
//             <NavigationMenu.Trigger className="NavigationMenuTrigger">
//                 Voyager

//               </NavigationMenu.Trigger>
//               <NavigationMenu.Content className="NavigationMenuContent">
//                 <ul className="List one">
//                   <ListItem href="https://stitches.dev/" title="">
//                     <span className='flex gap-3'><ChevronRightIcon />Actualités</span>
//                   </ListItem>
//                   <ListItem href="/colors" title="">
//                     <span className='flex gap-3'><ChevronRightIcon />Evènements</span>
//                   </ListItem>
//                   <ListItem href="https://icons.radix-ui.com/" title="">
//                     <span className='flex gap-3'><ChevronRightIcon />Nos projets</span>
//                   </ListItem>
//                   <ListItem href="https://icons.radix-ui.com/" title="">
//                     <span className='flex gap-3'><ChevronRightIcon />Nos réalisations</span>
//                   </ListItem>
//                 </ul>
//               </NavigationMenu.Content>
//             </NavigationMenu.Item>

//             <NavigationMenu.Indicator className="NavigationMenuIndicator">
//               <div className="Arrow" />
//             </NavigationMenu.Indicator>
//           </NavigationMenu.List>

//           <div className="ViewportPosition">
//             <NavigationMenu.Viewport className="NavigationMenuViewport" />
//           </div>
//         </NavigationMenu.Root>
//         <div className='w-[200px]'>
//           &nbsp;
//         </div>
//       </div>
//     </div>
//   );
// };

// const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
//   <li>
//     <NavigationMenu.Link asChild>
//       <a className={classNames('ListItemLink', className)} {...props} ref={forwardedRef}>
//         <div className="ListItemHeading">{title}</div>
//         <p className="ListItemText">{children}</p>
//       </a>
//     </NavigationMenu.Link>
//   </li>
// ));
// const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
//   return (
//     <Select.Item className={classNames('SelectItem', className)} {...props} ref={forwardedRef}>
//       <Select.ItemText>{children}</Select.ItemText>
//       <Select.ItemIndicator className="SelectItemIndicator">
//         <CheckIcon />
//       </Select.ItemIndicator>
//     </Select.Item>
//   );
// });

// export default Header;



"use client";

import Menu from "./Menu";
import Image from "next/image";
import { inter, michroma, nunito } from "../../style/fonts";
import { bgPrimary } from "./../../style/global";
import Link from "next/link";
import {
  Menu as M,
  MenuItem,
  MenuButton,
  SubMenu,
  MenuDivider,
  MenuHeader,
} from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import { menus, style } from "./../../utils/data";
import icontelephone from "./../../assets/icontelephone.png";
import iconmessage from "./../../assets/iconmessage.png";
import iconmap from "./../../assets/iconmap.png";
import drapeauFrance from "./../../assets/drapeauFrance.png";
import drapeauGb from "./../../assets/drapeauGb.png";
import { UserCircle, Plane, UserSquare, Clock1, Clock } from "lucide-react";
// import { oldUrl } from "@/app/utils/helper";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  cn,
} from "@nextui-org/react";
// import logoRva from "@/assets/logoRva.png";

const Header = () => {
  //    if(window.innerWidth<770)
  //    {
  //     alert("mobile")
  //    }
  const padding = "px-[280px]";
  const section1 = "flex flex-row  w-[230px] items-center justify-center";
  const tailleIconSection1 = 70;
  const section1Text = "text-[18px] font-[300]";
  return (
    <>
      <nav
        className="bg-[#16243d] border-gray-200 shadow-md w-screen over z-50"
        style={{ backgroundColor: style.bg }}
      >
        <div className={`flex bg-white py-3 ${padding}`}>
          <div className={`w-1/2 text-[14px] flex gap-3 items-start justify-start pl-7`}  >
            <span className="font-bold flex gap-2 justify-start items-center" style={nunito.style}> <Clock size={14} strokeWidth={2} color="white" fill="black" /> Ouvert :</span>  <span style={nunito.style}>Lundi-vendredi 08:15H</span>
          </div>
          <div className="w-1/2 flex items-end justify-end gap-3" style={nunito.style}>
            <Dropdown className="border bg-white rounded-md">
              <DropdownTrigger>
                <Button
                  variant="bordered"
                  className={`bg-[${style.bg}] text-white border-none rounded-sm px-3 py-1`}
                  startContent={<UserCircle size={17} />}
                  endContent={<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5625" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>}
                >

                </Button>
              </DropdownTrigger>
              <DropdownMenu
                variant="faded"
                aria-label="Dropdown menu with icons"
                className=" rounded-sm"
              >
                <DropdownItem key="new" className="flex flex-row gap-2">
                  <div className="flex flex-row gap-3">
                    <Plane />
                    Compagnie aérienne
                  </div>
                </DropdownItem>
                <DropdownItem key="copy">
                  <div className="flex flex-row gap-2">
                    <UserSquare />
                    Institution
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown className="border bg-white rounded-md">
              <DropdownTrigger>
                <Button
                  variant="bordered"
                  className={`bg-[${style.bg}] text-white border rounded-md border-white px-3 py-1`}
                >
                  <Image src={drapeauFrance} width={20} /> &nbsp;
                  <span>Langue</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5625" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>

                </Button>
              </DropdownTrigger>
              <DropdownMenu
                variant="faded"
                aria-label="Dropdown menu with icons"
              >
                <DropdownItem key="new" shortcut="⌘Fr">
                  <div className="flex flex-row gap-2">
                    <Image src={drapeauFrance} width={20} />
                    Francais
                  </div>
                </DropdownItem>
                <DropdownItem key="copy" shortcut="⌘Us">
                  <div className="flex flex-row gap-2">
                    <Image src={drapeauGb} width={20} />
                    English
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className={`${padding} h-[180px] items-center justify-between  shadow-md  hidden lg:flex lg:flex-wrap w-full px-[140px] overflow-hidden py-6`}>
          {/* <iframe src={`${oldUrl}/sectionHeader.php`} style={{"width":"100%", "height":"200px", "overflow":"hidden"}}  /> */}
          <Link href={"/"}>
            <div className="">
              <div className="text-center items-center text-white font-bold font-">
                <span className="text-[15px]" style={nunito.style}>
                  REGIE DES VOIES AERIENNES
                </span>
              </div>
              <Image src={"/logoRva.png"} width={240} height={200} />
            </div>
          </Link>
          <div className="flex-row flex text-white gap-6 flex-wrap pl-14">
            <div className={section1}>
              <div>
                <Image src={iconmessage} width={tailleIconSection1} />
              </div>
              <div className="flex flex-col flex-wrap ">
                <h4
                  style={nunito.style}
                  className={section1Text}
                >
                  Nous laisser un message
                </h4>
                <span className={nunito.className}>
                  <a
                    className="text-sm text-gray-500"
                    href="mailto:info@rva.cd"
                  >
                    info@rva.cd
                  </a>
                </span>
              </div>
            </div>
            <div className={section1}>
              <div>
                <Image src={icontelephone} width={tailleIconSection1} />
              </div>
              <div>
                <h4
                  className={section1Text}
                  style={nunito.style}
                >
                  Nous telephoner
                </h4>
                <span className={nunito.className}>
                  <a
                    className="text-sm text-gray-500"
                    href="mailto:info@rva.cd"
                  >
                    +243 (89) 899-1627
                  </a>
                </span>
              </div>
            </div>
            <div className={section1}>
              <div>
                <Image src={iconmap} width={tailleIconSection1} />
              </div>
              <div>
                <h4
                  style={nunito.style}
                  className={section1Text}
                >
                  Av. Aerodrome N°548 / Ndolo-Barumbu
                </h4>
                <span className={nunito.className}>
                  <a
                    className="text-sm text-gray-500"
                    href="mailto:info@rva.cd"
                  >
                    Kinshasa, RDC
                  </a>
                </span>
              </div>
            </div>
          </div>

        </div>
        {/* Mobile 0896431940*/}

        <div className="text-white  shadow-md lg:mx-[50px]  lg:hidden mx-64 rounded-md pt-24">
          <div className="items-center justify-between flex-row flex px-3 ">
            <div>
              <M menuButton={<MenuButton>
                <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fff"><path d="M3 5h8M3 12h13M3 19h18" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </MenuButton>}
              >
                {
                  menus.map((m, i) => {
                    return (
                      <SubMenu label={
                        <div className="flex flex-row gap-2">
                          {m.icon}
                          {m.titre}
                        </div>
                      }>
                        {
                          m.smenu?.map((mm, i) => {
                            return (

                              m.smenu[0]?.smenu ? <SubMenu label={mm.titre}>{
                                mm.smenu.map((mmm, iii) => {
                                  return (
                                    <MenuItem>{mmm.titre}</MenuItem>
                                  )
                                })
                              }</SubMenu> :
                                <MenuItem>{mm.titre}</MenuItem>

                            )
                          })
                        }
                      </SubMenu>)
                  })
                }
              </M>

            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-center items-center justify-center text-white font-bold ">
                <span className={nunito.className} style={{ "fontSize": "14px" }}>
                  REGIE DES VOIES AERIENNES
                </span>
              </div>
              <Image src={"/logoRva.png"} width={150} height={150} />
            </div>
            <div>
              <div className={nunito.className} style={{ color: "white", "display": "flex", "flexDirection": "column", "gap": 3 }}>
                <Dropdown className="border bg-white rounded-md">
                  <DropdownTrigger>
                    <Button
                      variant="bordered"
                      className="text-white border border-white rounded-sm px-1 py-1 bg-blue-500"

                    >
                      <UserCircle /> &nbsp;
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5625" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    variant="faded"
                    aria-label="Dropdown menu with icons"
                  >
                    <DropdownItem key="new" className="flex flex-row gap-2">
                      <div className="flex flex-row gap-3">
                        <Plane />
                        Compagnie aérienne
                      </div>
                    </DropdownItem>
                    <DropdownItem key="copy">
                      <div className="flex flex-row gap-2">
                        <UserSquare />
                        Institution
                      </div>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <Dropdown className="border bg-white rounded-md">
                  <DropdownTrigger>
                    <Button
                      variant="bordered"
                      className="text-white border border-white rounded-sm px-1 py-1 bg-blue-500"
                    >
                      <Image src={drapeauFrance} width={20} /> &nbsp;
                      <span>FR</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5625" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>

                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    variant="faded"
                    aria-label="Dropdown menu with icons"
                  >
                    <DropdownItem key="new" shortcut="⌘Fr">
                      <div className="flex flex-row gap-2">
                        <Image src={drapeauFrance} width={20} />
                        Francais
                      </div>
                    </DropdownItem>
                    <DropdownItem key="copy" shortcut="⌘Us">
                      <div className="flex flex-row gap-2">
                        <Image src={drapeauGb} width={20} />
                        English
                      </div>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>

            </div>
          </div>


          <div>
            <div className="flex-row flex text-white gap-6 flex-wrap mt-4 pl-2">
              <div className="flex flex-row pl-1">
                <div>
                  <Image src={iconmessage} width={80} />
                </div>
                <div>
                  <h4
                    className={nunito.className}
                    style={{ fontSize: "13px", fontWeight: "bold" }}
                  >
                    Nous laisser un message
                  </h4>
                  <span className={nunito.className}>
                    <a
                      className="text-sm text-gray-500"
                      href="mailto:info@rva.cd"
                    >
                      info@rva.cd
                    </a>
                  </span>
                </div>
              </div>
              <div className="flex flex-row flex-wrap">
                <div>
                  <Image src={icontelephone} width={30} />
                </div>
                <div>
                  <h4
                    className={nunito.className}
                    style={{ fontSize: "14px", fontWeight: "bold" }}
                  >
                    Nous telephoner
                  </h4>
                  <span className={nunito.className}>
                    <a
                      className="text-sm text-gray-500"
                      href="mailto:info@rva.cd"
                    >
                      +243 (89) 899-1627
                    </a>
                  </span>
                </div>
              </div>
              {/* <div className="flex flex-row">
              <div>
                <Image src={iconmap} width={30} />
              </div>
              <div>
                <h4
                  className={nunito.className}
                  style={{ fontSize: "16px", fontWeight: "bold" }}
                >
                  Av. Aerodrome N°548 / Ndolo-Barumba
                </h4>
                <span className={nunito.className}>
                  <a
                    className="text-sm text-gray-500"
                    href="mailto:info@rva.cd"
                  >
                    Kinshasa, RDC
                  </a>
                </span>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </nav>
      <div className="hidden md:hidden lg:block">
        {/* <Menu /> */}
      </div>
    </>
  );
};
export default Header;
