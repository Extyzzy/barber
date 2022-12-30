import Image from 'next/image';
import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import LeonidPoschii from '../public/img/team/5.png'
import NicuCraciun from '../public/img/team/3.png'
import EduardCatrinescu from '../public/img/team/6.png'
import IonChirilescu from '../public/img/team/1.png'
import CosolapSerghei from '../public/img/team/2.png'
import SergiuRosca from '../public/img/team/4.png'
import { NextButton, PrevButton } from './components/Arrows';
import TeamCarousel from './components/TeamCarousel';


export default function index() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 610);
  }, [])

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

  const barbers = [
    { name: 'Ion Chirilescu', image: IonChirilescu, title: '', alt: 'Ion' },
    { name: 'Nicu Craciun', image: NicuCraciun, title: '', alt: 'Nicu' },
    { name: 'Eduard Catrinescu', image: EduardCatrinescu, title: '', alt: 'Eduard' },
    { name: 'Leonid Poschii', image: LeonidPoschii, title: '', alt: 'Leonid' },
    { name: 'Serghei Coșolap', image: CosolapSerghei, title: '', alt: 'Serghei' },
    { name: 'Sergiu Roșca', image: SergiuRosca, title: '', alt: 'Sergiu' },
  ]

  if (isMobile) {
    return (
        <div className="relative mx-auto container h-full mt-4 flex flex-wrap">
          {
            barbers.map((barber, key) => (
                <div className='relative rounded-2xl w-1/2 h-[400px]' key={key}>

                    <Image
                        src={barber.image}
                        alt={barber.alt}
                        layout="fill"
                        loading="eager"
                        className='object-cover'
                    />

                    <div className="text-md absolute bottom-[-5px] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-[70px]">
                      {barber.name}
                    </div>
                </div>
            ))
          }
        </div>
    )
  }

  return (
    <div className="relative mx-auto container h-full mt-4">
      <Slider {...settings}>
        {barbers.map(el => (
          <TeamCarousel name={el.name} key={el.name} image={el.image} alt={el.alt} />
        ))}
      </Slider>
    </div>
  );
}
