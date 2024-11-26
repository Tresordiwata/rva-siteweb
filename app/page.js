"use client"
import { Avatar, Button, Divider } from '@nextui-org/react'
import { Image } from '@nextui-org/react'
import Container from './layout/Container'
import { bg, bgMin, paddingContent, textColor, titre } from './CONST/global'
// import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import avion from "./../app/assets/avion.jpeg"
import { ArrowRight, ArrowRightCircle, BaggageClaim, CheckCircle, ChevronRight, ChevronsRight, Link, MapPinned, Plane, ShieldCheck, TowerControl } from "lucide-react"
import Slide from './home/Slide'
// import 'react-id-swiper/lib/styles/css/swiper.css';
import _1 from "./assets/bg/1.png"
import logoRva from "./assets/logoRva.png"
import { Divider as DividerAnt, Card, Carousel } from 'antd'
import Section from './layout/Section'
import { ButtonDanger } from './layout/Button'
import Motdg from './home/Motdg'
import { SITEWEB_URL, oldUrl } from './fcts/helper'
import { Fade,Rotate, Slide as SlideAnim, Zoom } from "react-awesome-reveal";
import CardHome from './components/Home/Card'
import SlideHome from './components/Home/Slide'
import CountUp from 'react-countup';
import LinkNative from "next/link"
import _Home from "./home/_Home"

const { Meta } = Card;

const titre1 = "text-yellow-600 font-bold text-xl";
const titre2 = "text-white font-bold text-3xl ";

export default function Home() {
  return (
   <_Home />
  )
}
