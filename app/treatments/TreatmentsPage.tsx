'use client';

import { useState, useEffect } from 'react';
import { Sparkles, Shield, Zap, Heart, Star, ArrowRight, Check } from 'lucide-react';

const treatments = [
  {
    id: 1,
    title: 'Botox & Fillers',
    description: 'Advanced anti-aging injectable treatments to smooth wrinkles and restore facial volume',
    icon: '💉',
    features: ['Wrinkle reduction', 'Volume restoration', 'Natural results'],
    duration: '30-45 mins',
    results: 'Immediate',
    gradient: 'from-pink-500 to-rose-600'
  },
  {
    id: 2,
    title: 'Chemical Peels',
    description: 'Professional exfoliation treatment for radiant, youthful skin and even tone',
    icon: '✨',
    features: ['Skin rejuvenation', 'Acne treatment', 'Pigmentation correction'],
    duration: '45-60 mins',
    results: '7-14 days',
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    id: 3,
    title: 'Laser Hair Removal',
    description: 'Permanent hair reduction using advanced laser technology',
    icon: '⚡',
    features: ['Long-lasting results', 'Smooth skin', 'Minimal discomfort'],
    duration: '15-60 mins',
    results: '4-8 sessions',
    gradient: 'from-rose-500 to-pink-600'
  },
  {
    id: 4,
    title: 'Acne Treatment',
    description: 'Comprehensive treatment plans to clear acne and prevent scarring',
    icon: '🎯',
    features: ['Clear complexion', 'Scar prevention', 'Long-term control'],
    duration: '30 mins',
    results: '4-12 weeks',
    gradient: 'from-pink-600 to-rose-500'
  },
  {
    id: 5,
    title: 'Microneedling',
    description: 'Collagen induction therapy for skin rejuvenation and scar reduction',
    icon: '🔬',
    features: ['Collagen boost', 'Scar reduction', 'Skin tightening'],
    duration: '60 mins',
    results: '4-6 weeks',
    gradient: 'from-fuchsia-500 to-pink-600'
  },
  {
    id: 6,
    title: 'Hydrafacial',
    description: 'Deep cleansing, exfoliation, and hydration for glowing skin',
    icon: '💧',
    features: ['Deep cleansing', 'Instant glow', 'Zero downtime'],
    duration: '30 mins',
    results: 'Immediate',
    gradient: 'from-pink-500 to-fuchsia-600'
  },
  {
    id: 7,
    title: 'PRP Therapy',
    description: 'Platelet-rich plasma for hair restoration and skin rejuvenation',
    icon: '🩸',
    features: ['Hair regrowth', 'Skin renewal', 'Natural healing'],
    duration: '60-90 mins',
    results: '3-6 months',
    gradient: 'from-rose-600 to-pink-500'
  },
  {
    id: 8,
    title: 'Skin Tightening',
    description: 'Non-surgical face and body contouring using RF technology',
    icon: '🎨',
    features: ['Lift & firm', 'No surgery', 'Natural results'],
    duration: '45-60 mins',
    results: '2-6 months',
    gradient: 'from-pink-600 to-fuchsia-500'
  },
  {
    id: 9,
    title: 'Tattoo Removal',
    description: 'Safe and effective laser tattoo removal with minimal scarring',
    icon: '🎭',
    features: ['Complete removal', 'Minimal scarring', 'All colors'],
    duration: '15-30 mins',
    results: '6-12 sessions',
    gradient: 'from-fuchsia-600 to-rose-500'
  },
  {
    id: 10,
    title: 'Mole & Wart Removal',
    description: 'Safe removal of benign skin lesions with advanced techniques',
    icon: '🔍',
    features: ['Safe removal', 'Minimal scarring', 'Quick procedure'],
    duration: '15-30 mins',
    results: 'Immediate',
    gradient: 'from-rose-500 to-pink-500'
  },
  {
    id: 11,
    title: 'Anti-Aging Treatments',
    description: 'Comprehensive solutions to reverse signs of aging and restore youth',
    icon: '⏰',
    features: ['Wrinkle reduction', 'Skin firming', 'Radiant glow'],
    duration: '60 mins',
    results: 'Progressive',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    id: 12,
    title: 'Pigmentation Treatment',
    description: 'Advanced solutions for dark spots, melasma, and uneven skin tone',
    icon: '🌟',
    features: ['Even skin tone', 'Spot reduction', 'Brightening'],
    duration: '30-45 mins',
    results: '4-8 weeks',
    gradient: 'from-fuchsia-500 to-rose-600'
  }
];

