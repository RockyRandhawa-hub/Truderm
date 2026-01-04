'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import imageOne from "../../assets/GarvitaOne.jpg"
import imageTwo from "../../assets/GarvitaTwo.jpg"
import imageThree from "../../assets/GarvitaThree.jpg"
import imageFour from "../../assets/GarvitaFour.jpg"
import imageFive from "../../assets/GarvitaFive.jpg"
import imageSix from "../../assets/GarvitaSeven.jpg"
import imageSeven from "../../assets/GarvitaEight.jpg"
import imageEight from "../../assets/GarvitaNine.jpg"
import Image from 'next/image';
export default function BeforeAfterGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample data - replace with your actual combined before/after images
  const treatments = [
    {
      id: 1,
      image: imageOne,
      alt: 'Skin treatment results'
    },
    {
      id: 2,
      image: imageTwo,
      alt: 'Pigmentation treatment'
    },
    {
      id: 3,
      image: imageThree,
      alt: 'Hair treatment results'
    },
    {
      id: 4,
      image: imageFour,
      alt: 'Facial treatment'
    },
    {
      id: 5,
      image: imageFive,
      alt: 'Acne treatment'
    },
    {
      id: 6,
      image: imageSix,
      alt: 'Hair regrowth'
    },
    {
      id: 7,
      image: imageSeven,
      alt: 'Skin rejuvenation'
    },
    {
      id: 8,
      image: imageEight,
      alt: 'Wrinkle reduction'
    },
    {
      id: 9,
      image: imageOne,
      alt: 'Complexion improvement'
    }
  ];

  const itemsPerView = 4;
  const maxIndex = Math.max(0, treatments.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#B65B6A] mb-3">
            Our Before & After Gallery
          </h2>
          <p className="text-[#481E0B] text-lg">
            Authentic results from our skin & hair treatment patients
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Carousel Track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              }}
            >
              {treatments.map((treatment) => (
                <div
                  key={treatment.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <Image
                      src={treatment.image}
                      alt={treatment.alt}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="bg-amber-900 text-white p-3 rounded-full hover:bg-amber-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className="bg-amber-900 text-white p-3 rounded-full hover:bg-amber-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Responsive Note */}
        <style jsx>{`
          @media (max-width: 1024px) {
            .flex-shrink-0 {
              width: 33.333% !important;
            }
          }
          @media (max-width: 768px) {
            .flex-shrink-0 {
              width: 50% !important;
            }
          }
          @media (max-width: 640px) {
            .flex-shrink-0 {
              width: 100% !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}