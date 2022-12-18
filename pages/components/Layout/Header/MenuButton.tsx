import React from 'react';

export default function MenuButton({ activeButton }: any) {
  return (
    <div className={`${activeButton ? 'activeHamburger' : 'hamburgerMenu'}`} />
  );
}
