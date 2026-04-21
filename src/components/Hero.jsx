import React from 'react';
import { Download, Linkedin } from 'lucide-react';
import ChatBubble from './ChatBubble';

const Hero = () => {
    return (
        <section id="home" className="hero container">
            <div className="hero-content">
                <span className="hero-greeting">Hello, I'm</span>
                <h1 className="hero-title">
                    BLESSING <span>FRIDAY</span> EBONG
                </h1>
                <h2 className="hero-role">AI Powered Full Stack Developer | Nurse | Problem Solver</h2>
                <p className="hero-tagline">
                    I build AI-powered healthcare and business applications that solve real world problems using modern full stack technologies.
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
            <ChatBubble />
        </section>
    );
};

export default Hero;
