import React from 'react';
import { ExternalLink, Layers } from 'lucide-react';

const projectsData = [
    {
        id: 1,
        title: "MEEI Program",
        role: "Full Stack Developer",
        impact: "Comprehensive program platform designed to deliver educational resources and training initiatives with modern web technologies.",
        tags: ["Education", "Program Management", "React", "Node.js"],
        liveLink: "https://www.meeiprogram.org",
        codeLink: "#",
        feature: "Live"
    },
    {
        id: 2,
        title: "1st Priority Petroleum",
        role: "Full Stack Developer",
        impact: "Leading petroleum services platform providing reliable energy solutions and product distribution across multiple regions.",
        tags: ["Energy", "E-Commerce", "Enterprise", "React"],
        liveLink: "https://www.1stprioritypetroleum.com",
        codeLink: "#",
        feature: "Live"
    },
    {
        id: 3,
        title: "Eticone Energy",
        role: "Full Stack Developer",
        impact: "Innovative energy solutions provider offering sustainable and efficient energy management systems for businesses and communities.",
        tags: ["Energy", "Sustainability", "React", "Enterprise"],
        liveLink: "https://www.eticonenergy.com",
        codeLink: "#",
        feature: "Live"
    },
    {
        id: 4,
        title: "Comternet",
        role: "Full Stack Developer",
        impact: "Communications and internet infrastructure platform providing connectivity solutions and digital services for modern enterprises.",
        tags: ["Telecommunications", "Internet", "Enterprise", "React"],
        liveLink: "https://www.comternet.com",
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
