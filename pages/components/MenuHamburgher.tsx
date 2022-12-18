import Link from "next/link";
import React from "react";

interface ButtonLinkHamburgherProps {
  name: string;
  url: string;
  setActiveButton: (activeButton: boolean) => void;
}

 const ButtonLinkHamburgher = ({ url, name, setActiveButton }: ButtonLinkHamburgherProps) => {
     console.info(url)
  return (
    <li onClick={() => setActiveButton(false)} className="py-4">
        { url && <Link href={url}>{name}</Link> }
    </li>
  )
}

export default ButtonLinkHamburgher