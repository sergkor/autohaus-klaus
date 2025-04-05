import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <div className="logo-container">
        <div className="logo">
          {/* Logo will be added here */}
          <h1>Autohaus Klaus</h1>
        </div>
        <div className="contact-info">
          <p><i className="fas fa-phone"></i> <a href="tel:+16503618110">+1 (650) 361-8110</a></p>
        </div>
      </div>
      <nav>
        <ul>
          <li><Link href="/" className="active">Home</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/gallery">Gallery</Link></li>
          <li><Link href="/testimonials">Testimonials</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 