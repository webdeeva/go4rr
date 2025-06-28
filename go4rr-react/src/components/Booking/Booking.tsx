import React, { useState } from 'react';
import './Booking.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  from: string;
  to: string;
  service: string;
  message: string;
}

const Booking: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    from: '',
    to: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Here you would normally send the data to your server
    console.log('Form submitted with data:', formData);
    
    // Show success message
    alert('Thank you for your booking request! We will contact you within 24 hours with a quote.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      from: '',
      to: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="booking" className="booking">
      <div className="container">
        <h2 className="section-title gradient-text">Book Your Move</h2>
        <form className="booking-form glass" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
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
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
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
              <label htmlFor="date">Moving Date</label>
              <input 
                type="date" 
                id="date" 
                name="date" 
                value={formData.date}
                onChange={handleChange}
                required 
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="from">Moving From</label>
              <input 
                type="text" 
                id="from" 
                name="from" 
                placeholder="City, State" 
                value={formData.from}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="to">Moving To</label>
              <input 
                type="text" 
                id="to" 
                name="to" 
                placeholder="City, State" 
                value={formData.to}
                onChange={handleChange}
                required 
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="service">Service Type</label>
            <select 
              id="service" 
              name="service" 
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a service</option>
              <option value="residential">Residential Moving</option>
              <option value="luxury">Luxury Furniture Moving</option>
              <option value="commercial">Commercial Moving</option>
              <option value="packing">Packing Services Only</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Additional Information</label>
            <textarea 
              id="message" 
              name="message" 
              rows={4} 
              placeholder="Tell us about your specific needs..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Request Quote</button>
        </form>
      </div>
    </section>
  );
};

export default Booking;