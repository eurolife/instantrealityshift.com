import React, { useState } from 'react';
import Modal from './Modal.jsx';

const ModalTrigger = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition cursor-pointer transition duration-300"
      >
        {title}
      </button>

      <Modal title={title} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-2xl font-bold mb-4">
          Welcome to Instant Reality Shift
        </h2>
        <p className="text-gray-300">
          This audio experience is here to help you realign, elevate, and
          attract.
        </p>
      </Modal>
    </>
  );
};

export default ModalTrigger;
