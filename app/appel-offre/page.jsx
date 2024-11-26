"use client";
import { useEffect, useState } from "react";

// import ScrollAnimation from 'react-animate-on-scroll';
import { Input, Divider, Table, Space, Tag } from 'antd';

import { Tabs, Tab } from "@nextui-org/react"
import { API_URL, BACKEND_URL, getData } from "../fcts/helper";
import { ArrowDownCircle, BookMarked, Bookmark, CalendarCheck, CalendarDays, File, Info, LinkIcon, Megaphone, PaperclipIcon } from "lucide-react";
import moment from "moment";
import Link from "next/link";
import { nl2br } from "react-js-nl2br";
import Container from './../layout/Container'


export default function page() {
    const [infos, setInfos] = useState([]);
    //   const [data,setData]=useState([]);
    const [documents, setDocuments] = useState([]);
    const [documentsAll, setDocumentsAll] = useState([]);

    useEffect(() => {
        fetch(API_URL+"?qry=infoutile").then(r=>r.json()).then((r) => {
            setInfos(r?.data);
            let newD = [];
            r.data?.filter(info => (info?.fichier == null))?.forEach(i => {
                newD.push({
                    key: i?.id,
                    objet: i?.titre,
                    datepub: `Publié le ${moment(i?.dateCreation).format("DD/MM/YYYY")}`,
                    concerne: i?.concerne,

                })
            });

            let newDocumentsData = [];
            r.data?.filter(info => (info?.fichier !== null))?.forEach(i => {
                newDocumentsData.push({
                    key: i?.id,
                    objet: i?.titre,
                    datepub: `Publié le ${moment(i?.dateCreation).format("DD/MM/YYYY")}`,
                    concerne: i?.concerne,
                    fichier: i?.fichier
                })
            });

            let newDocumentsDataAll = [];
            r.data?.forEach(i => {
                newDocumentsDataAll.push({
                    key: i?.id,
                    objet: i?.titre,
                    datepub: `Publié le ${moment(i?.dateCreation).format("DD/MM/YYYY")}`,
                    concerne: i?.concerne,
                    fichier: i?.fichier
                })
            });
            setData(newD);
            setDocuments(newDocumentsData);
            setDocumentsAll(newDocumentsDataAll);
        })
    }, [])

    useEffect(() => {
        console.log(infos);
    }, [infos])

    // TABLE
    const columns = [
        {
            title: <div className="flex gap-2 items-center justify-center">#</div>,
            dataIndex: 'pagination',
        },
        {
            title: <div className="flex gap-2 items-center justify-center w-[130px]"><CalendarDays color="orange" strokeWidth={1} />Date appel</div>,
            dataIndex: 'name',
        },
        {
            title: <div className="flex gap-2 items-center justify-center"><Megaphone color="orange" strokeWidth={1} /> Objet</div>,
            dataIndex: 'age',
            className:"bg-slate-100 font-bold text-blue-800"
            
        },
        {
            title: 'Description',
            dataIndex: 'address',
            
        },
        {
            title: <div className="flex gap-2 items-center justify-center"><File color="orange" strokeWidth={1} />Fichiers details</div>,
            dataIndex: 'lien',
            className:"bg-slate-100"
           
        },
    ];
    const data = [
        {
            key: '1',
            pagination: '1.',
            name: '01/03/2023',
            age: <div className="py-8">Efficiently envisioneer impactful innovation</div>,
            address: 'Monotonectally repurpose sticky architectures whereas synergistic processes. Credibly implement parallel synergy after client-centered platforms. Progressively implement extensive applications through.',
            lien: <div className="flex gap-4 items-center justify-center underline italic"><ArrowDownCircle />telecharger</div>,
        },
        {
            key: '2',
            pagination: '2.',
            name: '01/03/2023',
            age: "Quickly leverage existing robust.",
            address: 'Monotonectally repurpose sticky architectures whereas synergistic processes. Credibly implement parallel synergy after client-centered platforms. Progressively implement extensive applications through.',
            lien: <div className="flex gap-4 items-center justify-center underline italic"><ArrowDownCircle />telecharger</div>,
        },
        {
            key: '3',
            pagination: '3.',
            name: '01/03/2023',
            age: "Appropriately facilitate state of.",
            address: 'Monotonectally repurpose sticky architectures whereas synergistic processes. Credibly implement parallel synergy after client-centered platforms. Progressively implement extensive applications through.',
            lien: <div className="flex gap-4 items-center justify-center underline italic"><ArrowDownCircle />telecharger</div>,
        },
        {
            key: '4',
            pagination: '4.',
            name: '01/03/2023',
            age: "Efficiently leverage other's market-driven.",
            address: 'Monotonectally repurpose sticky architectures whereas synergistic processes. Credibly implement parallel synergy after client-centered platforms. Progressively implement extensive applications through.',
            lien: <div className="flex gap-4 items-center justify-center underline italic"><ArrowDownCircle />telecharger</div>,
        },
        {
            key: '5',
            pagination: '5.',
            name: '01/03/2023',
            age: "Continually matrix team driven.",
            address: 'Monotonectally repurpose sticky architectures whereas synergistic processes. Credibly implement parallel synergy after client-centered platforms. Progressively implement extensive applications through.',
            lien: <div className="flex gap-4 items-center justify-center underline italic"><ArrowDownCircle />telecharger</div>,
        },
        {
            key: '6',
            pagination: '6.',
            name: '01/03/2023',
            age: "Compellingly revolutionize high-payoff outsourcing.",
            address: 'Monotonectally repurpose sticky architectures whereas synergistic processes. Credibly implement parallel synergy after client-centered platforms. Progressively implement extensive applications through.',
            lien: <div className="flex gap-4 items-center justify-center underline italic"><ArrowDownCircle />telecharger</div>,
        },
        {
            key: '7',
            pagination: '7.',
            name: '01/03/2023',
            age: "Collaboratively procrastinate process-centric benefits.",
            address: 'Monotonectally repurpose sticky architectures whereas synergistic processes. Credibly implement parallel synergy after client-centered platforms. Progressively implement extensive applications through.',
            lien: <div className="flex gap-4 items-center justify-center underline italic"><ArrowDownCircle />telecharger</div>,
        },
        {
            key: '8',
            pagination: '8.',
            name: '01/03/2023',
            age: "Progressively communicate virtual meta-services.",
            address: 'Monotonectally repurpose sticky architectures whereas synergistic processes. Credibly implement parallel synergy after client-centered platforms. Progressively implement extensive applications through.',
            lien: <div className="flex gap-4 items-center justify-center underline italic"><ArrowDownCircle />telecharger</div>,
        },
        {
            key: '9',
            pagination: '9.',
            name: '01/03/2023',
            age: "Synergistically extend sustainable architectures.",
            address: 'Monotonectally repurpose sticky architectures whereas synergistic processes. Credibly implement parallel synergy after client-centered platforms. Progressively implement extensive applications through.',
            lien: <div className="flex gap-4 items-center justify-center underline italic"><ArrowDownCircle />telecharger</div>,
        },
        {
            key: '10',
            pagination: '10.',
            name: '01/03/2023',
            age: "Holisticly evisculate global innovation.",
            address: 'Monotonectally repurpose sticky architectures whereas synergistic processes. Credibly implement parallel synergy after client-centered platforms. Progressively implement extensive applications through.',
            lien: <div className="flex gap-4 items-center justify-center underline italic"><ArrowDownCircle />telecharger</div>,
        },
        {
            key: '11',
            pagination: '11.',
            name: '01/03/2023',
            age: "Assertively architect timely customer.",
            address: 'Monotonectally repurpose sticky architectures whereas synergistic processes. Credibly implement parallel synergy after client-centered platforms. Progressively implement extensive applications through.',
            lien: <div className="flex gap-4 items-center justify-center underline italic"><ArrowDownCircle />telecharger</div>,
        },
        {
            key: '12',
            pagination: '12.',
            name: '01/03/2023',
            age: "Efficiently envisioneer impactful innovation.",
            address: 'Monotonectally repurpose sticky architectures whereas synergistic processes. Credibly implement parallel synergy after client-centered platforms. Progressively implement extensive applications through.',
            lien: <div className="flex gap-4 items-center justify-center underline italic"><ArrowDownCircle />telecharger</div>,
        },
        {
            key: '13',
            pagination: '13.',
            name: '01/03/2023',
            age: "Collaboratively disseminate professional human.",
            address: 'Monotonectally repurpose sticky architectures whereas synergistic processes. Credibly implement parallel synergy after client-centered platforms. Progressively implement extensive applications through.',
            lien: <div className="flex gap-4 items-center justify-center underline italic"><ArrowDownCircle />telecharger</div>,
        },
        {
            key: '14',
            pagination: '14.',
            name: '01/03/2023',
            age: "Efficiently envisioneer impactful innovation.",
            address: 'Monotonectally repurpose sticky architectures whereas synergistic processes. Credibly implement parallel synergy after client-centered platforms. Progressively implement extensive applications through.',
            lien: <div className="flex gap-4 items-center justify-center underline italic"><ArrowDownCircle />telecharger</div>,
        },
    ];
    // TABLE
    return (
        <Container
            headerBgImg={"/appeloffre.png"}
            header={
                <>
                    <div className='py-4 flex items-center justify-center w-full'>
                        Nos appels d'offres
                    </div>

                </>
            }
            cls={"border-b-0 shadow-sm border-red-400 bg-center bg-gray-100"}
        >

            <div className="px-[150px] mb-20 flex flex-col gap-5 bg-white">
                <div className="flex flex-wrap gap-4 justify-between pt-0 w-full bg-white py-3">
                    <div className="items-center justify-center content-center w-full py-4">
                        <div className="w-full ">
                            {
                                infos?.length < 1 ?
                                    <div className="text-lg text-center w-full mt-5">Aucune information trouvée pour l'instant</div> :

                                    <div className="mt-3">

                                        {/* {
                            infos?.filter(info=>(info?.fichier==null))?.map((info,index)=>{
                            return (
                              <tr>
                                  <td><Info size={18} />{info?.titre}</ td>
                                  <td className="font-thin text-start mt-3 text-medium">Concerne : {nl2br(info?.concerne)}</td>
                                  <td className="text-sm italic border-b-0 mb-4 text-gray-700 text-center">Publié le {moment(info?.dateCreation).format("DD/MM/YYYY HH:mm:SS")}</td>
                                  <td className="font-thin text-medium line-clamp-6 text-justify">{nl2br(info?.description)}</td>
                                  <td><Link href={`/infoutile/${info.id}`} className="text-sm text-center items-center justify-center flex rounded-sm py-2 px-2">Tout lire</Link></td>
                              </tr>
                              )
                            })
                          } */}
                                        <Table columns={columns} dataSource={data} className="w-full font-normal" pagination={{
                                            position: ["bottomCenter", "topCenter"]
                                        }}  /> 

                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
