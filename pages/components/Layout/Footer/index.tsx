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
            <Image src={Phone} alt="cursor-pointer" />
        </a>
          {
              ! hideFooter &&(
                  <div className="hidden sm:flex justify-center text-center ">
                      <div className="absolute bottom-0 bg-zinc-800/75 p-5 w-full">
                          <span className='font-bold text-xl'>
                              +373 79 000 740
                          </span>
                          <div className="mt-4 font-bold text-xl">
                              Chisinau, Bd. Mircea cel Bătrân 33
                          </div>
                      </div>
                  </div>
              )
          }
      </>

  )
}