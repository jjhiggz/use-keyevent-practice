import { useState } from "react";
import useKeyListener from "../hooks/useKeyListener";
import { SlideData } from "../types";

type CarouselSlideProps = {
  slideData: SlideData;
  goToNextSlide: () => void;
  goToPreviousSlide: () => void;
};

const CarouselSlide: React.FC<CarouselSlideProps> = ({
  slideData,
  goToNextSlide,
  goToPreviousSlide,
}) => {
  const [shouldShowDescription, setShouldShowDescription] = useState(false);

  const showDescription = () => {
    setShouldShowDescription(true);
  };

  const hideDescription = () => {
    setShouldShowDescription(false);
  };

  useKeyListener({
    keys: ["ArrowRight", "l"],
    handler: () => {
      goToNextSlide();
    },
  });

  useKeyListener({
    keys: ["ArrowLeft", "h"],
    handler: () => {
      goToPreviousSlide();
    },
  });

  useKeyListener({
    keys: ["Enter", "ArrowUp", "k"],
    handler: () => {
      showDescription();
    },
  });

  useKeyListener({
    keys: ["Escape", "ArrowDown", "j"],
    handler: () => {
      hideDescription();
    },
  });

  return (
    <div className="carousel-slide">
      <div className="carousel-slide-image-container">
        <img src={slideData.src} alt={slideData.description} />
        {shouldShowDescription && (
          <div className="carousel-slide-description-container">
            <div className="carousel-slide-description">
              <p>{slideData.description}</p>
              <button onClick={hideDescription}>Close Description</button>
            </div>
          </div>
        )}
      </div>
      <div className="carousel-slide-nav">
        <button onClick={goToPreviousSlide}>Previous</button>
        <button onClick={showDescription}>Show Description</button>
        <button onClick={goToNextSlide}>Next</button>
      </div>
    </div>
  );
};

export default CarouselSlide;
