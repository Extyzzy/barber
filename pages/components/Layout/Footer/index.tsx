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
                  <div className="hidden sm:flex justify-center text-center">
                      <div className="absolute bottom-10">
                          <div>
                              +373 79 000 740
                          </div>
                          <div className="mt-4">
                              Chisinau, Bl. Mircea Cel Batrin 33
                          </div>
                      </div>
                  </div>
              )
          }
      </>

  )
}