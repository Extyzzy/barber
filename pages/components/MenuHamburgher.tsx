import Link from "next/link";
import React from "react";

interface ButtonLinkHamburgherProps {
  name: string;
  url: string;
  setActiveButton: (activeButton: boolean) => void;
}

 const ButtonLinkHamburgher = ({ url, name, setActiveButton }: ButtonLinkHamburgherProps) => {
  return (
    <li onClick={() => setActiveButton(false)} className="py-4">
        { url && <Link href={url} legacyBehavior>{name}</Link> }
    </li>
  );
}

export default ButtonLinkHamburgher