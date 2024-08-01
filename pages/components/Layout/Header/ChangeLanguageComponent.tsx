import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Russia from "../../../../public/img/flags/russia.svg";
import Romania from "../../../../public/img/flags/romania.svg";
import {usePathname, useRouter} from "next/navigation";

export default function ChangeLanguageComponent() {
  const router = useRouter();
  const pathname = usePathname();

  const { i18n } = useTranslation();

  const changeLanguageFn = () => {
    if (i18n.language === "ro") {
      i18n.changeLanguage('ru');
    } else {
      i18n.changeLanguage('ro');
    }


    router.push(pathname);
  }

  return (
    <div className="cursor-pointer text-xs sm:text-lg z-10 text-white flex items-center bg-white rounded-xl p-2" onClick={() => changeLanguageFn()}>

      {
        (i18n.language === 'ru' &&(
            <>
              <Image width={20} height={20} src={Russia} alt="Flag Moldova" className='rounded-2xl' /> <div className='ml-2 text-md text-black'>RU</div>
            </>
          )) || (
       <>
         <Image width={20} height={20} src={Romania} alt="Flag Romania" className='block rounded-3xl' /> <div className='ml-2 text-md text-black'>RO</div>
       </>
        )
      }
    </div>
  )
}