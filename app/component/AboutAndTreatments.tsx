"use client";
import Image from "next/image";
import React, { useState } from "react";
import ImageOne from "../assets/ImageOne.jpg";
import ImageTwo from "../assets/ImageTwo.jpg";
import ImageThree from "../assets/ImageThree.jpg";
import ImageFour from "../assets/ImageFour.jpg";
import ImageFive from "../assets/ImageFive.jpg";

const AboutAndTreatments = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const treatments = [
    { name: "Platelet Rich Plasma", image: ImageOne },
    { name: "Acne", image: ImageTwo },
    { name: "Growth Factor", image: ImageThree },
    { name: "Hair Loss Treatment", image: ImageFour },
    { name: "Pigmentation", image: ImageFive },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % treatments.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + treatments.length) % treatments.length);
  };

  return (
    <div>
      {/* About Dr. Garvita Singh Section */}
      <section className="bg-[#ED757857] py-16 px-8 mt-8">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-wider mb-4 text-[#481E0B]-700">
            ABOUT DR. GARVITA SINGH
          </p>

          <h2 className="text-4xl md:text-5xl weight font-extrabold text-[#B65B6A] mb-6">
            Trusted & Passionate<br />
            Dermatologist - Expert in Skin & Hair Care
          </h2>

          <p className="text-[#481E0B] max-w-3xl mx-auto leading-relaxed mb-8 text-[15px]">
            Dr. Garvita Singh is a certified dermatologist with over 10 years of experience in treating a wide range of
            skin and hair concerns. She specializes in acne, pigmentation, hair loss, anti-aging, and advanced skin
            treatments using the latest USFDA-approved technology. Known for her personalized approach, Dr. Singh
            ensures every patient receives tailored care to achieve healthy, radiant skin. Her dedication and expertise
            have earned the trust of thousands of patients in Indore, making her one of the most sought-after
            dermatologists in the region.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
            <div className="flex items-center gap-2 justify-center">
              <svg className="w-6 h-6 text-[#8B4560]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold text-[#481E0B]">experienced team</span>
            </div>

            <div className="flex items-center gap-2 justify-center">
              <svg className="w-6 h-6 text-[#8B4560]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold text-[#481E0B]">comprehensive services</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <svg className="w-6 h-6 text-[#8B4560]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold text-[#481E0B]">state-of-the-art technology</span>
            </div>

            <div className="flex items-center gap-2 justify-center">
              <svg className="w-6 h-6 text-[#8B4560]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold text-[#481E0B]">emergency services</span>
            </div>
          </div>

          <button className="px-6 py-3 bg-[#A85373] text-white rounded-full font-medium hover:bg-[#8f4561] transition flex items-center gap-2 mx-auto">
            Read More About Us
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="bg-[#F7F7F7] py-16 px-8 ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#B65B6A] text-center mb-12">
            Treatments We Offer
          </h2>

          {/* Treatment Cards */}
          <div className="flex justify-center items-center gap-18 mb-8 flex-wrap mt-">
            {treatments.map((treatment, index) => (
              <div
                key={index}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg overflow-hidden">
                  <Image 
                    src={treatment.image} 
                    alt={treatment.name}
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="font-bold text-center text-gray-800 max-w-[140px]">
                  {treatment.name}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition text-2xl"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition text-2xl"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section Starter */}
   
    </div>
  );
};

export default AboutAndTreatments;