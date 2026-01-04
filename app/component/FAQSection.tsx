"use client"
import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Faq from "../assets/faq.png"
import Image from 'next/image'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(2) // Third item open by default

  const faqs = [
    {
      question: 'What dermatology services do you offer?',
      answer: 'We offer a comprehensive range of dermatology services including acne treatment, anti-aging procedures, laser treatments, chemical peels, PRP therapy, skin rejuvenation, pigmentation treatment, and personalized skincare consultations.'
    },
    {
      question: 'How do I know which treatment is right for my skin?',
      answer: 'Our experienced dermatologists conduct thorough skin assessments during your consultation. We analyze your skin type, concerns, and goals to recommend the most effective treatment plan tailored specifically for you.'
    },
    {
      question: 'Are your treatments safe for all skin types?',
      answer: 'Yes, our treatments are completely safe for all skin types. Each procedure is customized according to your skin\'s needs, sensitivity, and concerns. Our experts use dermatologically tested products and follow strict safety protocols to ensure effective and gentle results for every skin tone and type.'
    },
    {
      question: 'Do you provide PRP therapy for hair loss?',
      answer: 'Yes, we provide advanced PRP (Platelet-Rich Plasma) therapy for hair loss. This treatment stimulates hair growth, strengthens hair follicles, and improves hair density using your body\'s own growth factors for natural and effective results.'
    },
    {
      question: 'How do I book a consultation or treatment?',
      answer: 'You can book a consultation by calling our clinic directly, using our online booking system on our website, or by visiting our clinic in person. Our team will help you schedule an appointment at your convenience.'
    }
  ]

 const toggleFAQ = (index: number) => {
  setOpenIndex(openIndex === index ? null : index)
}

  return (
    <div className="bg-[#ED757857] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Image and heading */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#481E0B] mb-4">
              FAQs About Truderm Skin Clinic in Indore
            </h2>
            <p className="text-[#481E0B] mb-8">
              Find answers to common questions about our dermatology services and care approach.
            </p>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={Faq}
                alt="Dermatology treatment" 
                className="w-[640px] h-[305px] object-cover"
              />
            </div>
          </div>

          {/* Right side - FAQ accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`rounded-2xl transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-[white] shadow-sm' 
                    : 'bg-[#ED757857 shadow-md '
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left"
                >
                  <span className="text-[#B65B6A] font-semibold text-lg pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#99014C] flex items-center justify-center">
                    {openIndex === index ? (
                      <ChevronUp size={20} className="text-[#B65B6A]" />
                    ) : (
                      <ChevronDown size={20} className="text-[#B65B6A]" />
                    )}
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-[#481E0B]">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQSection