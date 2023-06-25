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
            <Card.Title style={{ fontSize: '2rem', textAlign: 'center' }}>
                {props.jobDetails.title}
            </Card.Title>
            <Card.Subtitle style={{ textAlign: 'center', color: '#667069' }}>
                {props.jobDetails.company}
            </Card.Subtitle>
            <Card.Text style={{ color: '#667069' }}>
                {props.jobDetails.location}
            </Card.Text>
            <Card.Text
                style={{ color: '#667069' }}
            >{`${props.jobDetails.startDate} - ${props.jobDetails.endDate}`}</Card.Text>
        </>
    );

    return (
        <Card
            onClick={() => setShowBack(!showBack)}
            style={{
                margin: '1rem',
                minHeight: '31rem',
                maxHeight: '40rem',
                width: '25rem',
                maxWidth: '25rem',
                boxShadow:
                    '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            }}
        >
            {showBack ? (
                <>
                    <Card.Body>{persistentDetails}</Card.Body>
                    <Card.Body>
                        <ul>
                            {props.jobDetails.bullets.map((b, idx) => (
                                <li key={idx}>{b}</li>
                            ))}
                        </ul>
                    </Card.Body>
                </>
            ) : (
                <>
                    <Card.Img
                        variant="top"
                        src={props.jobDetails.image}
                        style={{
                            padding: '1rem',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            width: '20rem',
                            height: '20rem',
                        }}
                    />
                    <Card.Body>{persistentDetails}</Card.Body>
                </>
            )}
        </Card>
    );
};

export default JobCard;
