import React from 'react';
import { useTranslation } from 'react-i18next';
import ButtonLink from './components/ButtonLink';

export default function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className={`h-full flex justify-center sm:items-center items-end relative text-center ${i18n.language === 'ru' ? 'tracking-[0.3em]' : ''}`}>
      <div className='pb-24'>
        <h1 className={`sm:text-6xl text-3xl tracking-[0.3rem] ${i18n.language === 'ru' ? 'marks' : 'allura'}  `}>{t('general.main_text')}</h1>
        <div className="text-center mt-8">
          <ButtonLink target='_blank' to='https://mst.link/selectbarbershop' text={t('general.schedule')} />
        </div>
      </div>
    </div>
  )
}