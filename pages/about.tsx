import React from 'react';
import Link from 'next/link'
import {useTranslation} from "react-i18next";
import Tiktok from '../public/img/svg/tiktok.svg'
import Image from "next/image";
import Instagram from "../public/img/svg/instagram.svg";
import Facebook from "../public/img/svg/facebook.svg";
import Phone from "../public/img/svg/phone-call.svg";
import Mail from "../public/img/svg/mail.svg";
import Location from "../public/img/svg/location.svg";

export default function Index() {
  const { t } = useTranslation();

  return (
    <div className="relative container mx-auto sm:text-lg text-sm sm:px-0 px-4 h-full mt-4">
      <div className='p-10 rounded-xl bg-zinc-800/75'>
        <p className='sm:text-4xl text-2xl text-center sm:text-left'>{t('about.about_us')}</p>
        <div className='sm:flex mt-4'>
          <div className='sm:w-1/3 lg:pr-12 sm:text-xl text-sm font-light'>
            <h1 className='inline-block font-bold'>SELECT BARBER</h1> - {t('general.main_text')}
            <br />
            {t('about.description')}

            <div className='mt-4 space-y-2 '>
              <div><Image width={25} src={Location} alt="bd. Mircea cel Bătrân"/> <h2 className='inline-block'>bd. Mircea cel Bătrân 33</h2></div>
              <div><Image width={25} src={Location} alt="str. Mitropolit Gavriil Bănulescu-Bodoni"/> <h2 className='inline-block'>str. Mitropolit Gavriil Bănulescu-Bodoni 57</h2> </div>
              <div><Image width={25} src={Location} alt="str. Columna"/> <h3 className='inline-block'>str. Columna 103</h3></div>
            </div>
          </div>


          <div className='sm:w-1/3 lg:pr-12 sm:text-xl text-sm font-light'>
            <div className='my-2 font-bold text-2xl'>{t('about.program')}:</div>
            <div>
              <div className='flex'>
                <div className='bg-white w-[25px] text-center rounded-md text-black mr-2 mb-2'>L</div>  10:00 - 20:00</div>
             <div className='flex'><div className='bg-white w-[25px] text-center rounded-md text-black mr-2 mb-2'>M</div>  10:00 - 20:00</div>
             <div className='flex'><div className='bg-white w-[25px] text-center rounded-md text-black mr-2 mb-2'>M</div>  10:00 - 20:00</div>
             <div className='flex'><div className='bg-white w-[25px] text-center rounded-md text-black mr-2 mb-2'>J</div>  10:00 - 20:00</div>
             <div className='flex'><div className='bg-white w-[25px] text-center rounded-md text-black mr-2 mb-2'>V</div>  10:00 - 20:00</div>
             <div className='flex'><div className='bg-white w-[25px] text-center rounded-md text-black mr-2 mb-2'>S</div>  10:00 - 20:00</div>
             <div className='flex'><div className='bg-white w-[25px] text-center rounded-md text-black mr-2'>D</div>  {t('about.free_day')}</div>

           </div>
          </div>

          <div className="sm:w-1/3 lg:pr-12 pr-6 mt-12 sm:mt-0">
            <div className='flex items-center mb-2'>
              <Image width={30} src={Facebook} alt="Facebook" />
              <Link
                href="https://www.facebook.com/SelectBarbershop"
                className='ml-4 hover:border-b'>
                <h2>SELECT BARBERSHOP</h2>
              </Link>
            </div>
            <div className='flex items-center mb-2'>
              <Image width={30} src={Instagram} alt="Instagram" />
              <Link
                href="https://www.instagram.com/select.barber/"
                className='ml-4 hover:border-b'>
                select.barber
              </Link>
            </div>
            <div className='flex items-center mb-2'>
              <Image width={30} src={Tiktok} alt="Tiktok" />
              <Link
                href="https://www.tiktok.com/@select.barber"
                className='ml-4 hover:border-b'>
                select.barber
              </Link>
            </div>
            <div className='flex items-center mb-2'>
              <Image width={30} src={Phone} alt="Telefon" />
              <Link href="tel:079000740" className='ml-4 hover:border-b'>
                 0(79) 000 740
              </Link>
            </div>
            <div className='flex items-center'>
              <Image width={30} src={Mail} alt="Mail" />
              <Link href="mailto:select.barber@bk.ru" className='ml-4 hover:border-b'>
                select.barber@bk.ru
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='h-[400px] mt-4 mapIframe'>
        <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=14x1q8ZjymdhUq2vWUO4Oy3YD0oOL05w&ehbc=2E312F&noprof=1"
            width="100%"
            height="100%"
            style={{border: 0}}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />

      </div>
    </div>
  );
}

