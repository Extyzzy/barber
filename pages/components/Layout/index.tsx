import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Image from "next/image";
import BackgroundMainImage from '../../../public/img/desktop_v2.png';
import BackgroundMainImageMobile from '../../../public/img/mobile_v1.jpeg';
import ButtonLinkHamburgher from '../../components/MenuHamburgher'
import {useTranslation} from "react-i18next";

export default function Layout({ children, logo }: any) {
  const [activeButton, setActiveButton] = useState<boolean>(false);
  const { t } = useTranslation();

  const optionsLinks = [
    { name: t('header.home'), url: '/' },
    { name: t('service.title'), url: '/service' },
    { name: t('gallery.title'), url: '/gallery' },
    { name: t('team.title'), url: '/team' },
    { name: t('products.title'), url: '/products' },
    { name: t('about.about_us'), url: '/about' },
  ]

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 610);
  }, [])

  return (
    <>
      <div className="absolute top-0 h-full w-full -z-10">
        <Image src={isMobile ? BackgroundMainImageMobile : BackgroundMainImage} layout="fill" objectFit="cover" alt="Main Image of the background" />
      </div>
      <Header logo={logo} activeButton={activeButton} setActiveButton={setActiveButton} />
      <div className="h-full text-white pt-24">
        <div className="container mx-auto">
          <div className={`${activeButton ? 'filter blur bg-button-black' : ''} transition h-full relative`}>
            {children}
          </div>
          <div className={`${activeButton ? 'absolute' : 'hidden'} w-full h-full flex items-center justify-center bg-zinc-800/75 top-2/4 left-2/4 -translate-y-1/2	-translate-x-1/2`}>
            <ul className="text-xl">
              {optionsLinks.map(el => <ButtonLinkHamburgher key={el.name} url={el.url} name={el.name} setActiveButton={setActiveButton} />)}
            </ul>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}