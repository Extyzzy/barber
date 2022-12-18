import React from 'react';
import {useTranslation} from "react-i18next";

export default function Index() {
  const { t } = useTranslation();

  const options = [
    { name: t('service.options.hairstyle'), minutes: '60 minutes', price: '200-300' },
    { name: 'Complex', minutes: '90 minutes', price: '350-450' },
    { name: t('service.options.beard'), minutes: '45 minutes', price: '50-250'},
    { name: t('service.options.tonnage'), minutes: '30 minutes', price: '150-250' },
    { name: 'VIP COMPLEX',  minutes: '120 minutes',  price: '550-650' },
    { name: 'SELECT COMPLEX',  minutes: '105 minutes', price: '450-550' },
    { name: 'Facial SPA', minutes: '45 minutes', price: '150-300', },
    { name: t('service.options.facial_epilation'), minutes: '15 minutes', price: '50-200'},
    { name: 'HAIR TATTOO', minutes: '30 minutes', price: '50-300'},
  ]

  return (
    <div className="relative container mx-auto sm:h-full h-auto mt-4">
      <div className="card h-full text-center p-10 rounded-xl bg-zinc-800/75">
        <div className='text-xl text-left sm:text-center flex justify-center pb-8'>
          {t('service.title').toUpperCase()}
        </div>
        <table className="w-full max-w-screen-lg mx-auto">
          <tbody>
            {options.map(el => (
              <>
                <tr className="border-t"/>
                <tr className="sm:h-14 h-10 text-sm font-medium">
                  <td className="text-left pl-4 sm:pl-0 sm:w-72 w-48 py-4">
                    <p className='text-lg text-white sm:ml-14'>{el.name.toUpperCase()}</p>
                    <span className='opacity-50 sm:ml-14'>{el?.minutes}</span></td>
                  <td className='text-lg'>{el.price}</td>
                </tr>
              </>
            ))}

          </tbody>
        </table>

      </div>
    </div>
  );
}
