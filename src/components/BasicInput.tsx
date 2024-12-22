interface BasicInputProps {
    value: string;
    setValue: (newValue: string) => void;
}

const BasicInput = (props: BasicInputProps) => {
    const { value, setValue } = props;

    return (
        <input
            className="basic-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
};

export default BasicInput;
