import React from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import stretchMark from "../assets/stretchMarks.jpeg"
import psoriasis from "../assets/psoriasis.jpg"
import pimpleAcne from "../assets/Pimple.jpg"
import Image from 'next/image'
const Blogs = () => {
  const blogPosts = [
    {
      date: 'May 1, 2025',
      title: 'What is the Difference Between Pimple and Acne?',
      image: pimpleAcne
    },
    {
      date: 'May 1, 2025',
      title: 'What is Psoriasis? Full Information on Symptoms, Causes & Remedies',
      image: psoriasis
    },
    {
      date: 'May 4, 2025',
      title: 'Why Stretch Marks Form and the Best Ways to Treat Them',
      image: stretchMark
    }
  ]

  return (
    <div className="py-12 px-4">
      <div className="heading mb-12">
        <h2 className="text-4xl font-bold text-center my-4 text-[#B65B6A]">Blogs</h2>     
        <h4 className='text-[21px] leading-3 tracking-widest font-bold text-center py-4 text-[#B65B6A]'>Skin Health & Care insights</h4>
        <p className="text-center text-[#481E0B] max-w-8xl justify-center mx-auto py-2">
          Stay informed with the latest skincare tips, expert advice, and dermatology news. Our blog covers everything from treatment <br />
          insights to lifestyle tips for maintaining healthy, glowing skin.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 max-w-7xl  mx-auto mb-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="rounded-3xl overflow-hidden shadow-lg bg-[#ED757857] w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
            <div className="h-64 bg-[#C4A5AA]">
              <Image src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <p className="text-sm text-[#481E0B] mb-3">{post.date}</p>
              <h3 className="text-xl font-bold text-[#481E0B] mb-4 min-h-[3.5rem]">{post.title}</h3>
              <button className="text-[#B65B6A] font-semibold hover:underline">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Link href="/blogs">
          <button className="bg-[#B65B6A] hover:bg-[#A04B5A] text-white font-semibold px-8 py-3 rounded-full flex items-center gap-2 transition-colors">
            View More
            <ArrowRight size={20} />
          </button>
        </Link>
      </div>
      </div>
    
  )
}

export default Blogs