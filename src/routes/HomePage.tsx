import React from 'react';
import { Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div style={{ flexDirection: 'column' }}>
            <div className="name-title">Alec Georgoff</div>
            <div className="personal-details">
                <em>Seattle, WA</em>
                <em>419-350-7725</em>
                <em>
                    <a href="mailto:alec.georgoff@gmail.com">
                        alec.georgoff@gmail.com
                    </a>
                </em>
                <em>
                    <a href="https://linkedin.com/in/alecgeorgoff">LinkedIn</a>
                </em>
            </div>
            <Stack gap={2}>
                <Button
                    variant="primary"
                    size="lg"
                    onClick={() => navigate('/experience')}
                >
                    Experience
                </Button>
                <Button
                    variant="primary"
                    size="lg"
                    onClick={() => navigate('/education')}
                >
                    Education
                </Button>
                <Button
                    variant="primary"
                    size="lg"
                    onClick={() => navigate('/hobbies')}
                >
                    Hobbies
                </Button>
            </Stack>
            <section>
                Determined full stack software engineer with experience
                mastering new technologies quickly and contributing to existing
                software products. Committed to building resilient software
                while helping cultivate flexible, diverse, and empathetic
                engineering teams.
            </section>
            <h2>Skills</h2>
            Web Application Development | REST API Development | HTML5 | CSS |
            JavaScript | TypeScript | React | SQL | Cloud Computing | C#/.NET |
            Entity Framework | Third Party APIs | Git | GitHub/GitLab |
            Mobile-First Devlopment | Responsive Web Design | CircleCI | Node.js
        </div>
    );
};

export default HomePage;
