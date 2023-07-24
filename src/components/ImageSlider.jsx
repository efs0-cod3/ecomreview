import { useState } from "react";
import { images } from "../helpers/sliderImages";


export const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    const isFirstImg = currentIndex === 0;
    const newIndex = isFirstImg ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImg = currentIndex === images.length - 1;
    const newIndex = isLastImg ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
    <div className="slider_container">
      <img
        className="arrow prev"
        src="./images/icon-previous.svg"
        onClick={goToPrev}
      />
      <div>
       {images.map((img, idx) => (
        <img key={img.alt} src={img.url} alt={img.alt} className={currentIndex === idx ? "product animate__animated animate__fadeIn" : "noShow"}/>
       ))}
      </div>
      <img
        className="arrow next"
        src="./images/icon-next.svg"
        onClick={goToNext}
      />
    </div>
    </>
  );
};
