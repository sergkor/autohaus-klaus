'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Slideshow from '@/components/Slideshow';

export default function Gallery() {
  // Get all PNG images from the public/images folder
  const images = [
    'images/e654a007-1b0c-4fc3-9104-5a86a8aee499.png',
    'images/b8a4f720-1b04-4392-a20f-67e0aed1071a.png',
    'images/09728d80-f40d-4d22-9042-2f47019c702e.png',
    'images/10422412-2b32-4fc6-af6c-862bb303122c.png',
    'images/1133b327-8c0c-4856-932b-5f2ec9e6ad89.png',
    'images/01c947e6-c6c8-4b45-a8b1-7e96857f5c89.png',
    'images/a7f89bc2-0ed7-4fbf-b60f-65dbe14f40a5.png',
    'images/aa866021-017d-4f4d-93eb-b52a27ccc152.png',
    'images/86e9b38f-19dc-4d7a-bf7b-0904181892a9.png',
    'images/707578fa-b433-47f2-8c30-a8bd2724d047.png',
  ];

  return (
    <>
      <Header />
      
      <section className="hero" style={{ 
        background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("images/home-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-content">
          <h2>Our Gallery</h2>
          <p>Explore our collection of Mercedes-Benz vehicles and services</p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title">Featured Vehicles & Services</h2>
          <p className="section-description">
            Browse through our gallery to see the exceptional quality and craftsmanship 
            we provide for every Mercedes-Benz vehicle that comes through our doors.
          </p>
          
          <div className="slideshow-wrapper">
            <Slideshow images={images} />
          </div>
          
          <div className="gallery-info">
            <h3>Why Choose Autohaus Klaus?</h3>
            <ul>
              <li>Expert technicians with decades of Mercedes-Benz experience</li>
              <li>State-of-the-art diagnostic equipment</li>
              <li>Genuine Mercedes-Benz parts and accessories</li>
              <li>Transparent pricing and detailed service reports</li>
              <li>Comfortable waiting area with complimentary amenities</li>
            </ul>
            
            <div className="cta-container">
              <a href="/contact" className="btn primary">Schedule Service</a>
              <a href="/services" className="btn secondary">View Our Services</a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      
      <style jsx>{`
        .gallery-section {
          padding: 80px 0;
        }
        
        .section-title {
          text-align: center;
          margin-bottom: 20px;
          font-size: 2.5rem;
          color: #333;
        }
        
        .section-description {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 50px;
          font-size: 1.1rem;
          color: #666;
        }
        
        .slideshow-wrapper {
          margin-bottom: 50px;
        }
        
        .gallery-info {
          max-width: 800px;
          margin: 0 auto;
          padding: 30px;
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .gallery-info h3 {
          margin-bottom: 20px;
          color: #333;
          font-size: 1.8rem;
        }
        
        .gallery-info ul {
          margin-bottom: 30px;
          padding-left: 20px;
        }
        
        .gallery-info li {
          margin-bottom: 10px;
          color: #555;
          font-size: 1.1rem;
        }
        
        .cta-container {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 30px;
        }
        
        .btn {
          display: inline-block;
          padding: 12px 24px;
          border-radius: 4px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .primary {
          background-color: #1a1a1a;
          color: white;
        }
        
        .primary:hover {
          background-color: #333;
        }
        
        .secondary {
          background-color: #f0f0f0;
          color: #333;
        }
        
        .secondary:hover {
          background-color: #e0e0e0;
        }
        
        @media (max-width: 768px) {
          .cta-container {
            flex-direction: column;
            align-items: center;
          }
          
          .btn {
            width: 100%;
            text-align: center;
            margin-bottom: 10px;
          }
        }
      `}</style>
    </>
  );
} 