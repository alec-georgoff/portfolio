import { useState } from 'react';
import ListSection from '../components/ListSection';
import React from 'react';
import { Button } from 'react-bootstrap';

const BikeCampingPlanner = () => {
    const [trips, setTrips] = useState<string[]>([]);
    const [sections, setSections] = useState<React.ReactNode[]>([
        <ListSection />,
        <ListSection />,
    ]);

    const addSection = () => setSections(sections.concat(<ListSection />));

    return (
        <div>
            <span>bike camping time!</span>
            {sections.map((s) => s)}
            <Button variant="primary" onClick={addSection}>
                Add Section
            </Button>
        </div>
    );
};

export default BikeCampingPlanner;
