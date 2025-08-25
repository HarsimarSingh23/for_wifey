import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";

import polaroidBg from "../assets/polaroid_background_4.png";
import april from "../assets/us/april.png";
import may from "../assets/us/may.jpg";
import june from "../assets/us/june.png";
import july from "../assets/us/july.jpg";
import august from "../assets/us/august.png";

interface PopupContent {
  month: string;
  title: string;
  content: string;
  image: string;
}

const popupData: PopupContent[] = [
  {
    month: "April",
    title: "Soul Mates 💞",
    content:
      "With you, I feel the magic of belongingness 🌸... my forever home is by your side 🤗❤️",
    image: april
  },
  {
    month: "May",
    title: "Whispers of Love 💌",
    content:
      "No words could ever capture how deeply I feel for you, my love... 💕 Every heartbeat is a poem written just for us ✨",
    image: may
  },
  {
    month: "June",
    title: "Light & Warmth ☀️",
    content:
      "You are my guiding star 🌟, my sunshine through the storms ... always keep shining, my better half 💖",
    image: june
  },
  {
    month: "July",
    title: "Queen of My Heart 👑",
    content:
      "My wifey, my crown, my joy 👸💝... every vow with you is a promise I’ll cherish forever 💍✨",
    image: july
  },
  {
    month: "August",
    title: "Blooming Love 🌹",
    content:
      "Like fresh flowers in the morning dew 🌷, you bring sweetness and freshness to my life forever 🌼💞",
    image: august
  }
];


// tilt angles aligned with your generated background
const tiltClasses = [
  "rotate-[-4deg]",
  "rotate-[3deg]",
  "rotate-[-2deg]",
  "rotate-[5deg]",
  "rotate-[-3deg]"
];

const SecondPage = () => {
  const navigate = useNavigate();
  const [selectedPopup, setSelectedPopup] = useState<PopupContent | null>(null);

  const openPopup = (popup: PopupContent) => {
    setSelectedPopup(popup);
  };

  const closePopup = () => {
    setSelectedPopup(null);
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${polaroidBg})`
      }}
    >
      {/* Overlay to soften */}
      <div className="absolute inset-0 bg-white/10"></div>

      {/* Header */}
      <div className="relative z-10 p-6">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center space-x-3 px-4 py-2 bg-white/80 backdrop-blur-md border border-gray-200 text-gray-700 rounded-full shadow-lg hover:shadow-xl hover:bg-white transform hover:-translate-y-1 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-light">Back to Home</span>
        </button>
      </div>

      {/* Title */}
      <div className="relative z-10 text-center mt-6 mb-10">
        <h1 className="text-4xl md:text-6xl font-light text-gray-800 tracking-wide mb-2">
         ❤️  Memory Wall ❤️
        </h1>
        <p className="text-lg text-gray-600 font-light">
          Click the photos
        </p>
      </div>

      {/* Polaroids positioned in two rows (3 + 2) */}
      <div className="relative z-10 flex flex-col items-center gap-12 pb-20">
        {/* Top row (3 polaroids) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {popupData.slice(0, 3).map((popup, index) => (
            <div
              key={popup.month}
              onClick={() => openPopup(popup)}
              className={`cursor-pointer bg-white shadow-lg border border-gray-200 p-4 rounded-md transform ${tiltClasses[index]} hover:rotate-0 hover:scale-105 transition-all duration-500`}
            >
              <img
                src={popup.image}
                alt={popup.title}
                className="w-48 h-64 object-cover rounded-sm"
              />
              <div className="text-center mt-2">
                <span className="text-gray-700 font-semibold text-sm">
                  {popup.month}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row (2 polaroids) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
          {popupData.slice(3).map((popup, index) => (
            <div
              key={popup.month}
              onClick={() => openPopup(popup)}
              className={`cursor-pointer bg-white shadow-lg border border-gray-200 p-4 rounded-md transform ${tiltClasses[index + 3]} hover:rotate-0 hover:scale-105 transition-all duration-500`}
            >
              <img
                src={popup.image}
                alt={popup.title}
                className="w-48 h-64 object-cover rounded-sm"
              />
              <div className="text-center mt-2">
                <span className="text-gray-700 font-semibold text-sm">
                  {popup.month}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 transform animate-in fade-in zoom-in duration-300">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-all duration-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6 text-center">
              <img
                src={selectedPopup.image}
                alt={selectedPopup.title}
                className="w-full h-56 object-cover rounded-xl shadow-lg mb-4"
              />
              <h3 className="text-2xl font-light text-gray-800 mb-2">
                {selectedPopup.month}
              </h3>
              <h4 className="text-lg text-gray-700 font-medium">
                {selectedPopup.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {selectedPopup.content}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecondPage;
