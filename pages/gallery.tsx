import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import image_1 from '../public/img/gallery/1.webp'
import image_2 from '../public/img/gallery/2.webp'
import image_3 from '../public/img/gallery/3.webp'
import image_4 from '../public/img/gallery/4.webp'
import image_5 from '../public/img/gallery/5.webp'
import image_6 from '../public/img/gallery/6.webp'
import image_7 from '../public/img/gallery/7.webp'
import image_8 from '../public/img/gallery/8.webp'
import image_9 from '../public/img/gallery/9.webp'
import image_10 from '../public/img/gallery/10.webp'
import image_11 from '../public/img/gallery/11.webp'
import image_12 from '../public/img/gallery/12.webp'
import image_13 from '../public/img/gallery/13.webp'
import image_14 from '../public/img/gallery/14.webp'
import image_15 from '../public/img/gallery/15.webp'
import image_16 from '../public/img/gallery/16.webp'

export default function Index() {

  const photos = [
    {
      source: `${process.env.hostname}${image_1.src}`,
      width: 4,
      height: 3
    },
    {
      source: `${process.env.hostname}${image_2.src}`,
      width: 4,
      height: 3
    },
    {
      source: `${process.env.hostname}${image_3.src}`,
      width: 4,
      height: 3
    },
    {
      source: `${process.env.hostname}${image_4.src}`,
      width: 4,
      height: 3
    },
    {
      source: `${process.env.hostname}${image_5.src}`,
      width: 4,
      height: 3
    },
    {
      source: `${process.env.hostname}${image_6.src}`,
      width: 4,
      height: 3
    },
    {
      source: `${process.env.hostname}${image_7.src}`,
      width: 4,
      height: 3
    },
    {
      source: `${process.env.hostname}${image_8.src}`,
      width: 4,
      height: 3
    },
    {
      source: `${process.env.hostname}${image_9.src}`,
      width: 4,
      height: 3
    },
    {
      source: `${process.env.hostname}${image_10.src}`,
      width: 4,
      height: 3
    },
    {
      source: `${process.env.hostname}${image_11.src}`,
      width: 4,
      height: 3
    },
    {
      source: `${process.env.hostname}${image_12.src}`,
      width: 4,
      height: 3
    },
    {
      source: `${process.env.hostname}${image_13.src}`,
      width: 4,
      height: 3
    },
    {
      source: `${process.env.hostname}${image_14.src}`,
      width: 4,
      height: 3
    },
    {
      source: `${process.env.hostname}${image_15.src}`,
      width: 4,
      height: 3
    },
    {
      source: `${process.env.hostname}${image_16.src}`,
      width: 4,
      height: 3
    }
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };


  return (
    <div className="relative mx-auto container h-full">
      <Gallery photos={photos.map(photo => {

        return {
          src: photo.source,
          width: photo.width,
          height: photo.height
        }
      })} onClick={openLightbox} columns={200} direction='row' />
      <ModalGateway>
        {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                  currentIndex={currentImage}
                  views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
              />
            </Modal>
        ) : null}
      </ModalGateway>

    </div>
  );
}
