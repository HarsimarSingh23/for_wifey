import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import SakuraAnimation from './SakuraAnimation';
import CoupleImage from '../assets/couple_2.png';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f5f3ef]">
      {/* Sakura Animation Layer */}
      <SakuraAnimation />

      {/* Centered Polaroid Photo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={CoupleImage}
          alt="Japanese couple embracing"
          className="max-h-[80%] max-w-[90%] object-contain rounded-lg shadow-2xl"
        />
        {/* subtle vintage polaroid overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2c2c2c]/40 via-[#e8e6e1]/10 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#d6cfc4]/30 via-transparent to-[#b6a998]/20"></div>
      </div>

      {/* Main Content (Caption + Button) */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-end pb-24 px-4">
        {/* Title and Subtitle */}
        <div className="text-center mb-10 space-y-4">
          <h1 className="text-3xl md:text-5xl font-light tracking-wide drop-shadow-2xl text-white/90 leading-relaxed">
            An old school marriage with a whole new modern love life
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light tracking-wider drop-shadow-lg">
            Moments of Love
          </p>
        </div>

        {/* Center Action Button */}
        <button
          onClick={() => navigate('/next')}
          className="group relative px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 
                     text-white rounded-full shadow-2xl hover:shadow-3xl hover:bg-white/20 
                     transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#d6cfc4]/30 to-[#b6a998]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative flex items-center justify-center space-x-3">
            <Heart className="w-5 h-5 fill-current animate-pulse" />
            <span className="text-lg md:text-xl font-light tracking-wide">Enter Our World</span>
          </div>
          <div className="absolute inset-0 rounded-full bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-700"></div>
        </button>

        {/* Floating Decorative Elements */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-white/40 rounded-full animate-pulse float-animation"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-white/30 rounded-full animate-pulse delay-1000 float-animation"></div>
        <div className="absolute bottom-32 left-20 w-4 h-4 bg-white/50 rounded-full animate-pulse delay-500 float-animation"></div>
        <div className="absolute top-1/3 right-10 w-2 h-2 bg-white/35 rounded-full animate-pulse delay-700 float-animation"></div>
      </div>
    </div>
  );
};

export default LandingPage;
