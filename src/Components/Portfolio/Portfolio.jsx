import React from 'react'
import './Portfolio.css'
import portfolio_1 from '../Assets/portfolio-1-img.jpg';
import portfolio_2 from '../Assets/portfolio-2-img.jpg'
import portfolio_3 from '../Assets/portfolio-3-img.jpg'
import portfolio_4 from '../Assets/portfolio-4-img.jpg'
import portfolio_5 from '../Assets/portfolio-5-img.jpg'

const projects = [
    {
        id: 1,
        title: "Branding Nice Studio",
        category: "Visual Identity",
        image: portfolio_1,
        size: "large",
        desc: "A comprehensive branding solution for a modern design studio focusing on minimalism."
    },
    {
        id: 2,
        title: "Cyber Flow App",
        category: "UI/UX Design",
        image: portfolio_2,
        size: "small",
        desc: "Future-ready mobile interface."
    },
    {
        id: 3,
        title: "Neo-Converse",
        category: "Development",
        image: portfolio_3,
        size: "small",
        desc: "E-commerce for the next gen."
    },
    {
        id: 4,
        title: "Abstract Logic",
        category: "Art Direction",
        image: portfolio_4,
        size: "medium",
        desc: "Blending logic with abstract aesthetics."
    },
    {
        id: 5,
        title: "Project Obsidian",
        category: "Web App",
        image: portfolio_5,
        size: "medium",
        desc: "Performance optimized dashboard."
    }
]

const Portfolio = () => {
    return (
        <section className='portfolio-section'>
            <div className="portfolio-header">
                <span className="sub-heading">My Work</span>
                <h1 className="main-heading">Selected <span>Projects</span></h1>
                <p className="header-desc">Blending technical precision with creative vision to build digital experiences that matter.</p>
            </div>

            <div className="portfolio-bento-grid">
                {projects.map((project) => (
                    <div key={project.id} className={`bento-item ${project.size}`}>
                        <div className="project-card">
                            <div className="project-img-wrapper">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <button className="view-btn">
                                        View Case Study <i className='fa fa-arrow-right'></i>
                                    </button>
                                </div>
                            </div>
                            <div className="project-content">
                                <span className="project-category">{project.category}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className='portfolio-footer'>
                <button className='view-all-btn'>Explore All Work</button>
            </div>
        </section>
    )
}

export default Portfolio;
