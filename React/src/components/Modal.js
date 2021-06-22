import React from 'react';
import '../styles/modalStyles.css';

const Modal = ({ selectedImg, setSelectedImg }) => {
    const handleClick = (e) => {
        setSelectedImg(null);
    };
    return (
        <div id='backdrop' onClick={handleClick}>
            <img src={selectedImg} alt='enlarged pic' />
        </div>
    );
};

export default Modal;
