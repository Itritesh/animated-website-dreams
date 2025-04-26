
import React from 'react';

interface FloatingChipsProps {
  className?: string;
}

const FloatingChips: React.FC<FloatingChipsProps> = ({ className }) => {
  const chips = [
    { delay: '0s', duration: '15s', size: 'w-12 h-12', top: '10%', left: '5%' },
    { delay: '2s', duration: '18s', size: 'w-16 h-16', top: '30%', left: '75%' },
    { delay: '1s', duration: '20s', size: 'w-10 h-10', top: '70%', left: '15%' },
    { delay: '3s', duration: '17s', size: 'w-14 h-14', top: '20%', left: '85%' },
    { delay: '0.5s', duration: '19s', size: 'w-12 h-12', top: '60%', left: '80%' },
    { delay: '2.5s', duration: '16s', size: 'w-8 h-8', top: '85%', left: '10%' },
    { delay: '1.5s', duration: '21s', size: 'w-10 h-10', top: '40%', left: '20%' },
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {chips.map((chip, index) => (
        <div
          key={index}
          className={`absolute ${chip.size} animate-float opacity-75 z-10`}
          style={{
            top: chip.top,
            left: chip.left,
            animationDelay: chip.delay,
            animationDuration: chip.duration,
          }}
        >
          <img 
            src="/lovable-uploads/fdb72023-31dd-4af3-9937-cd0513ee32cb.png" 
            alt="Floating Chip" 
            className="w-full h-full object-contain rotate-chip"
            style={{ animation: `rotate-slow ${chip.duration} linear infinite` }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingChips;
