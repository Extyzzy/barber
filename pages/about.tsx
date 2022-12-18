import React from 'react';
import Link from 'next/link';
import {useTranslation} from "react-i18next";

export default function Index() {
  const { t, i18n } = useTranslation();
  return (
    <div className="relative container mx-auto sm:text-lg text-sm sm:px-0 px-4 h-full">
      <div className='p-10 rounded-xl bg-zinc-800/75'>
        <h1 className='sm:text-2xl text-base text-center sm:text-left'>{t('about.about_us')}</h1>
        <div className='sm:flex mt-12'>
          <div className='sm:w-2/3 lg:pr-12 pr-6'>
            SELECT BARBER - {t('general.main_text')}
            <br />
            {t('about.description')}
          </div>

          <div className="sm:w-1/3 lg:pr-12 pr-6 mt-12 sm:mt-0">
            <div>
              Facebook:
              <Link href="https://www.facebook.com/SelectBarbershop">
                <a className='ml-4 hover:border-b'>SELECT BARBERSHOP</a>
              </Link>
            </div>
            <div>
              Instagram:
              <Link href="https://www.instagram.com/select.barber/">
                <a className='ml-4 hover:border-b'>select.barber</a>
              </Link>
            </div>
            <div>
              Tik Tok:
              <Link href="https://www.tiktok.com/@select.barber">
                <a className='ml-4 hover:border-b'>select.barber</a>
              </Link>
            </div>
            <div>
              {t('about.telephone')}:
              <Link href="tel:079000740">
                <a className='ml-4 hover:border-b'> 0(79) 000 740</a>
              </Link>
            </div>
            <div>
              Mail:
              <Link href="mailto:select.barber@bk.ru">
                <a className='ml-4 hover:border-b'>select.barber@bk.ru</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='sm:h-4/6 h-1/2 mt-4 mapIframe'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8014.917929822598!2d28.883907621554144!3d47.05459019919812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5d6217e0e97b2e5d!2sSELECT%20BARBERSHOP!5e0!3m2!1sru!2s!4v1661340322908!5m2!1sru!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

