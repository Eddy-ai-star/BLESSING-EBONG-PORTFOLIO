import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';

const HomePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { name: 'Hero', component: Hero },
        { name: 'Tech Stack', component: TechStack },
        { name: 'Projects', component: Projects }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const CurrentComponent = slides[currentSlide].component;

    return (
        <div className="home-page">
            <div className="home-carousel-wrapper">
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
                                onClick={() => setCurrentSlide(index)}
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
