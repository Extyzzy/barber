import React, { useState } from "react";
import Image from 'next/image';
import MenuButton from "./MenuButton";
import ChangeLanguageComponent from "./ChangeLanguageComponent";
import Link from 'next/link'

export default function Header({ logo, activeButton, setActiveButton }: any) {
  return (
      <div className="gradient-color absolute w-full">
          <div className='container mx-auto flex justify-between h-24 items-center px-4 sm:px-0 '>
              <div className="cursor-pointer flex h-12 w-12 items-center relative z-10" onClick={() => setActiveButton(!activeButton)}>
                  <MenuButton activeButton={activeButton} />
              </div>
              <div className="logo mt-4 cursor-pointer">
                  <Link href='/' legacyBehavior>
                      <Image src={logo} alt="Main logo" width={180} height={150}/>
                  </Link>
              </div>

              <ChangeLanguageComponent />
          </div>
      </div>
  );
}