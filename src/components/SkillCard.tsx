import React from 'react';
import { skillCardColor } from '../constants';

interface SkillCardProps {
    skill: string;
    strength: number;
}

const SkillCard = (props: SkillCardProps) => (
    <div
        className="skill-card"
        style={{ border: skillCardColor(props.strength) }}
    >
        {props.skill}
    </div>
);

export default SkillCard;
