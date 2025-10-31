import React, { useEffect, useState } from 'react';

interface SlideshowProps {
  images: string[];
  displayTime: number;
  shuffle: boolean;
}

const Slideshow: React.FC<SlideshowProps> = ({ images, displayTime, shuffle }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageList, setImageList] = useState<string[]>(images);

  useEffect(() => {
    if (shuffle) {
      setImageList(shuffleArray(images));
    } else {
      setImageList(images);
    }
  }, [images, shuffle]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, displayTime);

    return () => clearInterval(interval);
  }, [displayTime, imageList.length]);

  const shuffleArray = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="slideshow">
      {imageList.length > 0 && (
        <img src={imageList[currentImageIndex]} alt="Slideshow" />
      )}
    </div>
  );
};

export default Slideshow;