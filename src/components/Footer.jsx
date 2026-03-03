import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer" style={{ borderTop: '1px solid var(--glass-border)', padding: '2rem 0', marginTop: '4rem', background: 'rgba(10, 10, 10, 0.8)' }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div className="socials" style={{ display: 'flex', gap: '1.5rem' }}>
                    <a href="https://www.linkedin.com/in/blessing-ebong-692b52263?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }} title="LinkedIn Profile">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:ebongb04@gmail.com" style={{ color: 'var(--text-secondary)' }} title="Send Email">
                        <Mail size={24} />
                    </a>
                </div>
                <p style={{ color: 'var(--text-secondary)', textAlign: 'center' }}>
                    &copy; {new Date().getFullYear()} Blessing Friday Ebong. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
