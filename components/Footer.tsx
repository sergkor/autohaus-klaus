import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Autohaus Klaus</h2>
          <p>Mercedes Specialist in Redwood City</p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/testimonials">Testimonials</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><i className="fas fa-map-marker-alt"></i> 1690 Industrial Way, Redwood City, CA 94063</p>
          <p><i className="fas fa-phone"></i> <a href="tel:+16503618110">+1 (650) 361-8110</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Autohaus Klaus. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 