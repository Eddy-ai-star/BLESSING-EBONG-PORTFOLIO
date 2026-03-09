import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';

const HomePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    const slides = [
        { name: 'Hero', component: Hero },
        { name: 'Tech Stack', component: TechStack },
        { name: 'Projects', component: Projects }
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!isMobile || !isAutoPlay) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isMobile, isAutoPlay, slides.length]);

    const nextSlide = () => {
        setIsAutoPlay(false);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setIsAutoPlay(false);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setIsAutoPlay(false);
        setCurrentSlide(index);
    };

    const resumeAutoPlay = () => {
        setIsAutoPlay(true);
    };

    // Desktop view - show all sections normally
    if (!isMobile) {
        return (
            <div className="home-page-desktop">
                <Hero />
                <TechStack />
                <Projects />
            </div>
        );
    }

    // Mobile view - show carousel with auto-play
    const CurrentComponent = slides[currentSlide].component;

    return (
        <div className="home-page-mobile">
            <div className="home-carousel-wrapper" onMouseEnter={() => setIsAutoPlay(false)} onMouseLeave={resumeAutoPlay}>
                <div className="home-carousel-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <div key={index} className="carousel-slide">
                            <CurrentComponent />
                        </div>
                    ))}
                </div>

                <div className="home-carousel-controls">
                    <button onClick={prevSlide} className="carousel-btn" aria-label="Previous section">
                        <ChevronLeft size={24} />
                    </button>
                    <div className="carousel-dots">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to ${slides[index].name}`}
                            />
                        ))}
                    </div>
                    <button onClick={nextSlide} className="carousel-btn" aria-label="Next section">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
