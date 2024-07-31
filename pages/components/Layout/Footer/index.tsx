import React from "react";
import Image from "next/image";
import Phone from '../../../../public/img/svg/phone-call.svg';
import {useRouter} from "next/router";

export default function Footer() {
  const route = useRouter();

  const hideFooter = ['/service', '/about', '/gallery', '/products'].find(path => path === route.pathname )

  return (
      <>
          <a className="cc-calto-action-ripple block sm:hidden " href="tel:079000740">
              <Image src={Phone} alt="cursor-pointer"/>
          </a>
          {
              !hideFooter && (
                  <div className="hidden sm:flex justify-center text-center">
                      <div className="absolute bottom-0 bg-zinc-800/75 p-5 w-full">
                          <div className='font-bold text-xl'>
                              +373 79 000 740
                          </div>
                          <div className='lg:flex justify-center gap-16 text-center w-[60%] mx-auto'>
                              <div className="mt-4 font-bold text-xl w-[16rem] mx-auto">
                                  str. Columna 103
                              </div>
                              <div className="mt-4 font-bold text-xl  w-[28rem] mx-auto">
                                  str. Mitropolit Gavriil Bănulescu-Bodoni 57
                              </div>
                              <div className="mt-4 font-bold text-xl  w-[16rem] mx-auto">
                                  Bd. Mircea cel Bătrân 33
                              </div>
                          </div>

                      </div>
                  </div>
              )
          }
      </>

  )
}