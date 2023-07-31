import { Col, Container, Row } from 'react-bootstrap';
import { projects } from '../constants';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage = () => (
    <div>
        <div className="page-title">Projects</div>

        <Container fluid={'xs'}>
            <Row xs={1} lg={2} style={{ flexDirection: 'row' }}>
                {projects.map((p, idx) => (
                    <Col key={idx}>
                        <ProjectCard project={p} />
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
);

export default ProjectsPage;
