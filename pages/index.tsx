import React from 'react';
import { useTranslation } from 'react-i18next';
import ButtonLink from './components/ButtonLink';

export default function App() {
  const { t, i18n } = useTranslation();

  return (
      <div className='flex items-center justify-center h-[80vh]'>
          <div className={`h-full flex justify-center sm:items-center items-end relative text-center ${i18n.language === 'ru' ? 'tracking-[0.3em]' : ''}`}>
              <div className='sm:mb-0 mb-20 pb-0'>
                  <h1 className='hidden'>Barber</h1>
                  <h2 className={`sm:text-6xl text-3xl tracking-[0.3rem] ${i18n.language === 'ru' ? 'marks' : 'allura'}  `}>{t('general.main_text')}</h2>
                  <div className="text-center mt-4">
                      <ButtonLink />
                  </div>
              </div>
          </div>
      </div>

  )
}
