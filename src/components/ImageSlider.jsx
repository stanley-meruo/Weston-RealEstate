import { useState } from "react";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";


const images = [
  "src/assets/Slider/image-0.png",
  "src/assets/Slider/image-1.png",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full h-full mx-auto my-4">
      <div className="overflow-hidden relative h-72 sm:min-h-[350px] lg:min-h-[700px] lg:min-w-[1000px] xl:min-w-[1200px]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${
              index === currentIndex ? "translate-x-0" : "translate-x-full"
            }`}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
            }}
          />
        ))}
      </div>
      <div className="absolute bottom-[0.5px] right-0 transform -translate-y-1/2 px-2">
        <button onClick={prevSlide} className="px-2">
          <TfiArrowCircleLeft className="w-8 h-8 text-white hover:text-gray-400 sm:w-10 sm:h-10" />
        </button>
        <button onClick={nextSlide} className="px-2">
          <TfiArrowCircleRight className="w-8 h-8 text-white hover:text-gray-400  sm:w-10 sm:h-10" />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
