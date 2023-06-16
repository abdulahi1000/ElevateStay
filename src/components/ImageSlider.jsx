import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="relative">
        <img className="min-w-[100px] h-[300px] md:min-w-[1000px] bg-cover md:h-[550px]" src={images[currentImageIndex]} alt="Slider" />

        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4">
          <button
            className="text-white bg-gray-800 rounded-full p-2 hover:bg-gray-600 focus:outline-none"
            onClick={previousImage}
          >
            Prev
          </button>
          <button
            className="text-white bg-gray-800 rounded-full p-2 hover:bg-gray-600 focus:outline-none"
            onClick={nextImage}
          >
            Next
          </button>
        </div>
      </div>

      <div className="ml-4">
        <div className="flex overflow-x-auto mt-4 gap-4 md:mt-0 md:grid md:grid-cols-2">
        {images.map((image, index) => (
          <img
            key={index}
            className={`w-full h-auto max-h-40 mb-4 cursor-pointer ${
              currentImageIndex === index ? 'border-4 border-blue-500' : ''
            }`}
            src={image}
            alt={`Preview ${index}`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
        </div>

       
      </div>
    </div>
  );
};

export default ImageSlider;