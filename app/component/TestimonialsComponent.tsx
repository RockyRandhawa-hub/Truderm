"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, MapPin } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string
  location: string;
  image: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "RAHUL SHARMA",
    location: "Indore, Madhya Pradesh",
    image: "https://images.unsplash.com/photo-1552642986-ccb41e7059e7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "The dermatologist was great with my skin concerns and made me feel at ease, and the entire staff was kind and attentive. I recently visited Truderm for acne treatment, and I was so impressed with the care I received.",
    rating: 4.5
  },
  {
    id: 2,
    name: "ANJALI VERMA",
    location: "Bhopal, Madhya Pradesh",
    image: "https://images.unsplash.com/photo-1710655180941-056bf55fed7f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "I was facing the lots of skin breakouts but after consulting with Dr.Garvita everything felt so easier and smooth the treatment was very smooth and so the Dr is and that is where it make impacts highly recommended to everyone .",
    rating: 4.5
  },
  {
    id: 3,
    name: "VIKRAM SINGH",
    location: "Gwalior, Madhya Pradesh",
    image: "https://plus.unsplash.com/premium_photo-1689870831572-c9a50a5d2025?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Since a teenage i was facing the lots of acne scars and at a point i gaave up thought its incurable but there comes the magician Dr.Garvita the promsiing results in jsut 8 weeks , Best in the segment and her freindly nautre is cherry on the cake.",
    rating: 4.5
  }
];


