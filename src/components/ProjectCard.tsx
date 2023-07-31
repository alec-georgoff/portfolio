import React from 'react';
import { Project } from '../constants';
import { Card } from 'react-bootstrap';
import { commaSeparated } from '../utils';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = (props: ProjectCardProps) => (
    <Card className="general-card">
        <Card.Body>
            <Card.Title style={{ fontSize: '2rem' }}>
                {props.project.title}
            </Card.Title>
            <Card.Subtitle className="text-muted">
                {commaSeparated(props.project.skills)}
            </Card.Subtitle>
            <Card.Text>
                {
                    <ul>
                        {props.project.bullets.map((b, index) => (
                            <li key={index}>{b}</li>
                        ))}
                    </ul>
                }
            </Card.Text>
            <Card.Link
                href={`https://github.com/alec-georgoff/${props.project.githubExtension}`}
                target="_blank"
            >
                GitHub
            </Card.Link>
        </Card.Body>
    </Card>
);

export default ProjectCard;
