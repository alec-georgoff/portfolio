import { useState } from 'react';

interface BasicInputProps {
    initialValue?: string;
}

const BasicInput = (props: BasicInputProps) => {
    const { initialValue } = props;

    const [value, setValue] = useState<string>(initialValue ?? '');

    return <input value={value} onChange={(e) => setValue(e.target.value)} />;
};

export default BasicInput;
