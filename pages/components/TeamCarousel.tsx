import React, { useEffect, useState } from "react";
import Image from 'next/image';

export default function TeamCarousel({ image, alt, name, key }: any) {
  return (
    <div className='hover:grayscale-0 transition duration-500 group rounded-2xl' key={key}>
      <div className='relative h-[76vh]'>
        <Image
          src={image}
          alt={alt}
          layout="fill"
          loading="eager"
          className='object-contain'
        />

        <div className="absolute bottom-[20px] left-1/2 text-6xl -translate-x-1/2 -translate-y-1/2 text-center">
          {name}
        </div>
      </div>
    </div>
  )
}