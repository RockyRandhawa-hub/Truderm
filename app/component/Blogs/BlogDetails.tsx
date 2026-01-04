import React, { useState } from 'react';
import { ArrowLeft, Clock, Calendar, Bookmark, Twitter, Linkedin, Facebook } from 'lucide-react';

interface BlogDetailProps {
  blog: {
    id: number;
    title: string;
    date: string;
    readTime: string;
    content: string;
    category: string;
    image: string;
  };
  onBack: () => void;
}

export default function BlogDetail({ blog, onBack }: BlogDetailProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={blog.image} 
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all shadow-lg group"
        >
          <ArrowLeft className="w-5 h-5 text-gray-800 group-hover:-translate-x-1 transition-transform" />
        </button>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1 bg-rose-600 text-white text-sm font-medium rounded-full mb-4">
              {blog.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {blog.title}
            </h1>
            <div className="flex items-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {blog.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {blog.readTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Action Bar */}
        <div className="flex items-center justify-between mb-12 pb-6 border-b">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`p-2 rounded-full transition-all ${
                isBookmarked 
                  ? 'bg-rose-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Bookmark className="w-5 h-5" fill={isBookmarked ? "currentColor" : "none"} />
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 mr-2">Share:</span>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-all">
              <Twitter className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-700 transition-all">
              <Linkedin className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-all">
              <Facebook className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Article Content */}
        <article 
          className="prose prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-gray-900
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-rose-600 prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Call to Action */}
        <div className="mt-16 p-8 bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Found this helpful?</h3>
          <p className="text-gray-600 mb-6">Subscribe to our newsletter for more health and wellness tips.</p>
          <div className="flex gap-3">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-600"
            />
            <button className="px-6 py-3 bg-rose-600 text-white rounded-lg font-medium hover:bg-rose-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}