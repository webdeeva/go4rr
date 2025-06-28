import React, { useEffect, useRef } from 'react';
import './Hero.css';
import heroImage from '../../assets/hero-truck.png';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxSpeed = 0.5;
      
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
      }
      
      if (heroImageRef.current) {
        heroImageRef.current.style.transform = `translateY(${scrolled * parallaxSpeed * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 70;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-content">
        <h1 className="hero-title gradient-text">Premium Moving Services</h1>
        <p className="hero-subtitle">Specializing in luxury furniture transportation across the USA</p>
        <div className="hero-buttons">
          <a href="#booking" className="btn btn-primary" onClick={(e) => handleButtonClick(e, '#booking')}>Get a Quote</a>
          <a href="#services" className="btn btn-secondary" onClick={(e) => handleButtonClick(e, '#services')}>Our Services</a>
        </div>
      </div>
      <div className="hero-image" ref={heroImageRef}>
        <img src={heroImage} alt="Go4rr Moving Truck" />
      </div>
    </section>
  );
};

export default Hero;