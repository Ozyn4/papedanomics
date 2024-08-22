import React from 'react';

// Define types for Modal props
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Modal Component
const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000, // Ensure it appears on top
    }}>
      <div style={{
        background: 'white',
        padding: '20px',
        borderRadius: '8px',
        width: '400px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
      }}>
        <h2>Hasil Prediksi Ulasan</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '10px',
          marginTop: '20px'
        }}>
          <div style={{
            background: '#f4f4f4',
            padding: '10px',
            borderRadius: '5px',
            textAlign: 'center'
          }}>
            <h3>Atraksi</h3>
            <p>Positif</p>
          </div>
          <div style={{
            background: '#f4f4f4',
            padding: '10px',
            borderRadius: '5px',
            textAlign: 'center'
          }}>
            <h3>Fasilitas</h3>
            <p>Negatif</p>
          </div>
          <div style={{
            background: '#f4f4f4',
            padding: '10px',
            borderRadius: '5px',
            textAlign: 'center'
          }}>
            <h3>Harga</h3>
            <p>Netral</p>
          </div>
          <div style={{
            background: '#f4f4f4',
            padding: '10px',
            borderRadius: '5px',
            textAlign: 'center'
          }}>
            <h3>Akses</h3>
            <p>Positif</p>
          </div>
        </div>
        <button onClick={onClose} style={{
          marginTop: '20px',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          backgroundColor: '#007bff',
          color: 'white',
          cursor: 'pointer'
        }}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
