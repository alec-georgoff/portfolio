import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import BasicInput from './BasicInput';

const ListSection = () => {
    const [items, setItems] = useState<string[]>(['tent', 'water']);

    const addItem = () => setItems(items.concat(''));

    return (
        <div className="list-section-container">
            <div>
                <BasicInput initialValue="New Section" />
            </div>
            <ul>
                {items.map((i) => (
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Form.Check />
                        <BasicInput initialValue={i} />
                    </div>
                ))}
            </ul>
            <Button variant="primary" onClick={addItem}>
                Add Item
            </Button>
        </div>
    );
};

export default ListSection;
