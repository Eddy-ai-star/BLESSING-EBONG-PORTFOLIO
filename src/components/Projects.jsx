import React from 'react';
import { ExternalLink, Layers } from 'lucide-react';

const projectsData = [
    {
        id: 1,
        title: "JoxaPay",
        role: "Full Stack Developer",
        impact: "A modern fintech payment platform enabling seamless and secure digital transactions.",
        tags: ["Fintech", "Payments", "React", "Node.js"],
        liveLink: "https://joxapay.com",
        codeLink: "#",
        feature: "Live"
    },
    {
        id: 2,
        title: "FriiMarket",
        role: "Full Stack Developer",
        impact: "Nigeria's premier marketplace for local & global trade — buy, sell, and source from China with secure escrow payments and agent-powered verification.",
        tags: ["E-Commerce", "Marketplace", "Escrow", "React"],
        liveLink: "https://friimarket.com",
        codeLink: "#",
        feature: "Live"
    },
    {
        id: 3,
        title: "HeemssCare",
        role: "Full Stack Developer",
        impact: "UK's trusted on-demand care marketplace connecting families with verified carers in minutes for quality home care.",
        tags: ["Healthcare", "Marketplace", "React", "UK"],
        liveLink: "https://heemscare.com",
        codeLink: "#",
        feature: "Live"
    },
    {
        id: 4,
        title: "Shop4Me",
        role: "Full Stack Developer",
        impact: "Shop from any market in Nigeria without leaving home — trusted agents, transparent pricing, and doorstep delivery.",
        tags: ["E-Commerce", "Nigeria", "Delivery", "React"],
        liveLink: "https://shop4meng.com",
        codeLink: "#",
        feature: "Live"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects container">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
                {projectsData.map((project) => (
                    <div key={project.id} className="project-card">
                        <div className="project-content">
                            <div className="project-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                <h3 className="project-title">{project.title}</h3>
                                <span className="btn btn-primary" style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem', borderRadius: '999px', cursor: 'default' }}>{project.feature}</span>
                            </div>

                            <div className="project-details" style={{ margin: '1rem 0' }}>
                                <div style={{ marginBottom: '0.5rem' }}>
                                    <span style={{ color: 'var(--accent-secondary)', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase' }}>Role:</span>
                                    <span style={{ color: 'var(--text-primary)', marginLeft: '0.5rem', fontSize: '0.95rem' }}>{project.role}</span>
                                </div>
                                <div>
                                    <span style={{ color: 'var(--accent-secondary)', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase' }}>Impact:</span>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.25rem' }}>{project.impact}</p>
                                </div>
                            </div>

                            <div className="project-tags">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="tag"><Layers size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} />{tag}</span>
                                ))}
                            </div>

                            <div className="project-links">
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                                    <ExternalLink size={16} /> Visit Site
                                </a>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
