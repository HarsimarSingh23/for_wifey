import React from "react";
import Petal from "../assets/petal.png"; // <-- your uploaded petal image

const SakuraAnimation = () => {
  const petals = Array.from({ length: 20 }, (_, i) => (
    <img
      key={i}
      src={Petal}
      alt="sakura petal"
      className="sakura-petal"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 15}s`,
        animationDuration: `${10 + Math.random() * 8}s`,
        '--random-': `${(Math.random() - 0.5) * 200}px`,
        '--random-x2': `${(Math.random() - 0.5) * 150}px`,
        '--random-x3': `${(Math.random() - 0.5) * 100}px`,
        opacity: Math.random() * 0.8 + 0.2,
        width: `${Math.random() * 25 + 20}px`, // random size for variety
      }}
    />
  ));

  return (
    <>
      <div className="sakura-container">{petals}</div>
      <style jsx>{`
        .sakura-container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 5;
        }

        .sakura-petal {
          position: absolute;
          top: -50px;
          animation: sakuraFall linear infinite;
          filter: drop-shadow(0 0 6px rgba(255, 180, 200, 0.6));
        }

        @keyframes sakuraFall {
          0% {
            transform: translateY(-10px) translateX(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          25% {
            transform: translateY(25vh) translateX(var(--random-x))
              rotate(90deg);
            opacity: 0.9;
          }
          50% {
            transform: translateY(50vh) translateX(var(--random-x2))
              rotate(180deg);
            opacity: 0.7;
          }
          75% {
            transform: translateY(75vh) translateX(var(--random-x3))
              rotate(270deg);
            opacity: 0.5;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(110vh) translateX(var(--random-x))
              rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default SakuraAnimation;
