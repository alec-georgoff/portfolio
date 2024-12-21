import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import BasicInput from './BasicInput';
import { PackingListSection } from '../constants';

const ListSection = (props: PackingListSection) => {
    const { title, items } = props;
    const [currentItems, setCurrentItems] = useState<string[]>(items);

    const addItem = () => setCurrentItems(currentItems.concat(''));

    return (
        <div className="list-section-container">
            <div>
                <BasicInput initialValue={title} />
            </div>
            <ul>
                {currentItems.map((i) => (
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
