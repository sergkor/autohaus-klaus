'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import testimonialData from '@/data/testimonials.json';
import { Testimonial } from '@/types/testimonial';

export default function Testimonials() {
  const testimonials: Testimonial[] = testimonialData.testimonials;

  const renderStars = (rating: number) => {
    return Array(rating).fill('★').join('');
  };

  return (
    <>
      <Header />
      
      <section className="hero" style={{ 
        background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("images/hero-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-content">
          <h2>Client Testimonials</h2>
          <p>What our valued customers say about us</p>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="testimonial-info">
                    <h3>{testimonial.name}</h3>
                    <p className="role">{testimonial.role}</p>
                    <div className="rating">
                      <span className="stars">{renderStars(testimonial.rating)}</span>
                    </div>
                  </div>
                </div>
                <blockquote>
                  {testimonial.text}
                </blockquote>
                <div className="testimonial-date">
                  {new Date(testimonial.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
            ))}
          </div>
          
          <div className="cta-section">
            <h3>Experience Our Service</h3>
            <p>Join our satisfied customers and trust your Mercedes-Benz to the experts.</p>
            <a href="/contact" className="btn primary">Schedule Service</a>
          </div>
        </div>
      </section>
      
      <Footer />
      
      <style jsx>{`
        .testimonials-section {
          padding: 80px 0;
          background-color: #f9f9f9;
        }
        
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }
        
        .testimonial-card {
          background: white;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .testimonial-header {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .testimonial-image {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 15px;
        }
        
        .testimonial-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .testimonial-info h3 {
          margin: 0;
          font-size: 1.2rem;
          color: #333;
        }
        
        .role {
          color: #666;
          font-size: 0.9rem;
          margin: 5px 0;
        }
        
        .rating {
          color: #ffd700;
          font-size: 1.2rem;
        }
        
        blockquote {
          font-style: italic;
          color: #555;
          margin: 0 0 20px 0;
          line-height: 1.6;
        }
        
        .testimonial-date {
          color: #888;
          font-size: 0.9rem;
          text-align: right;
        }
        
        .cta-section {
          text-align: center;
          padding: 40px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .cta-section h3 {
          margin: 0 0 15px 0;
          font-size: 2rem;
          color: #333;
        }
        
        .cta-section p {
          margin-bottom: 25px;
          color: #666;
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
        
        @media (max-width: 768px) {
          .testimonials-section {
            padding: 40px 0;
          }
          
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
          
          .cta-section {
            padding: 30px 20px;
          }
        }
      `}</style>
    </>
  );
} 