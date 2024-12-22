import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import BasicInput from './BasicInput';
import { PackingListSection } from '../constants';

const ListSection = (props: PackingListSection) => {
    // TODO: update state to pass even further up
    const { title, items } = props;
    const [currentItems, setCurrentItems] = useState<string[]>(items);
    const [sectionTitle, setSectionTitle] = useState<string>(title);

    const setItemValue = (idx: number, newValue: string) => {
        const copy = [...currentItems];
        copy[idx] = newValue;
        setCurrentItems(copy);
    };

    const addItem = () => setCurrentItems(currentItems.concat(''));
    const removeItem = (item: string) =>
        setCurrentItems(currentItems.filter((ci) => ci !== item));

    return (
        <div className="list-section-container">
            <div>
                <BasicInput value={sectionTitle} setValue={setSectionTitle} />
            </div>
            <ul>
                {currentItems.map((item, i) => (
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Form.Check />
                        <BasicInput
                            value={item}
                            setValue={(newValue: string) =>
                                setItemValue(i, newValue)
                            }
                        />
                        <Button
                            variant="secondary"
                            onClick={() => removeItem(item)}
                        >
                            X
                        </Button>
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
