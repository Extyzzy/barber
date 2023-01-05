import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Russia from "../../../../public/img/flags/russia.svg";
import Romania from "../../../../public/img/flags/romania.svg";

export default function ChangeLanguageComponent() {
  const { i18n } = useTranslation();
  const changeLanguageFn = () => {
    if (i18n.language === "ro") {
      i18n.changeLanguage('ru');
    } else {
      i18n.changeLanguage('ro');
    }
  }

  return (
    <div className="cursor-pointer text-xs sm:text-lg z-10 text-white flex items-center bg-white rounded-xl px-2" onClick={() => changeLanguageFn()}>

      {
        (i18n.language === 'ru' &&(
            <>
              <Image width={30}  height={30} src={Russia} alt="mr-2" /> <div className='ml-2 text-md text-black'>RU</div>
            </>
          )) || (
       <>
         <Image width={30} height={30} src={Romania} alt="mr-2" className='block' /> <div className='ml-2 text-md text-black'>RO</div>
       </>
        )
      }
    </div>
  )
}