import React from 'react';
import { jobs } from '../constants';
import JobCard from '../components/JobCard';
import { Col, Container, Row } from 'react-bootstrap';

const ExperiencePage = () => (
    <div>
        <h2>Work Experience</h2>

        <Container>
            <Row xs={1} md={2} style={{ flexDirection: 'row' }}>
                {jobs.map((j, idx) => (
                    <Col key={idx}>
                        <JobCard jobDetails={j} />
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
);

export default ExperiencePage;
