"use client";

import { useState } from "react";
import Image from "next/image";

const ImageSlider = ({ images, altText }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative overflow-hidden mb-6 border rounded-3xl">
      <div className="relative aspect-video">
        <Image
          src={
            images[currentImageIndex] ||
            "/placeholder.svg?height=600&width=1000"
          }
          alt={`${altText} - Image ${currentImageIndex + 1}`}
          fill
          className="object-cover"
        />

        {/* Navigation arrows */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
          aria-label="Previous image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
          aria-label="Next image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Image counter */}
        <div className="absolute bottom-2 right-2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentImageIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
