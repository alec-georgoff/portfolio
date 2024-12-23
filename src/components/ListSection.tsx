import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import BasicInput from './BasicInput';
import { PackingListSection } from '../constants';

interface ListSectionProps extends Omit<PackingListSection, 'id'> {
    onRemove: () => void;
}

const ListSection = (props: ListSectionProps) => {
    // TODO: update state to pass even further up
    const { title, items, onRemove } = props;
    const [currentItems, setCurrentItems] = useState<string[]>(items);
    const [sectionTitle, setSectionTitle] = useState<string>(title);

    const setItemValue = (idx: number, newValue: string) => {
        const copy = [...currentItems];
        copy[idx] = newValue;
        setCurrentItems(copy);
    };

    const addItem = () => setCurrentItems(currentItems.concat(''));
    const removeItem = (i: number) => {
        const copy = [...currentItems];
        copy.splice(i, 1);
        setCurrentItems(copy);
    };

    return (
        <div className="list-section-container">
            <div>
                <BasicInput value={sectionTitle} setValue={setSectionTitle} />
            </div>
            <ul>
                {currentItems.map((item, i) => (
                    <div
                        style={{ display: 'flex', flexDirection: 'row' }}
                        key={`key${i}`}
                    >
                        <Form.Check />
                        <BasicInput
                            value={item}
                            setValue={(newValue: string) =>
                                setItemValue(i, newValue)
                            }
                        />
                        <Button
                            variant="secondary"
                            onClick={() => removeItem(i)}
                        >
                            X
                        </Button>
                    </div>
                ))}
            </ul>
            <Button variant="primary" onClick={addItem}>
                Add Item
            </Button>
            <Button variant="primary" onClick={onRemove}>
                Delete Section
            </Button>
        </div>
    );
};

export default ListSection;
