// ButtonComponent.tsx
import React from 'react';

type ButtonComponentProps = {
    count: number;
    onClick: () => void;
};

const ButtonComponent: React.FC<ButtonComponentProps> = ({ count, onClick }) => {
    return (
        <button onClick={onClick}>
            Click me! Count: {count}
        </button>
    );
};

export default ButtonComponent;
