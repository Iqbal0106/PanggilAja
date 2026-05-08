import React from 'react';
import { Order } from '../data/orders';

interface SuccessModalProps {
  order: Order;
  onClose: () => void;
  onCheckStatus: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ order, onClose, onCheckStatus }) => {
  const handleWhatsApp = () => {
    const message = `Halo, saya ingin konfirmasi pesanan dengan ID: ${order.id}`;
    const url = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold text-center mb-4 text-green-600">Pesanan Berhasil Dibuat!</h2>
        <div className="text-center mb-6">
          <p className="text-lg font-semibold">ID Pesanan: {order.id}</p>
        </div>
        <div className="space-y-3">
          <button
            onClick={onCheckStatus}
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Cek Status
          </button>
          <button
            onClick={handleWhatsApp}
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200"
          >
            Hubungi WhatsApp
          </button>
          <button
            onClick={onClose}
            className="w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition duration-200"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;