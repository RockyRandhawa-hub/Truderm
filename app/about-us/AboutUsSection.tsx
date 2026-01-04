import React from 'react';
import { Mail, Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import trudermLogoOne from "../assets/trudermLogoOne.png"
import Footer from '../component/Footer';
import DocImage from "../assets/garvitaImage.png"
export default function AboutUsSection() {
  return (
    <>
    <div className='navSection'>
       <nav className=" border-b border-gray-200 px-6">
        <div className="flex justify-between items-center  max-w-8xl mx-auto">
          <Image 
            src={trudermLogoOne} 
            alt="Truderm Logo" 
            width={150}  
            height={60}
            className="object-contain"
          />
          
          <ul className="flex space-x-8 items-center text-base font-medium">
            <Link href="/">
              <li className="hover:text-[#99014C] cursor-pointer transition-colors">
                Home
              </li>
            </Link>
            <Link href="/about-us">
              <li className="hover:text-[#99014C] cursor-pointer transition-colors">
                About
              </li>
            </Link>
            <Link href="/blogs">
              <li className="hover:text-[#99014C] cursor-pointer transition-colors">
                Blogs
              </li>
            </Link>
            <Link href="/treatments">
              <li className="hover:text-[#99014C] cursor-pointer transition-colors">
                Treatments
              </li>
            </Link>
            <Link href="/contact">
              <li>
                <button className="px-6 py-2.5 bg-black rounded-full text-white hover:bg-[#99014C] transition-all duration-300 font-medium">
                  Book Appointment
                </button>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
    <div className="min-h-screen bg-white relative top-[-30px]">
      {/* Pink background section - only for top portion */}
      <div className="bg-[#ED757857] relative overflow-hidden" style={{ height: '500px' }}>
        {/* Decorative elements */}
        <div className="absolute top-20 left-32 text-[#ED757857]">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor">
            <path d="M30 0 L35 25 L60 30 L35 35 L30 60 L25 35 L0 30 L25 25 Z" />
          </svg>
        </div>
        
        <div className="absolute top-16 right-32 text-[#ED757857]">
          <svg width="40" height="40" viewBox="0 0 60 60" fill="currentColor">
            <path d="M30 0 L35 25 L60 30 L35 35 L30 60 L25 35 L0 30 L25 25 Z" />
          </svg>
        </div>

        {/* Large decorative circle */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ED757857] rounded-full opacity-30 transform translate-x-1/3 -translate-y-1/4"></div>

        {/* Title */}
        <div className="pt-16 px-1">
          <h1 className="text-5xl md:text-6xl font-bold text-center text-[#ED75788A]">
            About Our Dr. Garvita Singh
          </h1>
        </div>
      </div>

      {/* Main content - overlapping the pink section */}
      <div className="max-w-6xl mx-auto px-8 -mt-48 relative z-10">
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Image placeholder */}
            <div className="flex justify-center">
              <div className="w-80 h-64  rounded-3xl flex items-center justify-center">
                <div className="w-80 h-65 rounded-3xl flex items-center justify-center text-white text-6xl font-bold">
                  <Image src={DocImage} alt="Dr. Garvita Singh" height={800}  className='rounded-3xl relative' width={800}/>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div>
              <h2 className="text-4xl font-bold text-[#481E0B] mb-2">
                Dr. Garvita Singh
              </h2>
              <p className="text-lg text-[#481E0B] mb-6">
                Consultant Dermatologist & Aesthetic Medicine Expert

              </p>

              <p className="text-[#481E0B] mb-8 leading-2relaxed">
                A dermatologist evaluates skin, hair, and aesthetic concerns through a detailed consultation and clinical assessment. Dr. Garvita Singh focuses on identifying the root cause of skin conditions and creating personalized, evidence-based treatment plans. Her approach combines medical dermatology with advanced aesthetic techniques to deliver safe, effective, and natural-looking results.
              </p>

              {/* Details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <span className="text-[#481E0B] font-semibold w-32">Position</span>
                  <span className="text-[#481E0B]">Consultant Dermatologist & Aesthetic Physician</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#481E0B] font-semibold w-32">Experience</span>
                  <span className="text-[#481E0B]">11 Years</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#481E0B] font-semibold w-32">Email</span>
                  <span className="text-[#481E0B]">Drgarvitasingh26@gmail.com</span>
                </div>
              </div>

              {/* Social icon */}
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10  border-gray-300 rounded-lg flex items-center justify-center hover:border-pink-400 hover:text-pink-400 transition-colors"
                >
                  <Instagram size={20} className='text-[#481E0B]' />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Info Section */}
        <div className="bg-white rounded-3xl shadow-xl p-10 mt-8 mb-8">
          <h2 className="text-3xl font-bold text-[#B65B6A] mb-6">
            Personal Info
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dr. Garvita is a highly experienced Dermatologist and Aesthetic Medicine Expert with over 7 years of clinical experience in Mumbai, where she is also known as a celebrity dermatologist. She specializes in advanced skin, hair, and aesthetic treatments, combining medical dermatology with modern cosmetic techniques.
She is widely appreciated for her precision, ethical approach, and ability to deliver natural-looking results. Dr. Garvita’s calm and friendly demeanor helps patients feel comfortable and confident throughout their treatment journey.

          </p>
          <p className="text-gray-700 leading-relaxed">
            Dr. Garvita is known for her gentle approach and ability to make patients feel comfortable during their visits.
          </p>
        </div>

        {/* Education & Training Section */}
        <div className="bg-white rounded-3xl shadow-xl p-10 mb-16">
          <h2 className="text-3xl font-bold text-[#B65B6A] mb-6">
            Education & Training
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Dr. <span className="font-bold text-gray-800">Garvita’s </span> strong academic background and international training reflect her commitment to excellence in dermatology and aesthetic medicine
          </p>

          {/* MBBS */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-800 mb-3">
              • MBBS
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Dr. Garvita completed her undergraduate medical education in Indore, building a solid foundation in clinical medicine and skin health.
            </p>
          </div>

          {/* MS */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-800 mb-3">
              • Postgraduate Training: MGM Medical College, Aurangabad, Maharashtra (2014)
            </h3>
            <p className="text-gray-700 leading-relaxed">
              She completed her postgraduate medical training at MGM Aurangabad, gaining in-depth clinical experience.
            </p>
          </div>

          {/* Training */}
          <div className="mb-8">
            <h3 className="font-bold text-gray-800 mb-3">
              • PGDCC & FAM: Pune
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Dr. Garvita holds a Post Graduate Diploma in Clinical Cosmetology (PGDCC) and Fellowship in Aesthetic Medicine (FAM), enhancing her expertise in advanced dermatological and aesthetic treatments.



            </p>
             <h3 className="font-bold text-gray-800 mt-4">
              • International Training in Aesthetic Procedures
            </h3>

             <p className="text-gray-700 leading-relaxed mt-2">
She has undergone specialized training in filler injection techniques from Singapore and South Korea, allowing her to offer globally aligned, safe, and advanced aesthetic solutions.
            </p>
          </div>

          {/* Philosophy of Care */}
          <h2 className="text-3xl font-bold text-[#B65B6A] mb-6 mt-10">
            Philosophy Of Care
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            According to Dr. <span className="font-bold text-gray-800">Garvita</span>, healthy skin is a reflection of overall well-being and confidence. She believes that every individual’s skin is unique and therefore requires a personalized, science-backed approach rather than one-size-fits-all solutions.
          </p>

          <p className="text-gray-700 leading-relaxed">
          Her philosophy of care focuses on understanding the root cause of skin concerns and educating patients about their skin health. Dr. Garvita ensures that patients are well-informed about treatment options, expected outcomes, and long-term skin maintenance. She strongly advocates preventive dermatology and early intervention to help patients achieve healthy, radiant skin at every stage of life.
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}