import React from "react";
import Image from 'next/image';
import MenuButton from "./MenuButton";
import ChangeLanguageComponent from "./ChangeLanguageComponent";
import Link from 'next/link'
import useMenuItems from "../../../hooks/useMenuItems";
import ButtonLink from "../../ButtonLink";
import { usePathname } from 'next/navigation'

export default function Header({ logo, activeButton, setActiveButton }: any) {
  const menuItems = useMenuItems()
  const pathname = usePathname()

  return (
      <div className="gradient-color absolute w-full">
          <div className='container mx-auto flex justify-between h-24 items-center px-4 sm:px-0 '>
              <div className="lg:hidden flex cursor-pointer h-12 w-12 items-center relative z-10" onClick={() => setActiveButton(!activeButton)}>
                  <MenuButton activeButton={activeButton} />
              </div>

               <div className='lg:flex hidden items-center w-full lg:w-[90%]'>
                   {menuItems.map((item, index) => {

                       if (index === 4) {
                           return (
                               <Link href='/' className='block w-[200px] mr-24' >
                                   <Image src={logo} alt="Main logo" width={180} height={150}/>
                               </Link>
                           )
                       }

                       return (
                           <Link href={item.url} className='text-white hover:underline block text-lg w-[10%] lg:w-[170px]'>{item.name}</Link>
                       )
                   })}

                   {
                       pathname !== '/' &&(
                           <ButtonLink size='md' />
                       ) || (
                           <div className='w-[183px] h-[20px] block'></div>
                       )
                   }

               </div>

              <div className="lg:hidden flex w-[80%] justify-around logo mt-4 cursor-pointer ">
                  <Link href='/' legacyBehavior>
                      <Image src={logo} alt="Main logo" width={180} height={150}/>
                  </Link>
                  {
                      pathname !== '/' &&(
                          <ButtonLink size='md' />
                      )
                  }
              </div>

              <ChangeLanguageComponent />
          </div>
      </div>
  );
}