/* eslint-disable react/prop-types */
import { useState } from "react";
import { images } from "../helpers/sliderImages";

export const ActivatedImgs = ({setActivated}) => {
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

  const goToImg = (idx) => {
    setCurrentIndex(idx);
  };

  return (
    <div className="activatedImgs animate__animated animate__fadeIn">
        <div className="activatedImgs_container">
        <img
          src="/images/icon-close.svg"
          alt="bars"
          className="close_activatedImgs mb-5 pointer"
          onClick={() => setActivated((activated) => !activated)}
        />
      <div className="activeImgs_imgs-container">
     <div>
        
     <div className="arrow-container--prev pointer" onClick={goToPrev}>
     <img
        className="activeImgs_arrow activeImgs_prev"
        src="/images/icon-previous.svg"
      />
     </div>
      {images.map((img, idx) => (
        <img
          key={img.alt}
          className={
            currentIndex === idx
              ? "active animate__animated animate__fadeIn"
              : "slide-hidden"
          }
          src={img.url}
          alt={img.alt}
          onClick={() => goToImg(idx)}
        />
      ))}
      <div className="arrow-container--next pointer" onClick={goToNext}>
      <img
        className="activeImgs_arrow activeImgs_next"
        src="/images/icon-next.svg"
      />
      </div>
     </div>
      <div className="inactive_container">
        {images.map((img, idx) => (
          <div
            key={img.alt}
            className={
              currentIndex !== idx
                ? "image-border"
                : "image-border active-border"
            }
          >
            <img
              className={
                currentIndex === idx ? "activeImgs_inactive activeImgs_highlighted" : "activeImgs_inactive"
              }
              src={img.url}
              alt={img.alt}
              onClick={() => goToImg(idx)}
            />
          </div>
        ))}
      </div>
      </div>
        </div>
    </div>
  );
};
