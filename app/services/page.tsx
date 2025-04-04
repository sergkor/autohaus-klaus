import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallbackForm from '@/components/CallbackForm';
import Link from 'next/link';

export const metadata = {
  title: 'Services | Autohaus Klaus - Mercedes Specialist',
  description: 'Professional Mercedes-Benz repair and maintenance services in Redwood City. Dealer-level diagnostics with better pricing and faster service.',
};

export default function Services() {
  return (
    <>
      <Header />
      
      <section className="hero" style={{ 
        background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/images/services-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-content">
          <h2>Our Mercedes Services</h2>
          <p>Comprehensive repair and maintenance services with dealer-level diagnostics</p>
        </div>
      </section>

      <section className="services-detail">
        <div className="container">
          <h2 className="section-title">Mercedes-Benz Services We Offer</h2>
          <p className="section-description">
            At Autohaus Klaus, we specialize in all aspects of Mercedes-Benz repair and maintenance. 
            Our team of expert technicians has the knowledge and equipment to deliver dealer-quality service 
            at competitive prices.
          </p>
          
          <div className="services-grid">
            <div className="service-item">
              <div className="service-icon">
                <i className="fas fa-oil-can"></i>
              </div>
              <div className="service-content">
                <h3>Oil Change & Maintenance</h3>
                <p>
                  Regular oil changes and maintenance are essential for your Mercedes-Benz's performance and longevity. 
                  We use only manufacturer-approved oils and parts.
                </p>
                <ul>
                  <li>Synthetic oil change</li>
                  <li>Filter replacement</li>
                  <li>Multi-point inspection</li>
                  <li>Fluid level check and top-off</li>
                </ul>
              </div>
            </div>

            <div className="service-item">
              <div className="service-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <div className="service-content">
                <h3>Engine Diagnostics & Repair</h3>
                <p>
                  Our advanced diagnostic equipment can quickly identify issues with your Mercedes engine, 
                  allowing for efficient and accurate repairs.
                </p>
                <ul>
                  <li>Check engine light diagnosis</li>
                  <li>Performance issues troubleshooting</li>
                  <li>Engine repair and rebuilding</li>
                  <li>Timing chain/belt service</li>
                </ul>
              </div>
            </div>

            <div className="service-item">
              <div className="service-icon">
                <i className="fas fa-car-battery"></i>
              </div>
              <div className="service-content">
                <h3>Electrical Systems</h3>
                <p>
                  Modern Mercedes vehicles feature complex electrical systems. Our technicians are trained to 
                  diagnose and repair even the most sophisticated electrical issues.
                </p>
                <ul>
                  <li>Battery service and replacement</li>
                  <li>Alternator and starter repair</li>
                  <li>Computer diagnostics</li>
                  <li>Lighting and accessory troubleshooting</li>
                </ul>
              </div>
            </div>

            <div className="service-item">
              <div className="service-icon">
                <i className="fas fa-car"></i>
              </div>
              <div className="service-content">
                <h3>Transmission Service</h3>
                <p>
                  We provide comprehensive transmission services for both automatic and manual Mercedes-Benz transmissions.
                </p>
                <ul>
                  <li>Transmission fluid change</li>
                  <li>Filter replacement</li>
                  <li>Complete transmission repair</li>
                  <li>Clutch replacement (manual)</li>
                </ul>
              </div>
            </div>

            <div className="service-item">
              <div className="service-icon">
                <i className="fas fa-snowflake"></i>
              </div>
              <div className="service-content">
                <h3>A/C and Heating</h3>
                <p>
                  Maintain comfort in your Mercedes with our complete climate control services.
                </p>
                <ul>
                  <li>A/C recharge and repair</li>
                  <li>Heating system diagnosis</li>
                  <li>Blower motor replacement</li>
                  <li>Temperature control troubleshooting</li>
                </ul>
              </div>
            </div>

            <div className="service-item">
              <div className="service-icon">
                <i className="fas fa-car-crash"></i>
              </div>
              <div className="service-content">
                <h3>Brake Services</h3>
                <p>
                  Your safety is our priority. We offer complete brake system maintenance and repair.
                </p>
                <ul>
                  <li>Brake pad/shoe replacement</li>
                  <li>Rotor/drum resurfacing or replacement</li>
                  <li>Brake fluid flush</li>
                  <li>ABS system diagnosis and repair</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="container">
          <h2>Need a Mercedes Service Not Listed?</h2>
          <p>We offer many more services for your Mercedes-Benz. Contact us to discuss your specific needs.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn primary">Contact Us</Link>
            <Link href="#request-callback" className="btn secondary">Request Callback</Link>
          </div>
        </div>
      </section>

      <CallbackForm />
      
      <Footer />
    </>
  );
} 