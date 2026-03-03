import React from 'react';
import {
    Code2, Server, Brain, Database, HeartPulse,
    ClipboardList, Users, ArrowRight, CheckCircle2
} from 'lucide-react';

const milestones = [
    {
        year: '2020',
        title: 'Registered Nurse',
        desc: 'Graduated and became a registered nurse.'
    },
    {
        year: '2020–2025',
        title: 'Healthcare Experience',
        desc: 'Gained hands-on experience, identifying gaps and inefficiencies in healthcare workflows that inspired me to explore technology solutions.'
    },
    {
        year: '2025',
        title: 'AI & Full Stack Development',
        desc: 'Began learning AI and full stack development to bridge healthcare and technology.'
    },
    {
        year: '2026',
        title: 'Building Real-Time Projects',
        desc: 'Started building real-time projects, including collaborative projects during coursework.'
    },
    {
        year: '2026',
        title: 'Portfolio Launch',
        desc: 'Added completed projects to my portfolio to showcase practical skills gained from learning and collaboration.'
    }
];

const technicalSkills = [
    { icon: <Code2 size={20} />, label: 'Frontend', detail: 'React, Next.js, Tailwind CSS — responsive, interactive interfaces' },
    { icon: <Server size={20} />, label: 'Backend', detail: 'Node.js, FastAPI — robust server-side systems' },
    { icon: <Brain size={20} />, label: 'AI & Data', detail: 'Python, TensorFlow, Pandas — predictive models and automations' },
    { icon: <Database size={20} />, label: 'Database', detail: 'PostgreSQL, MongoDB — structured and unstructured data' },
];

const domainSkills = [
    { icon: <HeartPulse size={18} />, text: 'Healthcare workflows' },
    { icon: <ClipboardList size={18} />, text: 'Clinical data management' },
    { icon: <Users size={18} />, text: 'NGO and industry project management' },
];

const About = () => {
    return (
        <section id="about" className="about-section container">

            {/* ── Hero Banner ── */}
            <div className="about-hero">
                <div className="about-hero-text">
                    <span className="hero-greeting">About Me</span>
                    <h2 className="about-headline">
                        Hi, I'm <span className="gradient-text">Blessing Friday Ebong</span>
                    </h2>
                    <p className="about-role-badge">AI-Powered Full Stack Developer &amp; Registered Nurse</p>
                    <p className="about-subtext">
                        I build technology that bridges healthcare insight and modern AI systems,
                        helping organizations solve real-world problems efficiently and intelligently.
                    </p>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ebongb04@gmail.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                        Let's Work Together <ArrowRight size={16} />
                    </a>
                </div>
                <div className="about-hero-img-wrap">
                    <img src="/profile.jpg" alt="Blessing Friday Ebong" className="about-portrait" />
                    <div className="about-portrait-glow" />
                </div>
            </div>

            {/* ── My Journey ── */}
            <div className="about-block">
                <h3 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>My Journey</h3>
                <div className="timeline">
                    {milestones.map((m, i) => (
                        <div className="timeline-item" key={i}>
                            <div className="timeline-dot" />
                            <div className="timeline-year">{m.year}</div>
                            <div className="timeline-content">
                                <h4 className="timeline-title">{m.title}</h4>
                                <p className="timeline-desc">{m.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Skills ── */}
            <div className="about-block">
                <h3 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>Skills &amp; Expertise</h3>

                <h4 className="about-skills-subtitle">Technical Skills</h4>
                <div className="skills-grid">
                    {technicalSkills.map((skill, i) => (
                        <div className="skill-card" key={i}>
                            <div className="skill-icon">{skill.icon}</div>
                            <div>
                                <p className="skill-label">{skill.label}</p>
                                <p className="skill-detail">{skill.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <h4 className="about-skills-subtitle" style={{ marginTop: '2rem' }}>Domain Expertise</h4>
                <ul className="domain-list">
                    {domainSkills.map((d, i) => (
                        <li key={i} className="domain-item">
                            <CheckCircle2 size={18} className="domain-check" />
                            <span className="domain-icon">{d.icon}</span>
                            {d.text}
                        </li>
                    ))}
                </ul>
            </div>

            {/* ── CTA ── */}
            <div className="about-cta">
                <p className="about-cta-text">I'm always looking for meaningful projects and collaborations.</p>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ebongb04@gmail.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    Let's Work Together <ArrowRight size={16} />
                </a>
            </div>

        </section>
    );
};

export default About;
