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
    <div className="relative sm:w-[700px] mx-auto h-auto mt-6">
      <div className="card h-full text-center py-8 rounded-xl bg-zinc-800/75 table-service ">
        <div className='text-4xl text-left sm:text-center flex justify-center pb-4 font-bold'>
          {t('service.title').toUpperCase()}<h1 className='ml-3'>BARBER</h1>

        </div>
        <table className="w-full max-w-screen-lg mx-auto">
          <tbody>
            {options.map(el => (
              <>
                <tr className="sm:h-14 h-10 text-sm font-medium">
                  <td className="text-left pl-10 sm:pl-0 py-3">
                    <h3 className='text-lg text-white sm:ml-14'>{el.name.toUpperCase()}</h3>
                    <span className='opacity-50 sm:ml-14'>{el?.minutes}</span></td>
                  <td className='text-lg pr-10 sm:pr-0'>{el.price}</td>
                </tr>
              </>
            ))}

          </tbody>
        </table>

      </div>
    </div>
  );
}
