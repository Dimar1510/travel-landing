import image1 from "../../assets/images/gallery/1.jpg";
import image2 from "../../assets/images/gallery/2.jpg";
import image3 from "../../assets/images/gallery/3.jpg";
import image4 from "../../assets/images/gallery/4.jpg";
import image5 from "../../assets/images/gallery/5.jpg";
import image6 from "../../assets/images/gallery/6.jpg";
import thumb1 from "../../assets/images/gallery/thumbnails/1.jpg";
import thumb2 from "../../assets/images/gallery/thumbnails/2.jpg";
import thumb3 from "../../assets/images/gallery/thumbnails/3.jpg";
import thumb4 from "../../assets/images/gallery/thumbnails/4.jpg";
import thumb5 from "../../assets/images/gallery/thumbnails/5.jpg";
import thumb6 from "../../assets/images/gallery/thumbnails/6.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import Modal from "./Modal";

const images = [image1, image2, image3, image4, image5, image6];
const thumbnails = [thumb1, thumb2, thumb3, thumb4, thumb5, thumb6];
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  draggable: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const Gallery = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleClick = (index: number) => {
    setImageIndex(index);
    dialogRef.current?.showModal();
  };

  const handleLeft = () => {
    if (imageIndex === 0) {
      setImageIndex(images.length - 1);
    } else {
      setImageIndex((prev) => prev - 1);
    }
  };

  const handleRight = () => {
    if (imageIndex === images.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex((prev) => prev + 1);
    }
  };

  const handleClose = () => {
    dialogRef.current?.close();
  };

  useEffect(() => {
    const closeOnOutsideClick = (e: MouseEvent) => {
      if (dialogRef.current) {
        const dialogDimensions = dialogRef.current.getBoundingClientRect();
        if (
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom
        ) {
          dialogRef.current.close();
        }
      }
    };
    dialogRef.current?.addEventListener("click", closeOnOutsideClick);
    return () =>
      dialogRef.current?.removeEventListener("click", closeOnOutsideClick);
  });

  return (
    <>
      <section
        className="overflow-hidden p-2 pb-10 flex flex-col justify-center items-center"
        id="gallery"
      >
        <h1 className="text-3xl 2xl:text-4xl font-bold capitalize py-4 text-center">
          See the magical views of mountain peaks
        </h1>
        <div className="slider-container w-full sm:w-[90%] mx-auto">
          <Slider {...settings}>
            {thumbnails.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="gallery image"
                className="w-full h-64 2xl:h-[350px] object-cover p-4 cursor-pointer hover:scale-110 will-change-transform transition-transform duration-300"
                onClick={() => handleClick(index)}
              />
            ))}
          </Slider>
        </div>
      </section>
      <Modal
        ref={dialogRef}
        image={images[imageIndex]}
        onClose={handleClose}
        left={handleLeft}
        right={handleRight}
      />
    </>
  );
};

export default Gallery;
