import React, { useEffect, useState } from "react";
import Image from 'next/image';

export default function TeamCarousel({ image, alt, name, key }: any) {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 610);
  }, [])

  return (
    <div className='relative grayscale hover:grayscale-0 transition duration-500 group' key={key}>
      <div style={isMobile ? { height: "70vh" } : { height: '76vh' }}>
        <Image
          src={image}
          alt={alt}
          layout="fill"
          loading="eager"
        />

        <div className="hidden group-hover:block absolute top-3/4 left-1/2 text-6xl -translate-x-1/2 -translate-y-1/2">
          {name}
        </div>
      </div>
    </div>
  )
}