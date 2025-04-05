import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Us | Autohaus Klaus - Mercedes Specialist',
  description: 'Contact Autohaus Klaus, your Mercedes-Benz specialist in Redwood City. Schedule a service appointment or ask about our Mercedes repair and maintenance services.',
};

export default function Contact() {
  return (
    <>
      <Header />
      
      <section className="hero" style={{ 
        background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("images/contact-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-content">
          <h2>Contact Autohaus Klaus</h2>
          <p>Schedule service or ask us any questions about your Mercedes-Benz</p>
        </div>
      </section>

      <section className="contact-info-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-details">
              <h2 className="section-title">Get In Touch</h2>
              
              <div className="contact-method">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h3>Our Location</h3>
                  <p>1690 Industrial Way<br />Redwood City, CA 94063</p>
                  <p><small>Conveniently located near Highway 101</small></p>
                </div>
              </div>
              
              <div className="contact-method">
                <i className="fas fa-phone"></i>
                <div>
                  <h3>Phone</h3>
                  <p><a href="tel:+16503618110">+1 (650) 361-8110</a></p>
                  <p><small>We'll answer during business hours</small></p>
                </div>
              </div>
              
              <div className="contact-method">
                <i className="fas fa-envelope"></i>
                <div>
                  <h3>Email</h3>
                  <p><a href="mailto:service@autohausklaus.com">service@autohausklaus.com</a></p>
                  <p><small>We usually respond within 24 hours</small></p>
                </div>
              </div>
              
              <div className="business-hours">
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
            
            <div className="contact-form-wrapper">
              <h2 className="section-title">Send Us a Message</h2>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="vehicleModel">Vehicle Model</label>
                  <input type="text" id="vehicleModel" name="vehicleModel" placeholder="e.g. 2019 Mercedes C300" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="serviceType">Service Needed</label>
                  <select id="serviceType" name="serviceType">
                    <option value="">Select a service</option>
                    <option value="maintenance">Scheduled Maintenance</option>
                    <option value="repair">Repair</option>
                    <option value="diagnostic">Diagnostic</option>
                    <option value="performance">Performance Upgrade</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} required placeholder="Please describe your service needs or questions..."></textarea>
                </div>
                
                <div className="form-group">
                  <label className="checkbox-container">
                    <input type="checkbox" name="consent" required />
                    <span className="checkmark"></span>
                    I consent to having this website store my submitted information
                  </label>
                </div>
                
                <button type="submit" className="btn primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <section className="map-section">
        <h2 className="section-title">Find Us</h2>
        <div className="map-container">
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
      </section>
      
      <section className="directions-section">
        <div className="container">
          <h2 className="section-title">How to Reach Us</h2>
          <div className="directions-grid">
            <div className="direction-card">
              <i className="fas fa-car"></i>
              <h3>By Car</h3>
              <p>
                We're conveniently located just off Highway 101. Take the Woodside Road exit 
                and head east. Turn right onto Industrial Way, and you'll find us on the right.
              </p>
            </div>
            
            <div className="direction-card">
              <i className="fas fa-train"></i>
              <h3>Public Transit</h3>
              <p>
                The Redwood City Caltrain station is approximately 2 miles from our location. 
                SamTrans bus routes 270 and 295 stop within walking distance of our shop.
              </p>
            </div>
            
            <div className="direction-card">
              <i className="fas fa-parking"></i>
              <h3>Parking</h3>
              <p>
                Free parking is available in our lot for all customers. We also offer a 
                comfortable waiting area with complimentary Wi-Fi and refreshments.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="service-cta">
        <div className="container">
          <h2>Ready to Experience Expert Mercedes Service?</h2>
          <p>Contact us today to schedule your appointment or learn more about our services.</p>
          <div className="cta-buttons">
            <a href="tel:+16503618110" className="btn primary">Call Now</a>
            <a href="mailto:service@autohausklaus.com" className="btn secondary">Email Us</a>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
} 