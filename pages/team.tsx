import Image from 'next/image';
import React, { useState } from 'react';
import Slider from 'react-slick';
import LeonidPoschii from '../public/img/team/IMG_6729.jpg'
import NicuCraciun from '../public/img/team/IMG_6731.jpg'
import EduardCatrinescu from '../public/img/team/IMG_6730.jpg'
import IonChirilescu from '../public/img/team/IMG_6732.jpg'
import CosolapSerghei from '../public/img/team/IMG_6738.jpg'
import SergiuRosca from '../public/img/team/Sergiu_Rosca.jpeg'
import { NextButton, PrevButton } from './components/Arrows';
import TeamCarousel from './components/TeamCarousel';


export default function index() {
  const settings: Object = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevButton btnSizeClass="embla__button__black" btnPosition="absolute top-1/2" />,
    nextArrow: <NextButton btnSizeClass="embla__button__black" btnPosition="absolute top-1/2" />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  const sliders = [
    { name: 'Ion Chirilescu', image: IonChirilescu, title: '', alt: 'Ion' },
    { name: 'Nicu Craciun', image: NicuCraciun, title: '', alt: 'Nicu' },
    { name: 'Eduard Catrinescu', image: EduardCatrinescu, title: '', alt: 'Eduard' },
    { name: 'Leonid Poschii', image: LeonidPoschii, title: '', alt: 'Leonid' },
    { name: 'Serghei Coșolap', image: CosolapSerghei, title: '', alt: 'Serghei' },
    { name: 'Sergiu Roșca', image: SergiuRosca, title: '', alt: 'Sergiu' },
  ]

  return (
    <div className="relative mx-auto container h-full">
      <Slider {...settings}>
        {sliders.map(el => (
          <TeamCarousel name={el.name} key={el.name} image={el.image} alt={el.alt} />
        ))}
      </Slider>
    </div>
  );
}
