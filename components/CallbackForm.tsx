"use client";

import React, { useState, FormEvent } from 'react';

const CallbackForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    bestTime: 'morning',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // In a real implementation, you would send this data to a server
    alert(`Thank you, ${formData.name}! We will call you back at ${formData.phone} during the ${formData.bestTime} hours.`);
    
    // Reset form fields
    setFormData({
      name: '',
      phone: '',
      bestTime: 'morning',
      message: ''
    });
  };

  return (
    <section id="request-callback" className="callback-form">
      <h2>Request a Callback</h2>
      <p>Leave your details and we'll call you back to discuss your Mercedes service needs.</p>
      <form id="callback-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={formData.phone}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="bestTime">Best Time to Call</label>
          <select 
            id="bestTime" 
            name="bestTime"
            value={formData.bestTime}
            onChange={handleChange}
          >
            <option value="morning">Morning (7AM-11AM)</option>
            <option value="afternoon">Afternoon (11AM-3PM)</option>
            <option value="evening">Evening (3PM-5PM)</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message (Optional)</label>
          <textarea 
            id="message" 
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn primary">Submit Request</button>
      </form>
    </section>
  );
};

export default CallbackForm; 