import {Headphones, headset,Home} from "lucide-react"
export const menus = [
  {
    titre: "A Propos",
    stitre: "Découvrez la RVA",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  color="#fb6a09" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>,
    smenu: [
      {
        titre: "Qui sommes-nous ?",
        description: "Histrorique de la RVA",
        lien: "/apropos"
      },
      {
        titre: "Mission de la RVA",
        description: "Notre mission",
        lien: "/mission"
      },
      // {
      //   titre: "Structure de la RVA",
      //   description: "Organigramme de la RVA",
      //   lien: "#"
      // }

    ]
  },
  {
    titre: "Services",
    stitre: "",
    icon: <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fb6a09"><path d="M9.019 9A6.5 6.5 0 1115 14.981M8.5 22a6.5 6.5 0 110-13 6.5 6.5 0 010 13zM22 17a3 3 0 01-3 3h-2m0 0l2-2m-2 2l2 2M2 7a3 3 0 013-3h2m0 0L5 6m2-2L5 2" stroke="#fb6a09" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>,
    smenu: [
      {
        titre: "Nos principaux services ",
        stitre: "",
        description: "",
        smenu: [
          {
            titre: "Navigation aérienne",
            description: "",
            smenu: [
              {
                titre: "ATM",
                description: "Toutes les infos sur l'aéroport",
                lien: "#"
              },
              {
                titre: "Meteo",
                description: "Les services de l'aeroport",
                lien: "#"
              },
              {
                titre: "ASM",
                description: "Les services de l'aeroport",
                lien: "#"
              },
              {
                titre: "PANOPS",
                description: "Les services de l'aeroport",
                lien: "#"
              },
              {
                titre: "AIP",
                description: "Service AIP",
                lien: "#"
              }
            ]
          },
          {
            titre: "Technique",
            description: "",
            smenu: [
              {
                titre: "CNS",
                description: "Toutes les infos sur l'aéroport",
                lien: "#"
              },
              {
                titre: "ADS-B",
                description: "",
                lien: "#"
              }
            ]
          },
          {
            titre: "Sécurité",
            description: "",
            smenu: [
              {
                titre: "AIS",
                description: "",
                lien: "#"
              },
              
            ]
          },
          {
            titre: "Gestion aéroportuaire",
            description: "",
            smenu: [
              {
                titre: "Services aéroportuaires",
                description: "",
                lien: "#"
              },
              {
                titre: "Trafic",
                description: "Informations sur les vols",
                lien: "#"
              },
              {
                titre: "Services et contact",
                description: "Les services de l'aeroport",
                lien: "#"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    titre: "Aéroports",
    stitre: "",
    icon:<svg xmlns="http://www.w3.org/2000/svg" color="#fb6a09" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tower-control"><path d="M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z"/><path d="M8 13v9"/><path d="M16 22v-9"/><path d="m9 6 1 7"/><path d="m15 6-1 7"/><path d="M12 6V2"/><path d="M13 2h-2"/></svg>,
    smenu: [
      {
        titre: "Aéroports Internationaux (4)",
        stitre: "Nos aéroports internationaux",
        description: "",
        smenu: [
          {
            titre: "Kinshasa",
            description: "",
            smenu: [
              {
                titre: "A Propos de l'aeroport",
                description: "Toutes les infos sur l'aéroport",
                lien: "/aeroports/internationaux/fzaa"
              },
              {
                titre: "Trafic",
                description: "Informations sur les vols",
                lien: "#"
              },
              {
                titre: "Services et contact",
                description: "Les services de l'aeroport",
                lien: "#"
              }
            ]
          },
          {
            titre: "Lubumbashi",
            description: "",
            smenu: [
              {
                titre: "A Propos de l'aeroport",
                description: "Toutes les infos sur l'aéroport",
                lien: "/aeroports/internationaux/fzqa"
              },
              {
                titre: "Trafic",
                description: "Informations sur les vols",
                lien: "#"
              },
              {
                titre: "Services et contact",
                description: "Les services de l'aeroport",
                lien: "#"
              }
            ]
          },
          {
            titre: "Goma",
            description: "",
            smenu: [
              {
                titre: "A Propos de l'aeroport",
                description: "Toutes les infos sur l'aéroport",
                lien: "/aeroports/internationaux/fzna"
              },
              {
                titre: "Trafic",
                description: "Informations sur les vols",
                lien: "#"
              },
              {
                titre: "Services et contact",
                description: "Les services de l'aeroport",
                lien: "#"
              }
            ]
          },
          {
            titre: "Kisangani",
            description: "",
            smenu: [
              {
                titre: "A Propos de l'aeroport",
                description: "Toutes les infos sur l'aéroport",
                lien: "/aeroports/internationaux/fzic"
              },
              {
                titre: "Trafic",
                description: "Informations sur les vols",
                lien: "#"
              },
              {
                titre: "Services et contact",
                description: "Les services de l'aeroport",
                lien: "#"
              }
            ]
          }
        ]
      },
      {
        titre: "Aéroports Nationaux (17)",
        stitre: "Nos aéroports nationaux",
        description: "",
        lien: "#",
        smenu: [{
          titre: "Afficher la liste",
          description: "",
          lien: "/aeroports/nationaux"
        }],
      },
      {
        titre: "Aérodromes (32)",
        stitre: "Nos aérodomes",
        description: "",
        lien: "#",
        smenu: [{
          titre: "Afficher la liste",
          description: "",
          lien: "/aeroports/aerodromes"
        }],
      }
    ]
  },
  
  {
    titre: "Actualités et evenements",
    stitre: "Toutes nos nouvelles",
    icon: <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fb6a09"><path d="M12 17c0-3-2-5-5-5M17 17c0-6-4-10-10-10M7 17.01l.01-.011" stroke="#fb6a09" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5z" stroke="#fb6a09" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>,
    smenu: [
      {
        titre: "Actualités",
        description: "",
        lien: "/actualites"
      },
      {
        titre: "Évènements",
        description: "",
        lien: "/evenements"
      },
      {
        titre: "Nos projets",
        description: "Les projets en cours et en préparation",
        lien: "/projets"
      },
      {
        titre: "Nos réalisations",
        description: "Projets déjà réalisés",
        lien: "#"
      }
    ]
  },
  
  // {
  //   titre: "Appel d'offres",
  //   stitre: "Appel d'offres & offres d'emplois",
  //   icon: <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fb6a09"><path d="M14 14V6m0 8l6.102 3.487a.6.6 0 00.898-.52V3.033a.6.6 0 00-.898-.521L14 6m0 8H7a4 4 0 01-4-4v0a4 4 0 014-4h7M7.757 19.3L7 14h4l.677 4.74a1.98 1.98 0 01-3.92.56z" stroke="#fb6a09" stroke-width="1.5"></path></svg>,
  //   smenu: [
  //     {
  //       titre: "Appel d'offre",
  //       description: "",
  //       lien: "/appel-offre"
  //     },
  //     {
  //       titre: "Offres d'emploi",
  //       description: "Opportunités d'emploi à la RVA",
  //       lien: "#"
  //     }
  //   ]
  // },
  {
    titre: "Espace Voyageur",
    stitre: "Conditions de voyage",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="#fb6a09" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-baggage-claim"><path d="M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2"/><path d="M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10"/><rect width="13" height="8" x="8" y="6" rx="1"/><circle cx="18" cy="20" r="2"/><circle cx="9" cy="20" r="2"/></svg>,
    smenu: [
      {
        titre: "Mesure COVID-19",
        description: "",
        lien: "#"
      },
      {
        titre: "Bagage",
        description: "Objets interdits et formalités bagage",
        lien: "#"
      },
      {
        titre: "Formalités de voyage",
        description: "Comment préparer son voyage",
        lien: "#"
      },
      {
        titre: "Enregistrement",
        description: "Que dois-je savoir avant de m'enregistrer et d'enregistrer ma valise",
        lien: "#"
      },
      {
        titre: "Contrôle",
        description: "Documents utiles à votre voyage",
        lien: "#"
      },
      {
        titre: "Assistance specifique",
        description: "Formalités pour voyager avec un enfant, un bébé ou un animal de compagnie",
        lien: "#"
      }
    ]
  },
  {
    titre: "Espace Partenaire",
    stitre: "Clients et partenaires",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="#fb6a09" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-handshake"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>,
    smenu: [
      {
        titre: "Se connecter",
        description: "",
        lien: "#"
      },
      {
        titre: "S'inscrire",
        description: "",
        lien: "#"
      }
    ]
  },
  {
    titre: "Contact et assistace",
    stitre: "Nos contacts et assistance",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="#fb6a09" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-headset"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"/><path d="M21 16v2a4 4 0 0 1-4 4h-5"/></svg>,
    smenu: [
      {
        titre: "Nous contacter",
        description: "Nous contacter ou se faire assister",
        lien: "/contact"
      }
    ]
  }
];

export const style = {
  bg: "#16243d"
}