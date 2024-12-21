import { useState } from 'react';
import ListSection from '../components/ListSection';
import { Button } from 'react-bootstrap';
import {
    DEFAULT_SECTIONS,
    NEW_SECTION,
    PackingListSection,
} from '../constants';

const BikeCampingPlanner = () => {
    const [sections, setSections] =
        useState<PackingListSection[]>(DEFAULT_SECTIONS);

    const addSection = () => setSections(sections.concat(NEW_SECTION));

    return (
        <div>
            <span>bike camping time!</span>
            {sections.map((s) => (
                <ListSection key={s.title} title={s.title} items={s.items} />
            ))}
            <Button variant="primary" onClick={addSection}>
                Add Section
            </Button>
        </div>
    );
};

export default BikeCampingPlanner;
