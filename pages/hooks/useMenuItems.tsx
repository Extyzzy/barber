import {useTranslation} from "react-i18next";

interface MenuItem {
    name: string
    isExternal?: boolean
    url: string
}

export const useMenuItems = (): MenuItem[] => {
    const { t } = useTranslation();

    return [
        {name: t('header.home'), url: '/'},
        {name: t('service.title'), url: '/service'},
        {name: t('gallery.title'), url: '/gallery'},
        {name: t('team.title'), url: '/team'},
        {name: t('products.title'), url: '/products'},
        {name: t('about.about_us'), url: '/about'},
    ]
}