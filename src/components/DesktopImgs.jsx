import { useState } from "react";
import { images } from "../helpers/sliderImages";
import { ActivatedImgs } from "./ActivatedImgs";

export const DesktopImgs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activated, setActivated] = useState(false);

  const goToImg = (idx) => {
    setCurrentIndex(idx);
  };

  return (
    <>
      <div className={activated ? "activated" : "noShow"}>
      
        <ActivatedImgs setActivated={setActivated}/>
      </div>
      <div className="desktopImgs_container">
        {images.map((img, idx) => (
          <img
            key={img.alt}
            className={
              currentIndex === idx
                ? "active pointer animate__animated animate__fadeIn"
                : "slide-hidden"
            }
            src={img.url}
            alt={img.alt}
            onClick={() => setActivated((activated) => !activated)}
          />
        ))}
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
                  currentIndex === idx ? "inactive highlighted" : "inactive"
                }
                src={img.url}
                alt={img.alt}
                onClick={() => goToImg(idx)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
