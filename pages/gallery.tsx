import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";


export default function Index() {
  const photos = [
    {
      src: `https://i.imgur.com/eip6vU3.jpg`,
      width: 4,
      height: 3
    },
    {
      src: "https://i.imgur.com/BIhaDKT.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.imgur.com/UOtjp8v.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.imgur.com/9q7Vutu.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.imgur.com/SZnprfR.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.imgur.com/U3fI1Tx.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.imgur.com/2YjVoAC.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.imgur.com/OR11EnL.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.imgur.com/aTCByOQ.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.imgur.com/D1HJfK6.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.imgur.com/RGeKLnd.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.imgur.com/Op1Kz7o.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.imgur.com/Ot9n4dP.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.imgur.com/onzn1JB.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.imgur.com/0h1ffxJ.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.imgur.com/zNHx6Sz.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.imgur.com/mXRfoun.jpg",
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
      <Gallery photos={photos} onClick={openLightbox} columns={200} direction='row' />
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
