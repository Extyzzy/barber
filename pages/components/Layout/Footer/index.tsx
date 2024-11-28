import React from "react";
import Image from "next/image";
import Phone from '../../../../public/img/svg/phone-call.svg';
import {useRouter} from "next/router";
import {useTranslation} from "react-i18next";
import Location from "../../../../public/img/svg/locationBlack.svg";

export default function Footer() {
  const route = useRouter();
  const { t } = useTranslation()
  const hideFooter = ['/team', '/service', '/about', '/gallery', '/products'].find(path => path === route.pathname )

  return (
      <>
          <a className={`cc-calto-action-ripple block sm:hidden font-light ${!hideFooter ? 'position-phone' : ''}`} href="tel:079000740">
              <Image src={Phone} alt="Numarul de telefon"/>
          </a>

          {
              hideFooter && (
                  <a className="animation-button absolute bottom-8 right-7 bg-blue-600/50 w-[110px] h-[110px] flex items-center justify-center p-3 text-sm text-center rounded-full sm:hidden "
                     href={process.env.buttonLink}>
                      <span className='w-24 block'>{t('general.schedule_online')}</span>
                  </a>
              )
          }

          {
              !hideFooter && (
                  <div className="flex justify-center text-center">
                      <div className="absolute bottom-0 bg-zinc-800/75 p-2 sm:p-5 w-full">
                          <div className='hidden sm:block sm:font-bold text-xl'>
                              +373 79 000 740
                          </div>
                          <div className='flex flex-wrap lg:flex-nowrap justify-center lg:gap-16 text-center sm:w-[60%] mx-auto'>
                            
                            <button className="order-2 sm:order-1 bg-white text-black rounded-2xl mt-2 sm:mt-4 p-2">
                                <h3 className="font-bold text-base sm:text-xl w-[16rem] mx-auto">
                                <a target="_blank" href="https://www.google.com/maps/place/SELECT+BARBER/@47.0238106,28.8019495,14z/data=!4m10!1m2!2m1!1sSELECT+BARBERSHOP+103!3m6!1s0x40c97da5fc964ea1:0xc438e7f992849ddd!8m2!3d47.0238106!4d28.8400583!15sChVTRUxFQ1QgQkFSQkVSU0hPUCAxMDNaFyIVc2VsZWN0IGJhcmJlcnNob3AgMTAzkgELYmFyYmVyX3Nob3CaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUkllazFmV1Y5QlJSQULgAQD6AQQIIhA1!16s%2Fg%2F11vj3zxhhy!5m1!1e1?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D">
                                <Image width={25} src={Location} alt="str. Columna 33"/> str. Columna 103
                                </a>
                              </h3>
                            </button>
                              
                            <button className="order-1 sm:order-2 bg-white text-black rounded-2xl sm:mt-4 mt-2 p-2">
                                <h3 className="font-bold text-base sm:text-xl sm:w-[29rem] mx-auto">
                                    <a target="_blank" href="https://www.google.com/maps/place/SELECT+BARBER/@47.0292329,28.8307769,17z/data=!3m1!4b1!4m6!3m5!1s0x40c97d00165f3583:0x1f1ad9cd66c06c15!8m2!3d47.0292293!4d28.8356424!16s%2Fg%2F11vx4f_4vk!5m1!1e1?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D">
                                <Image width={25} src={Location} alt="str. Mitropolit Gavriil Bănulescu-Bodoni 57"/>  str. Mitropolit Gavriil Bănulescu-Bodoni 57
                                    </a>
                                </h3>
                            </button>

                               <button className="order-3 sm:order-3 bg-white text-black rounded-2xl mt-2 sm:mt-4 py-2 px-2">
                                <h3 className="font-bold text-base sm:text-xl  w-[18rem] mx-auto">
                                    <a target="_blank" href="https://www.google.com/maps/place/SELECT+BARBERSHOP/@47.0545049,28.8870013,17z/data=!3m1!4b1!4m6!3m5!1s0x40c97d55a1adb603:0x5d6217e0e97b2e5d!8m2!3d47.0545013!4d28.8895816!16s%2Fg%2F11r7n2ybl9!5m1!1e1?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D">
                                <Image width={25} src={Location} alt="Bd. Mircea cel Bătrân 33"/> Bd. Mircea cel Bătrân 33
                                    </a>
                                </h3>
                              </button>
                          </div>

                      </div>
                  </div>
              )
          }
      </>

  )
}