import { Indicators } from "./Indicators";
import { useEffect, useState } from "react";
import { NextButton } from "./NextButton";
import { Images } from "./Images";
import { PrevButton } from "./PrevButton";

export type Image = {
  src: string;
  alt: string;
};

type Props = {
  images: Image[];
};

export function Carousel({ images }: Props) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 3000);
    return () => clearTimeout(timerId);
  }, [currentImage, images.length]);

  return (
    <div className="w-full mx-auto overflow-hidden">
      <div className="relative">
        {/* Main carousel container */}
        <div className="flex items-center justify-between p-2 sm:p-4 bg-[#fdf6ee] rounded-lg border border-[#c4a484]">
          <PrevButton
            onClick={() =>
              setCurrentImage(
                (currentImage - 1 + images.length) % images.length
              )
            }
          />
          <Images image={images[currentImage]} />
          <NextButton
            onClick={() => setCurrentImage((currentImage + 1) % images.length)}
          />
        </div>

        {/* Indicators section */}
        <div className="flex justify-center py-3 bg-[#fdf6ee] border-t border-[#c4a484]">
          <Indicators
            count={images.length}
            selected={currentImage}
            onClick={(index) => setCurrentImage(index)}
          />
        </div>
      </div>
    </div>
  );
}
