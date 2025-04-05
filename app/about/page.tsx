import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallbackForm from '@/components/CallbackForm';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | Autohaus Klaus - Mercedes Specialist',
  description: 'Learn about Autohaus Klaus - family owned Mercedes-Benz specialist in Redwood City with over 30 years of experience in European auto repair.',
};

export default function About() {
  return (
    <>
      <Header />
      
      <section className="hero" style={{ 
        background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("images/about-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-content">
          <h2>About Autohaus Klaus</h2>
          <p>Your trusted Mercedes-Benz specialist in Redwood City for over 30 years</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <p className="section-description">
            Founded in 1992, Autohaus Klaus has been providing exceptional Mercedes-Benz service to the 
            Redwood City community and surrounding areas. What started as a small family operation has 
            grown into a trusted name in European auto repair while maintaining our dedication to 
            personalized customer service.
          </p>
          
          <div className="about-grid">
            <div className="about-text">
              <h3>Mercedes Expertise</h3>
              <p>
                With over three decades of experience specializing in Mercedes-Benz vehicles, our team has 
                the knowledge and skills to handle everything from routine maintenance to complex repairs. 
                We continuously invest in training and equipment to stay current with the latest Mercedes 
                technology and service procedures.
              </p>
              
              <h3>Our Values</h3>
              <ul>
                <li>Transparency in all our operations and pricing</li>
                <li>Excellence in workmanship and attention to detail</li>
                <li>Integrity in how we conduct business</li>
                <li>Customer satisfaction as our highest priority</li>
              </ul>
              
              <h3>Family Owned & Operated</h3>
              <p>
                As a family business, we understand the importance of trust and reliability. We treat our 
                customers' vehicles with the same care and attention we give to our own cars. Our loyal 
                client base has been built through honest service and quality repairs.
              </p>
            </div>
            
            <div className="about-image">
              {/* Placeholder for an image - could be shop or staff */}
              <div className="image-placeholder" style={{
                height: '400px',
                background: '#eee',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ color: '#999' }}>Shop Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <p className="section-description">
            Meet the skilled professionals who make Autohaus Klaus the premier choice for Mercedes service.
          </p>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image" style={{
                height: '200px',
                width: '200px',
                background: '#eee',
                borderRadius: '50%',
                margin: '0 auto 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ color: '#999' }}>Photo</span>
              </div>
              <h3>Klaus Schmidt</h3>
              <p className="member-title">Founder & Master Technician</p>
              <p>
                With over 40 years of experience working with Mercedes-Benz, Klaus founded Autohaus Klaus 
                to provide dealership-quality service with a personal touch.
              </p>
            </div>
            
            <div className="team-member">
              <div className="member-image" style={{
                height: '200px',
                width: '200px',
                background: '#eee',
                borderRadius: '50%',
                margin: '0 auto 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ color: '#999' }}>Photo</span>
              </div>
              <h3>Maria Schmidt</h3>
              <p className="member-title">Service Manager</p>
              <p>
                Handling all customer relations and shop operations, Maria ensures that every client 
                receives exceptional service and clear communication.
              </p>
            </div>
            
            <div className="team-member">
              <div className="member-image" style={{
                height: '200px',
                width: '200px',
                background: '#eee',
                borderRadius: '50%',
                margin: '0 auto 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ color: '#999' }}>Photo</span>
              </div>
              <h3>Thomas Schmidt</h3>
              <p className="member-title">Lead Technician</p>
              <p>
                Following in his father's footsteps, Thomas brings both traditional knowledge and expertise 
                in the latest Mercedes-Benz technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="container">
          <h2>Ready to Experience the Autohaus Klaus Difference?</h2>
          <p>Schedule your service appointment today or contact us with any questions about your Mercedes-Benz.</p>
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