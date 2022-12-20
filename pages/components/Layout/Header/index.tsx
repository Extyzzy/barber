import React, { useState } from "react";
import Image from 'next/image';
import MenuButton from "./MenuButton";
import ChangeLanguageComponent from "./ChangeLanguageComponent";
import Link from 'next/link';

export default function Header({ logo, activeButton, setActiveButton }: any) {
  return (
    <div className="flex justify-between h-24 items-center px-4 sm:px-0 gradient-color">
      <div className="cursor-pointer flex h-12 w-12 items-center relative z-10" onClick={() => setActiveButton(!activeButton)}>
        <MenuButton activeButton={activeButton} />
      </div>
      <Link href='/' className="logo mt-16">
        <Image src={logo} alt="Main logo cursor-pointer mt-8" width={200} height={150}/>
      </Link>
      <ChangeLanguageComponent />
    </div>
  )
}