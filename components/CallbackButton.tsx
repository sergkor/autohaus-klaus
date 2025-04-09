'use client';

import React, { useState } from 'react';

export default function CallbackButton() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <button 
        className="callback-button"
        onClick={() => setIsFormOpen(true)}
      >
        Request a Callback
      </button>

      {isFormOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button 
              className="close-button"
              onClick={() => setIsFormOpen(false)}
            >
              ×
            </button>
            <h3>Request a Callback</h3>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe_8j4AzIlCXHyWaQEGMJSC8LbHa4Rjh0_KdHorJYYoZJT3nQ/viewform?embedded=true" width="100%" height="600" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </div>
        </div>
      )}

      <style jsx>{`
        .callback-button {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background: #1a1a1a;
          color: white;
          padding: 15px 25px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
          z-index: 100;
          font-weight: 600;
        }

        .callback-button:hover {
          background: #333;
          transform: translateY(-2px);
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-content {
          background: white;
          padding: 30px;
          border-radius: 8px;
          width: 90%;
          max-width: 600px;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }

        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #333;
          padding: 5px 10px;
        }

        .close-button:hover {
          color: #000;
        }

        .modal-content h3 {
          margin-top: 0;
          margin-bottom: 20px;
          text-align: center;
          color: #333;
          font-size: 1.8rem;
        }

        @media (max-width: 768px) {
          .callback-button {
            bottom: 20px;
            right: 20px;
            padding: 12px 20px;
          }

          .modal-content {
            width: 95%;
            padding: 20px;
          }
        }
      `}</style>
    </>
  );
} 