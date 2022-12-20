import React from "react";
import { useTranslation } from "react-i18next";

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
    <div className="cursor-pointer text-xs sm:text-lg z-10 text-white" onClick={() => changeLanguageFn()}>
      RO / RU
    </div>
  )
}