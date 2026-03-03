import React from 'react';
import { Code2, Database, Layout, Server, Brain, GitBranch } from 'lucide-react';

const techCategories = [
    {
        title: "Frontend",
        icon: <Layout size={24} />,
        skills: ["React", "Vite", "Tailwind/CSS", "HTML5", "JavaScript"]
    },
    {
        title: "Backend",
        icon: <Server size={24} />,
        skills: ["Node.js", "Express", "Python", "API Design"]
    },
    {
        title: "AI & Data",
        icon: <Brain size={24} />,
        skills: ["Machine Learning", "Data Analysis", "Python", "OpenAI API"]
    },
    {
        title: "Tools & DevOps",
        icon: <GitBranch size={24} />,
        skills: ["Git", "GitHub", "VS Code", "Deployment"]
    }
];

const TechStack = () => {
    return (
        <section className="tech-stack container" style={{ padding: '4rem 2rem' }}>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Tech Stack</h2>
            <div className="tech-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '2rem'
            }}>
                {techCategories.map((category, index) => (
                    <div key={index} className="tech-card" style={{
                        background: 'var(--glass-bg)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '16px',
                        padding: '2rem',
                        transition: 'transform 0.3s ease'
                    }}>
                        <div className="tech-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>
                            {category.icon}
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--text-primary)' }}>{category.title}</h3>
                        </div>
                        <div className="tech-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                            {category.skills.map((skill, idx) => (
                                <span key={idx} style={{
                                    fontSize: '0.875rem',
                                    padding: '0.35rem 0.75rem',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    borderRadius: '12px',
                                    color: 'var(--text-secondary)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)'
                                }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
