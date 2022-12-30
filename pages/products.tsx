import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import wahl_1 from '../public/img/products/wahl_1.jpg'
import wahl_2 from '../public/img/products/wahl_2.jpg'
import wahl_3 from '../public/img/products/wahl_3.jpg'

import set_barba_1 from '../public/img/products/set_barba_1.jpg'
import set_barba_2 from '../public/img/products/set_barba_2.jpg'

import matte_pomade_1 from '../public/img/products/matte_pomade_1.webp'
import matte_pomade_2 from '../public/img/products/matte_pomade_2.jpg'

import mart_1 from '../public/img/products/mart_paste_1.jpg'
import mart_2 from '../public/img/products/mart_paste_2.webp'

import spray from '../public/img/products/spray.jpg'

import texture_clay from '../public/img/products/texture_clay.jpg'

import clay from '../public/img/products/clay.jpg'

import beard_elexir from '../public/img/products/beard_elexir.jpg'

import tonic from '../public/img/products/tonic.jpg'
import {useTranslation} from "react-i18next";

export default function Index() {
  const { t } = useTranslation();

  const products = [
    {
      photos: [
        wahl_1,
        wahl_2,
        wahl_3,
      ],
      title: t('products.wahl.title'),
      description: t('products.wahl.description'),
      price: 650
    },
    {
      photos: [
        matte_pomade_2,
        clay
      ],
      title: t('products.matte_pomade.title'),
      description: t('products.matte_pomade.description'),
      price: 380
    },
    {
      photos: [
        matte_pomade_1,
      ],
      title: t('products.beard_balm.title'),
      description: t('products.beard_balm.description'),
      price: 380
    },
    {
      photos: [
        mart_1,
        texture_clay
      ],
      title:  t('products.mart_paste.title'),
      description: t('products.mart_paste.description'),
      price: 320
    },
    {
      photos: [
        tonic
      ],
      title: t('products.tonic.title'),
      description: t('products.tonic.description'),
      price: 340
    },
    {
      photos: [
        beard_elexir
      ],
      title: t('products.beard_elexir.title'),
      description: t('products.beard_elexir.description'),
      price: 420
    },
    {
      photos: [
        mart_2
      ],
      title:  t('products.texture_clay.title'),
      description: t('products.texture_clay.description'),
      price: 320
    },
    {
      photos: [
        spray
      ],
      title: t('products.spray.title'),
      description: t('products.spray.description'),
      price: 340
    },
    {
      photos: [
        set_barba_2,
        set_barba_1,
      ],
      title: t('products.set_barba.title'),
      title_beard_oil: t('products.set_barba.title_beard_oil'),
      title_beard_cream: t('products.set_barba.title_beard_cream'),
      title_beard_shampon: t('products.set_barba.title_beard_shampon'),
      description: t('products.set_barba.description'),
      description_2: t('products.set_barba.description_2'),
      description_3: t('products.set_barba.description_3'),
      price: 690
    },
  ];

  const settings: Object = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className="grid gap-6 lg:grid-cols-3 sm:grid-cols-2 justify-center mx-auto container my-12 pb-24">
      {
        products.map((product, index) => (
            <div key={index} className='relative bg-white rounded-xl max-w-md text-black p-6 sm:w-full w-10/12 mx-auto'>
              <div className='overflow-hidden'>
                <Slider {...settings}>
                  {product.photos.map((image, index) => (
                      <div  key={index} className='!inline-flex sm:h-[250px] h-[200px] sm:w-[200px] w-full'>
                        <Image
                            height={250}
                            src={image}
                            alt={product.title}
                            className='object-contain'
                        />
                      </div>
                  ))}
                </Slider>
              </div>

              <div className='flex justify-between mb-2'>
                <h2 className='sm:text-xl text-md'>{product.title}</h2>
                <p className='font-normal'>{product.price} lei</p>
              </div>

              <p className='block sm:text-sm text-xs font-light'><span className='font-bold'>{product.title_beard_oil}</span> {product.description}</p>


              {
                product?.description_2 && product?.description_3 &&(
                    <>
                      <p className='block sm:text-sm text-xs'><span className='font-black'>{product.title_beard_cream}</span><span className='font-light'>{product.description_2}</span></p>
                      <p className='block sm:text-sm text-xs'><span className='font-black'>{product.title_beard_shampon}</span><span className='font-light'>{product.description_3}</span></p>

                    </>
                )
              }

            </div>
        ))
      }
    </div>
  );
}
