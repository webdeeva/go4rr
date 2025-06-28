import React, { useEffect, useRef } from 'react';
import './Services.css';

interface Service {
  icon: string;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement[]>([]);

  const services: Service[] = [
    {
      icon: '🏠',
      title: 'Residential Moving',
      description: 'Complete home relocation services with care and precision for all your belongings.'
    },
    {
      icon: '💎',
      title: 'Luxury Furniture',
      description: 'Specialized handling of high-end and luxury furniture with white-glove service.'
    },
    {
      icon: '🚚',
      title: 'Long Distance',
      description: 'Coast-to-coast moving services across all 50 states with real-time tracking.'
    },
    {
      icon: '📦',
      title: 'Packing Services',
      description: 'Professional packing and unpacking services using premium materials.'
    }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    servicesRef.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title gradient-text">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card glass"
              ref={el => { if (el) servicesRef.current[index] = el; }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;