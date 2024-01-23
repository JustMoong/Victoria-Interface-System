import React from 'react';
import style from './styles.json';

function TextButtonAccentFill() {
    const TextButtonAccentFillStyle = {
        display: 'flex',
        width: 'auto',
        height: 'auto',
        padding: '4px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px',
        borderRadius: '6px',
        background: 'var(--Accent-Blue-Deep, #007AFF)',
        color: '#ffffff',
        border: 'none',
    };

    return <button style={TextButtonAccentFillStyle}>Button</button>;
}