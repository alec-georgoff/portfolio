import React from 'react';
import { Card } from 'react-bootstrap';
import { JobDetails } from '../constants';

interface JobCardProps {
    jobDetails: JobDetails;
}

const JobCard = (props: JobCardProps) => (
    <Card style={{ maxWidth: '20rem' }}>
        <Card.Img variant="top" src={props.jobDetails.image} />
        <Card.Body>
            <Card.Title>{props.jobDetails.title}</Card.Title>
            <Card.Subtitle>{props.jobDetails.company}</Card.Subtitle>
            <Card.Text>{props.jobDetails.location}</Card.Text>
            <Card.Text>{`${props.jobDetails.startDate} - ${props.jobDetails.endDate}`}</Card.Text>
        </Card.Body>
    </Card>
);

export default JobCard;
