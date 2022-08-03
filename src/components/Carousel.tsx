import { useState } from "react";
import { SlideData } from "../types";
import CarouselSlide from "./CarouselSlide";

type CarouselProps = {
  data: SlideData[];
};

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const [index, setIndex] = useState(0);
  const currentSlide = data[index];

  const goToNextSlide = () => {
    if (index < data.length - 1) {
      setIndex(index + 1);
      return;
    }
    setIndex(0);
  };

  const goToPreviousSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
      return;
    }
    setIndex(data.length - 1);
  };

  return (
    <div className="carousel">
      <CarouselSlide
        slideData={currentSlide}
        goToNextSlide={goToNextSlide}
        goToPreviousSlide={goToPreviousSlide}
      />
    </div>
  );
};

export default Carousel;
