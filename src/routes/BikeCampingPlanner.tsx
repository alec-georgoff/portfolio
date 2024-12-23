import { useState } from 'react';
import ListSection from '../components/ListSection';
import { Button } from 'react-bootstrap';
import { DEFAULT_SECTIONS, PackingListSection } from '../constants';

const BikeCampingPlanner = () => {
    const [sections, setSections] =
        useState<PackingListSection[]>(DEFAULT_SECTIONS);

    const addSection = () =>
        setSections(
            sections.concat({
                id: crypto.randomUUID(),
                title: 'New Section',
                items: [],
            })
        );
    const removeSection = (id: string) =>
        setSections(sections.filter((s) => s.id !== id));

    return (
        <div>
            <span>bike camping time!</span>
            {sections.map((s) => (
                <ListSection
                    key={s.id}
                    title={s.title}
                    items={s.items}
                    onRemove={() => removeSection(s.id)}
                />
            ))}
            <Button variant="primary" onClick={addSection}>
                Add Section
            </Button>
        </div>
    );
};

export default BikeCampingPlanner;