const TestimonialsComponent: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    setMousePosition({ x, y });
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-md" />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative w-5 h-5">
            <Star className="w-5 h-5 text-gray-300 absolute" />
            <div className="overflow-hidden w-1/2 absolute">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-md" />
            </div>
          </div>
        );
      } else {
        stars.push(
          <Star key={i} className="w-5 h-5 text-gray-300" />
        );
      }
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-rose-50 to-pink-100 py-16 px-4 relative overflow-hidden">
      {/* Animated Background Elements - More Subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-rose-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <Quote className="w-64 h-64 text-[#B65B6A]" />
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold font-black text-[#B65B6A] mb-4 tracking-tight relative">
            What Our Clients Say
          </h1>
          <div className="h-1 w-32 bg-[#B65B6A] mx-auto rounded-full shadow-lg"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          {/* Left Side - Client List */}
          <div className="w-full lg:w-auto space-y-6">
            {testimonials.map((testimonial, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={testimonial.id}
                  onClick={() => setActiveIndex(index)}
                  className={`
                    relative cursor-pointer transition-all duration-500 group
                    ${isActive ? 'scale-110' : 'scale-100 hover:scale-105'}
                  `}
                  style={{
                    transform: isActive ? 'translateZ(50px)' : 'translateZ(0)',
                  }}
                >
                  {/* Glow Effect */}
                  {isActive && (
                    <div className="absolute -inset-2 bg-[#B65B6A]/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-75 transition duration-500 animate-pulse"></div>
                  )}

                  {/* Card */}
                  <div
                    className={`
                      relative flex items-center gap-4 p-4 rounded-2xl backdrop-blur-md
                      transition-all duration-500
                      ${isActive
                        ? 'bg-white/90 shadow-2xl border-2 border-[#B65B6A]'
                        : 'bg-white/70 shadow-lg hover:bg-white/85 hover:shadow-xl border border-white/60'
                      }
                    `}
                  >
                    {/* Profile Image */}
                    <div className="relative">
                      <div className={`
                        absolute -inset-1 rounded-full transition-all duration-500
                        ${isActive
                          ? 'bg-[#B65B6A] animate-spin-slow'
                          : 'bg-gray-300'
                        }
                      `}></div>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className={`
                          relative w-20 h-20 rounded-full object-cover
                          ring-4 ring-white shadow-xl
                          transition-all duration-500
                          ${isActive ? 'scale-110' : 'scale-100'}
                        `}
                      />
                      {isActive && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#B65B6A] rounded-full flex items-center justify-center shadow-lg">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>

                    {/* Name and Location */}
                    <div className="flex-1">
                      <h3 className={`
                        font-bold tracking-wide transition-all duration-300
                        ${isActive ? 'text-[#B65B6A] text-lg' : 'text-gray-800 text-base'}
                      `}>
                        {testimonial.name}
                      </h3>
                      <div className="flex items-center gap-1 mt-1">
                        <MapPin className={`w-3 h-3 ${isActive ? 'text-[#B65B6A]' : 'text-gray-500'}`} />
                        <p className={`text-sm ${isActive ? 'text-[#B65B6A]' : 'text-gray-600'}`}>
                          {testimonial.location}
                        </p>
                      </div>
                    </div>

                    {/* Active Indicator */}
                    {isActive && (
                      <div className="w-3 h-3 bg-[#B65B6A] rounded-full animate-pulse shadow-lg"></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center - Timeline */}
          <div className="hidden lg:flex flex-col items-center justify-center relative h-[500px]">
            {/* Gradient Line */}
            <div className="absolute w-1 h-full bg-gradient-to-b from-[#B65B6A]/20 via-[#B65B6A]/60 to-[#B65B6A]/20 rounded-full shadow-lg">
              <div className="absolute inset-0 bg-[#B65B6A] rounded-full blur-sm opacity-50"></div>
            </div>

            {/* Timeline Dots */}
            {testimonials.map((_, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={index}
                  className="relative z-10 my-auto"
                  onClick={() => setActiveIndex(index)}
                >
                  <div
                    className={`
                      w-6 h-6 rounded-full cursor-pointer
                      transition-all duration-500
                      ${isActive
                        ? 'bg-[#B65B6A] scale-150 shadow-2xl'
                        : 'bg-white border-4 border-[#B65B6A]/40 scale-100 hover:scale-125 hover:border-[#B65B6A]'
                      }
                    `}
                    style={{
                      boxShadow: isActive ? '0 0 30px rgba(182, 91, 106, 0.8)' : 'none',
                    }}
                  >
                    {isActive && (
                      <div className="absolute inset-0 rounded-full bg-[#B65B6A] animate-ping opacity-75"></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Testimonial Card */}
          <div
            className="w-full lg:w-[500px] relative perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
              setIsHovering(false);
              setMousePosition({ x: 0, y: 0 });
            }}
          >
            {/* Background Glow - More Subtle */}
            <div className="absolute -inset-4 bg-[#B65B6A]/20 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>

            {/* Main Card */}
            <div
              className="relative bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-10 md:p-14 overflow-hidden transition-all duration-300"
              style={{
                transform: isHovering
                  ? `rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg) translateZ(20px)`
                  : 'rotateY(0deg) rotateX(0deg) translateZ(0)',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#B65B6A]/10 via-[#B65B6A]/5 to-transparent rounded-full -mr-32 -mt-32"></div>

              {/* Quote Icon */}
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-[#B65B6A] rounded-2xl blur-lg opacity-30"></div>
                <div className="relative w-16 h-16 bg-[#B65B6A] rounded-2xl flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform duration-300">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="relative text-gray-700 text-lg leading-relaxed mb-8 font-medium" style={{ transform: 'translateZ(30px)' }}>
                {testimonials[activeIndex].text}
              </p>

              {/* Rating */}
              <div className="relative flex gap-2 mb-10" style={{ transform: 'translateZ(40px)' }}>
                {renderStars(testimonials[activeIndex].rating)}
              </div>

              {/* User Info */}
              <div className="relative flex items-center gap-4 mb-8" style={{ transform: 'translateZ(50px)' }}>
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-[#B65B6A]/20 shadow-lg"
                />
                <div>
                  <h3 className="font-bold text-gray-900 text-lg tracking-wide">
                    {testimonials[activeIndex].name}
                  </h3>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin className="w-4 h-4 text-[#B65B6A]" />
                    <p className="text-[#B65B6A] font-medium">
                      {testimonials[activeIndex].location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="relative flex gap-4" style={{ transform: 'translateZ(60px)' }}>
                <button
                  onClick={handlePrevious}
                  className="group relative w-14 h-14 rounded-xl bg-[#B65B6A]/10 hover:bg-[#B65B6A]/20 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 active:scale-95"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6 text-[#B65B6A] relative z-10" />
                </button>

                <button
                  onClick={handleNext}
                  className="group relative w-14 h-14 rounded-xl bg-[#B65B6A] hover:bg-[#B65B6A]/90 flex items-center justify-center transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-110 active:scale-95"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6 text-white relative z-10" />
                  <div className="absolute inset-0 rounded-xl bg-[#B65B6A] blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#B65B6A]/20 to-transparent rounded-full -ml-16 -mb-16"></div>
            </div>
          </div>
        </div>

        {/* Bottom Indicator Dots for Mobile */}
        <div className="flex lg:hidden justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`
                h-3 rounded-full transition-all duration-300
                ${activeIndex === index
                  ? 'w-12 bg-[#B65B6A] shadow-lg'
                  : 'w-3 bg-[#B65B6A]/30 hover:bg-[#B65B6A]/50'
                }
              `}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsComponent;