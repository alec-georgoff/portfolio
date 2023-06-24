import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { JobDetails } from '../constants';

interface JobCardProps {
    jobDetails: JobDetails;
}

const JobCard = (props: JobCardProps) => {
    const [showBack, setShowBack] = useState(false);

    const persistentDetails = (
        <>
            <Card.Title>{props.jobDetails.title}</Card.Title>
            <Card.Subtitle>{props.jobDetails.company}</Card.Subtitle>
            <Card.Text>{props.jobDetails.location}</Card.Text>
            <Card.Text>{`${props.jobDetails.startDate} - ${props.jobDetails.endDate}`}</Card.Text>
        </>
    );

    return showBack ? (
        <Card onClick={() => setShowBack(!showBack)}>
            <Card.Body>{persistentDetails}</Card.Body>
            <Card.Body>
                <ul>
                    {props.jobDetails.bullets.map((b) => (
                        <li>{b}</li>
                    ))}
                </ul>
            </Card.Body>
        </Card>
    ) : (
        <Card
            style={{ maxWidth: '20rem' }}
            onClick={() => setShowBack(!showBack)}
        >
            <Card.Img variant="top" src={props.jobDetails.image} />
            <Card.Body>{persistentDetails}</Card.Body>
        </Card>
    );
};

export default JobCard;
