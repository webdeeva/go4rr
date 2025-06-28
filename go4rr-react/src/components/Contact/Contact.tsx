import React, { useEffect, useRef } from 'react';
import './Contact.css';

interface ContactInfo {
  title: string;
  lines: string[];
}

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLDivElement[]>([]);

  const contactInfo: ContactInfo[] = [
    {
      title: 'Call Us',
      lines: ['470-907-2303']
    },
    {
      title: 'Email',
      lines: ['office@go4rr.xyz']
    },
    {
      title: 'Hours',
      lines: ['Monday - Friday: 8AM - 8PM', 'Saturday - Sunday: 9AM - 6PM']
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

    contactRef.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title gradient-text">Get in Touch</h2>
        <div className="contact-grid">
          {contactInfo.map((info, index) => (
            <div 
              key={index} 
              className="contact-card glass"
              ref={el => { if (el) contactRef.current[index] = el; }}
            >
              <h3>{info.title}</h3>
              {info.lines.map((line, lineIndex) => (
                <p key={lineIndex}>{line}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;