'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallbackButton from '@/components/CallbackButton';

export default function Contact() {
  return (
    <>
      <Header />
      
      <section className="hero" style={{ 
        background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/images/hero-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-content">
          <h2>Contact Us</h2>
          <p>Schedule your service appointment today</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Autohaus Klaus</h3>
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <p>123 Main Street</p>
                  <p>Redwood City, CA 94063</p>
                  <p className="text-sm">Near Highway 101</p>
                </div>
              </div>
              
              <div className="info-item">
                <i className="fas fa-phone"></i>
                <div>
                  <p><a href="tel:+16503618110">+1 (650) 361-8110</a></p>
                  <p className="text-sm">Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-sm">Sat: 9:00 AM - 3:00 PM</p>
                </div>
              </div>
              
              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <p><a href="mailto:service@autohausklaus.com">service@autohausklaus.com</a></p>
                  <p className="text-sm">We'll respond within 24 hours</p>
                </div>
              </div>
            </div>
            
            <div className="form-container">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe_8j4AzIlCXHyWaQEGMJSC8LbHa4Rjh0_KdHorJYYoZJT3nQ/viewform?embedded=true" width="640" height="959" frameBorder="0" marginHeight={0} marginWidth={0}>Loading…</iframe>
            </div>
          </div>
        </div>
      </section>
      
      <section className="map-section">
        <iframe
          src="YOUR_GOOGLE_MAPS_EMBED_URL"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      
      <CallbackButton />
      <Footer />
      
      <style jsx>{`
        .contact-section {
          padding: 80px 0;
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 40px;
        }
        
        .contact-info {
          background: #f9f9f9;
          padding: 30px;
          border-radius: 8px;
        }
        
        .info-item {
          display: flex;
          gap: 15px;
          margin-bottom: 25px;
        }
        
        .info-item i {
          font-size: 24px;
          color: #333;
        }
        
        .text-sm {
          font-size: 0.9rem;
          color: #666;
        }
        
        .form-container {
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          
          .contact-section {
            padding: 40px 0;
          }
        }
      `}</style>
    </>
  );
} 