export default function TreatmentsPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#99014c]/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-pink-500/10 via-transparent to-transparent"></div>

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(153, 1, 76, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      ></div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-20 space-y-6">
            <div
              className="inline-block animate-bounce"
              style={{ animationDuration: '3s' }}
            >
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#99014c] to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-[#99014c]/50 transform rotate-12 hover:rotate-0 transition-transform duration-500">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1
              className="text-7xl md:text-8xl font-black bg-gradient-to-r from-white via-pink-200 to-[#99014c] bg-clip-text text-transparent animate-pulse"
              style={{ animationDuration: '4s' }}
            >
              Our Treatments
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience world-class dermatological treatments with cutting-edge technology and personalized care
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <Shield className="w-5 h-5 text-[#99014c]" />
                <span className="text-white font-semibold">FDA Approved</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <Star className="w-5 h-5 text-[#99014c]" />
                <span className="text-white font-semibold">Expert Dermatologists</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <Heart className="w-5 h-5 text-[#99014c]" />
                <span className="text-white font-semibold">Personalized Care</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {treatments.map((treatment, index) => (
              <div
                key={treatment.id}
                className="group relative"
                onMouseEnter={() => setHoveredCard(treatment.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#99014c] to-pink-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>

                <div
                  className="relative h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:border-[#99014c]/50"
                  style={{
                    transform: hoveredCard === treatment.id
                      ? 'translateY(-12px) rotateX(5deg) rotateY(5deg)'
                      : 'translateY(0) rotateX(0) rotateY(0)',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#99014c]/20 to-transparent rounded-full blur-2xl"></div>

                  <div className="relative space-y-6">
                    <div className="text-6xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      {treatment.icon}
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#99014c] transition-colors duration-300">
                        {treatment.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {treatment.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {treatment.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 text-sm text-gray-300"
                          style={{
                            animation: hoveredCard === treatment.id
                              ? `slideInLeft 0.3s ease-out ${idx * 0.1}s both`
                              : 'none'
                          }}
                        >
                          <div className="w-5 h-5 rounded-full bg-[#99014c]/20 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-[#99014c]" />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Duration</div>
                        <div className="text-white font-semibold">{treatment.duration}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Results</div>
                        <div className="text-white font-semibold">{treatment.results}</div>
                      </div>
                    </div>

                    <button className="w-full mt-6 bg-gradient-to-r from-[#99014c] to-pink-600 hover:from-[#99014c]/90 hover:to-pink-600/90 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 transform group-hover:scale-105 shadow-lg shadow-[#99014c]/50">
                      Book Consultation
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-32 text-center space-y-8">
            <div className="inline-block">
              <div className="bg-gradient-to-r from-[#99014c] to-pink-600 p-1 rounded-2xl">
                <div className="bg-slate-900 rounded-2xl px-8 py-4">
                  <p className="text-2xl font-bold text-white">
                    Not sure which treatment is right for you?
                  </p>
                </div>
              </div>
            </div>

            <button className="group bg-white hover:bg-gray-100 text-slate-900 font-bold py-5 px-10 rounded-xl flex items-center justify-center gap-3 mx-auto transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-pink-500/50">
              <Zap className="w-6 h-6 text-[#99014c]" />
              <span className="text-xl">Get Free Consultation</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </button>

            <p className="text-gray-400 text-lg">
              Our expert dermatologists will help you choose the perfect treatment plan
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
