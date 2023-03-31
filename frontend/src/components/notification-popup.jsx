import React, { useState } from 'react';

export default function Popup({ message }) {
    const [isOpen, setIsOpen] = useState(true);

    function handleClose() {
        setIsOpen(false);
    }

    return (
        <div style={{ display: isOpen ? 'block' : 'none', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', border: '1px solid black', padding: '20px' }}>
            <span style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }} onClick={handleClose}>&times;</span>
            <p>{message}</p>
        </div>
    );
}

