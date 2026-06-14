import React from 'react'
import './SkillMarquee.css'

export function SkillMarquee({ category }) {
    // Duplicate skills to create seamless loop
    // We duplicate enough times to ensure we fill the height and have a smooth loop
    const marqueeContent = [...category.skills, ...category.skills, ...category.skills, ...category.skills]

    return (
        <div className="skill-marquee-card">
            <h3 className="marquee-card-title">{category.title}</h3>

            <div className="marquee-scroll-container">
                <div className="marquee-scroll-track">
                    {marqueeContent.map((skill, index) => (
                        <div key={`${skill.name}-${index}`} className="marquee-skill-item">
                            <span
                                className="marquee-skill-dot"
                                style={{ background: skill.color }}
                            ></span>
                            <span className="marquee-skill-name">{skill.name}</span>
                        </div>
                    ))}
                </div>

                {/* Gradient Masks for smooth fade */}
                <div className="marquee-mask-top"></div>
                <div className="marquee-mask-bottom"></div>
            </div>
        </div>
    )
}
