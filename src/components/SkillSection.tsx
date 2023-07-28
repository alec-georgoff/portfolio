import React from 'react';
import { skills } from '../constants';
import SkillCard from './SkillCard';
import FadeIn from './FadeIn';

const SkillSection = () => (
    <div>
        <h2>Skills</h2>
        <div className="skill-gradient">
            <span>Novice</span>
            <div />
            <span>Expert</span>
        </div>
        <div className="skill-card-layout">
            <FadeIn className="skill-card-layout" delay={100}>
                {skills
                    .sort((a, b) => b.strength - a.strength)
                    .map((s) => (
                        <SkillCard
                            key={s.name}
                            skill={s.name}
                            strength={s.strength}
                        />
                    ))}
            </FadeIn>
        </div>
    </div>
);

export default SkillSection;
