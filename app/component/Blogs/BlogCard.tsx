import React from 'react';
import { Clock, Calendar } from 'lucide-react';

interface BlogCardProps {
  blog: {
    id: number;
    title: string;
    date: string;
    readTime: string;
    excerpt: string;
    image: string;
  };
  onClick: (blog: any) => void;
}

export default function BlogCard({ blog, onClick }: BlogCardProps) {
  return (
    <div 
      onClick={() => onClick(blog)}
      className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-rose-200 to-pink-300">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500" />
        <img 
          src={blog.image} 
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {blog.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {blog.readTime}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-rose-600 transition-colors line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-4">
          {blog.excerpt}
        </p>
        <button className="text-rose-600 text-sm font-medium group-hover:gap-2 flex items-center gap-1 transition-all">
          Learn More
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </div>
  );
}