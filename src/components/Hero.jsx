import React, { useState } from 'react';
import { Download, Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            greeting: "Hello, I'm",
            name: "BLESSING",
            nameHighlight: "FRIDAY",
            lastName: "EBONG",
            role: "AI Powered Full Stack Developer | Nurse | Problem Solver",
            tagline: "I build AI-powered healthcare and business applications that solve real world problems using modern full stack technologies."
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const slide = slides[currentSlide];

    return (
        <section id="home" className="hero container">
            <div className="hero-carousel-mobile">
                <div className="hero-slide">
                    <div className="hero-content">
                        <span className="hero-greeting">{slide.greeting}</span>
                        <h1 className="hero-title">
                            {slide.name} <span>{slide.nameHighlight}</span> {slide.lastName}
                        </h1>
                        <h2 className="hero-role">{slide.role}</h2>
                        <p className="hero-tagline">
                            {slide.tagline}
                        </p>
                        <div className="hero-actions">
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ebongb04@gmail.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Let's Work Together</a>
                            <a href="#projects" className="btn btn-outline">View Projects</a>
                            <div className="hero-socials-mini" style={{ display: 'inline-flex', gap: '0.5rem', marginLeft: '0.5rem', alignItems: 'center' }}>
                                <div style={{ display: 'flex', gap: '0.25rem' }}>
                                    <a href="/EBONG_BLESSING_FRIDAY_TECH_CV_1772909516330.pdf" download className="btn btn-outline" style={{ padding: '0.75rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem' }}>
                                        <Download size={18} /> Tech CV
                                    </a>
                                    <a href="/EBONG_BLESSING_FRIDAY_NURSING_CV_1772909605662.pdf" download className="btn btn-outline" style={{ padding: '0.75rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem' }}>
                                        <Download size={18} /> Nursing CV
                                    </a>
                                </div>
                                <a href="https://www.linkedin.com/in/blessing-ebong-692b52263?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.75rem' }}>
                                    <Linkedin size={18} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="hero-image-container">
                        <div className="hero-image-wrapper">
                            <img
                                src="/profile.jpg"
                                alt="Blessing Friday Ebong"
                                className="hero-img"
                            />
                        </div>
                    </div>
                </div>

                <div className="hero-carousel-controls">
                    <button onClick={prevSlide} className="carousel-btn" aria-label="Previous slide">
                        <ChevronLeft size={24} />
                    </button>
                    <div className="carousel-dots">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                    <button onClick={nextSlide} className="carousel-btn" aria-label="Next slide">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
