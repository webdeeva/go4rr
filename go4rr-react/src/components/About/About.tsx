import React, { useEffect, useRef } from 'react';
import './About.css';

interface Stat {
  value: string;
  label: string;
}

const About: React.FC = () => {
  const statsRef = useRef<HTMLDivElement[]>([]);

  const stats: Stat[] = [
    { value: '10,000+', label: 'Successful Moves' },
    { value: '50', label: 'States Covered' },
    { value: '98%', label: 'Customer Satisfaction' }
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

    statsRef.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title gradient-text">About Go4rr</h2>
            <p>With years of experience in the moving industry, Go4rr has established itself as the premier choice for luxury and high-end furniture moving services across the United States.</p>
            <p>Our team of trained professionals understands that your belongings are more than just items – they're investments, memories, and irreplaceable pieces that deserve the utmost care and attention.</p>
            <div className="stats">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="stat glass"
                  ref={el => { if (el) statsRef.current[index] = el; }}
                >
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;