import React from "react";

const ServiceModal = ({ title, icon, modalImage, onClose }) => (
  <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-800 bg-opacity-75">
    <div className="bg-white p-8 rounded-lg">
      {modalImage && (
        <img src={modalImage} alt={title} className="w-500 h-500 object-contain" />
      )}
      <h3 className="text-gray-800 text-2xl font-bold text-center mb-4">{title}</h3>
      <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded-md">Close</button>
    </div>
  </div>
);

export default ServiceModal;
