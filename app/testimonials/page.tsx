import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallbackForm from '@/components/CallbackForm';
import Link from 'next/link';

export const metadata = {
  title: 'Testimonials | Autohaus Klaus - Mercedes Specialist',
  description: 'See what our customers say about Autohaus Klaus, your trusted Mercedes-Benz specialist in Redwood City. Read reviews about our quality service and expert care.',
};

export default function Testimonials() {
  return (
    <>
      <Header />
      
      <section className="hero" style={{ 
        background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("images/testimonials-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-content">
          <h2>Customer Testimonials</h2>
          <p>Our clients share their experience with Autohaus Klaus</p>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-description">
            At Autohaus Klaus, we pride ourselves on providing exceptional service for every Mercedes-Benz 
            that comes through our doors. But don't take our word for it — hear what our customers have to say.
          </p>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="testimonial-content">
                <p>
                  "After my Mercedes warranty expired, I was looking for a reliable alternative to 
                  dealership service. Autohaus Klaus has been incredible. Their diagnostics found 
                  issues the dealer missed, and they fixed everything at half the cost. I won't take 
                  my car anywhere else now."
                </p>
              </div>
              <div className="testimonial-author">
                <h4>Michael S.</h4>
                <p>2018 Mercedes-Benz E-Class</p>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="testimonial-content">
                <p>
                  "I've been a customer for over 10 years, bringing in my classic 1980s SL for service. 
                  Klaus and his team understand vintage Mercedes like no one else. They keep it running 
                  perfectly and their expertise with older models is unmatched in the area."
                </p>
              </div>
              <div className="testimonial-author">
                <h4>Jennifer T.</h4>
                <p>1989 Mercedes-Benz 560 SL</p>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="testimonial-content">
                <p>
                  "The team at Autohaus Klaus explains everything clearly without the technical jargon. 
                  They showed me exactly what needed fixing on my GLK and gave me options based on my budget. 
                  Their honesty and transparency are refreshing in the auto repair industry."
                </p>
              </div>
              <div className="testimonial-author">
                <h4>David R.</h4>
                <p>2015 Mercedes-Benz GLK 350</p>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="testimonial-content">
                <p>
                  "I was skeptical about taking my new C-Class anywhere but the dealership, but a friend 
                  recommended Autohaus Klaus. They have all the same diagnostic equipment but without the 
                  long wait times and inflated prices. My car runs better than ever!"
                </p>
              </div>
              <div className="testimonial-author">
                <h4>Sarah M.</h4>
                <p>2022 Mercedes-Benz C-Class</p>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="testimonial-content">
                <p>
                  "When my AMG started making strange noises, I panicked thinking about the potential cost. 
                  Autohaus Klaus diagnosed it as a simple fix that other shops might have exaggerated. 
                  They're honest, fairly priced, and incredibly knowledgeable about performance Mercedes models."
                </p>
              </div>
              <div className="testimonial-author">
                <h4>Robert K.</h4>
                <p>2020 Mercedes-AMG GLC 63</p>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="testimonial-content">
                <p>
                  "As someone who knows very little about cars, I appreciate how the staff at Autohaus Klaus 
                  takes time to educate me about my vehicle. They never make me feel rushed or pressured, 
                  and they've earned my complete trust with their exceptional service."
                </p>
              </div>
              <div className="testimonial-author">
                <h4>Lisa W.</h4>
                <p>2019 Mercedes-Benz GLE 350</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="review-cta">
        <div className="container">
          <h2>Share Your Experience</h2>
          <p>We value your feedback. If you've been to Autohaus Klaus, consider leaving a review on one of these platforms:</p>
          <div className="review-platforms">
            <a href="#" className="review-platform">
              <i className="fab fa-google"></i>
              <span>Google</span>
            </a>
            <a href="#" className="review-platform">
              <i className="fab fa-yelp"></i>
              <span>Yelp</span>
            </a>
            <a href="#" className="review-platform">
              <i className="fab fa-facebook"></i>
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="container">
          <h2>Ready for Quality Mercedes Service?</h2>
          <p>Join our satisfied customers and experience the Autohaus Klaus difference for your Mercedes-Benz.</p>
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