import React from "react";
import {useTranslation} from "react-i18next";

type ButtonLinkProps = {
  text?: string;
  to?: string
  target?: string
  size?: 'md' | 'lg'
}

export default function ButtonLink({ text, to = process.env.buttonLink, target, size }: ButtonLinkProps) {
   const {t } = useTranslation()

  return (
    <a href={to} target={target}>
      <div className={`bg-white text-base text-black linkButton border-2 uppercase overflow-hidden text-center
       ${size === 'md' ? 'flex justify-center rounded-xl py-2 px-3 w-[183px]' : 'inline-flex  sm:text-2xl sm:px-12 sm:py-6 px-6 py-4 rounded-3xl  ' }`} >
        {text ?? t('general.schedule')}
      </div>
    </a>

  )
}