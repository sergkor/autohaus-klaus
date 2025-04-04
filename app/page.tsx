import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallbackForm from '@/components/CallbackForm';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Autohaus Klaus | Mercedes Specialist in Redwood City',
  description: 'Specialist Mercedes-Benz auto repair in Redwood City. European car specialists offering dealer-level diagnostics, better pricing, and faster service.',
};

export default function Home() {
  return (
    <>
      <Header />
      
      <section className="hero">
        <div className="hero-content">
          <h2>European Auto Repair Specialists</h2>
          <h3>Mercedes-Benz Service Excellence in Redwood City</h3>
          <p>Professional diagnostics and repair with dealer-level equipment</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn primary">Contact Us</Link>
            <Link href="#request-callback" className="btn secondary">Request Callback</Link>
          </div>
        </div>
      </section>

      <section className="services-overview">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <i className="fas fa-cogs"></i>
            <h3>Scheduled Maintenance</h3>
            <p>Keep your Mercedes in peak condition with our comprehensive maintenance packages.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-wrench"></i>
            <h3>Engine Repair</h3>
            <p>Expert diagnostics and repair for all Mercedes engine issues.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-car"></i>
            <h3>Transmission Service</h3>
            <p>Complete transmission maintenance and repair for optimal performance.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-laptop-code"></i>
            <h3>Computer Diagnostics</h3>
            <p>Dealer-level diagnostic equipment to accurately identify any issue.</p>
          </div>
        </div>
        <div className="view-all">
          <Link href="/services" className="btn secondary">View All Services</Link>
        </div>
      </section>

      <section className="advantages">
        <h2>Why Choose Autohaus Klaus</h2>
        <div className="advantages-grid">
          <div className="advantage-card">
            <i className="fas fa-tools"></i>
            <h3>Dealer-Level Equipment</h3>
            <p>Access to the same diagnostic and repair tools as the dealership.</p>
          </div>
          <div className="advantage-card">
            <i className="fas fa-dollar-sign"></i>
            <h3>Better Pricing</h3>
            <p>Premium service at competitive rates compared to dealerships.</p>
          </div>
          <div className="advantage-card">
            <i className="fas fa-clock"></i>
            <h3>Faster Service</h3>
            <p>Quick turnaround times without compromising on quality.</p>
          </div>
          <div className="advantage-card">
            <i className="fas fa-car-alt"></i>
            <h3>Rare Model Expertise</h3>
            <p>Specialized knowledge for maintenance of rare Mercedes models.</p>
          </div>
        </div>
      </section>

      <CallbackForm />

      <section className="testimonials-preview">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-slider">
          <div className="testimonial">
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p>"The team at Autohaus Klaus saved me thousands compared to the dealership quote. Same quality work, better service!"</p>
            <p className="customer-name">- Michael S.</p>
          </div>
        </div>
        <div className="view-all">
          <Link href="/testimonials" className="btn secondary">Read More Reviews</Link>
        </div>
      </section>

      <section className="location">
        <h2>Find Us</h2>
        <div className="location-container">
          <div className="map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1580.5848460991094!2d-122.23896233747949!3d37.495626700000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fa2468a0d4527%3A0xd1726802a3273499!2sAutohaus%20Klaus!5e0!3m2!1sen!2sus!4v1718743288886!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div className="address-hours">
            <div className="address">
              <h3>Address</h3>
              <p><i className="fas fa-map-marker-alt"></i> 1690 Industrial Way, Redwood City, CA 94063</p>
              <p><i className="fas fa-phone"></i> <a href="tel:+16503618110">+1 (650) 361-8110</a></p>
            </div>
            <div className="hours">
              <h3>Business Hours</h3>
              <ul>
                <li><span>Monday:</span> 7AM - 5PM</li>
                <li><span>Tuesday:</span> 7AM - 5PM</li>
                <li><span>Wednesday:</span> 7AM - 5PM</li>
                <li><span>Thursday:</span> 7AM - 5PM</li>
                <li><span>Friday:</span> 7AM - 5PM</li>
                <li><span>Saturday - Sunday:</span> Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
} 