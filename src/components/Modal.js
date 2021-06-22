import React from 'react';
import { motion } from 'framer-motion';
import '../styles/modalStyles.css';

const Modal = ({ selectedImg, setSelectedImg }) => {
    const handleClick = (e) => {
        if (e.target.id === 'backdrop') {
            setSelectedImg(null);
        }
    };
    return (
        <motion.div
            id='backdrop'
            onClick={handleClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.img
                src={selectedImg}
                alt='enlarged pic'
                initial={{ y: '-100vh' }}
                animate={{ y: 0 }}
            />
        </motion.div>
    );
};

export default Modal;
