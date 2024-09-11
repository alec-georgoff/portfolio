/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import SkillSection from '../components/SkillSection';
import ResumePdf from '../documents/AlecGeorgoff_Resume.pdf';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div style={{ flexDirection: 'column' }}>
            <div className="name-title">Alec Georgoff</div>
            <div className="personal-details">
                <em>Seattle, WA</em>
            </div>
            <div className="personal-details">
                <Button
                    variant="secondary"
                    href="mailto:alec.georgoff@gmail.com"
                    size="sm"
                >
                    alec.georgoff@gmail.com
                </Button>
            </div>
            <div className="personal-details">
                <Button
                    variant="secondary"
                    href="https://linkedin.com/in/alecgeorgoff"
                    size="sm"
                >
                    LinkedIn
                </Button>
                <Button
                    variant="secondary"
                    href={ResumePdf}
                    size="sm"
                    target="_blank"
                >
                    Resume
                </Button>
                <Button
                    variant="secondary"
                    href="https://github.com/alec-georgoff"
                    size="sm"
                >
                    GitHub
                </Button>
            </div>
            <div className="home-page-nav-buttons">
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
                        onClick={() => navigate('/projects')}
                    >
                        Projects
                    </Button>
                    <Button variant="primary" size="lg" disabled>
                        Hobbies (Coming Soon!)
                    </Button>
                </Stack>
            </div>
            <section>
                Determined full stack software engineer with experience
                mastering new technologies quickly and contributing to existing
                software products. Committed to building resilient software
                while helping cultivate flexible, diverse, and empathetic
                engineering teams.
            </section>
            <SkillSection />
        </div>
    );
};

export default HomePage;
