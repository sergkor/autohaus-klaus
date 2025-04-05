'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface SlideshowProps {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
}

const Slideshow: React.FC<SlideshowProps> = ({ 
  images, 
  autoPlay = true, 
  interval = 5000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);
    
    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slideshow-container">
      <div className="slideshow">
        <div className="slide">
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            width={1200}
            height={600}
            priority={currentIndex === 0}
          />
        </div>
        
        <button className="slideshow-button prev" onClick={goToPrevious}>
          &#10094;
        </button>
        
        <button className="slideshow-button next" onClick={goToNext}>
          &#10095;
        </button>
        
        <div className="slideshow-dots">
          {images.map((_, index) => (
            <span 
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .slideshow-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
        }
        
        .slideshow {
          position: relative;
          width: 100%;
          height: 600px;
        }
        
        .slide {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }
        
        .slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .slideshow-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.5);
          color: white;
          padding: 16px;
          border: none;
          cursor: pointer;
          font-size: 18px;
          border-radius: 50%;
          transition: background-color 0.3s;
        }
        
        .slideshow-button:hover {
          background: rgba(0, 0, 0, 0.8);
        }
        
        .prev {
          left: 10px;
        }
        
        .next {
          right: 10px;
        }
        
        .slideshow-dots {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
        }
        
        .dot {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        
        .dot.active {
          background: white;
        }
      `}</style>
    </div>
  );
};

export default Slideshow; 