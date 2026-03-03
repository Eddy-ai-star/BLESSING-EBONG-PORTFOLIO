import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="hero container">
            <div className="hero-content">
                <span className="hero-greeting">Hello, I'm</span>
                <h1 className="hero-title">BLESSING FRIDAY EBONG</h1>
                <h2 className="hero-role">AI Powered Full Stack Developer | Nurse | Problem Solver</h2>
                <p className="hero-tagline">
                    I build AI-powered healthcare and business applications that solve real world problems using modern full stack technologies.
                </p>
                <div className="hero-actions">
                    <a href="mailto:contact@example.com" className="btn btn-primary">Let's Work Together</a>
                    <a href="#projects" className="btn btn-outline">View Projects</a>
                    <div className="hero-socials-mini" style={{ display: 'inline-flex', gap: '0.5rem', marginLeft: '1rem', alignItems: 'center' }}>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.75rem' }}><Github size={20} /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.75rem' }}><Linkedin size={20} /></a>
                    </div>
                </div>
            </div>
            <div className="hero-image-container">
                {/* Placeholder image - User to replace later */}
                <img
                    src="/hero_placeholder.png"
                    alt="Blessing Friday Ebong"
                    className="hero-img"
                    style={{ maxWidth: '400px', width: '100%' }}
                />
            </div>
        </section>
    );
};

export default Hero;
