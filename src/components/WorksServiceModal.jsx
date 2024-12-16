import React from 'react';

const WorksServiceModal = ({ title, videoSrc, onClose }) => (
  <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-800 bg-opacity-75">
    <div className="bg-white p-8 rounded-lg mt-[70px]">
      {videoSrc && (
        <video
          src={videoSrc}
          className="object-contain"
          style={{ maxHeight: '400px', maxWidth: '100%' }}
          controls
          autoPlay
          muted
          playsInline
        />
      )}
      <h3 className="text-gray-800 text-2xl font-bold text-left mb-4 mt-[20px]">{title}</h3>
      <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded-md">
        Close
      </button>
    </div>
  </div>
);

export default WorksServiceModal;
