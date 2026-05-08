import React, { useState } from 'react';
import { useOrders } from '../hooks/useOrders';
import ProgressSteps from '../components/ProgressSteps';

const StatusPage: React.FC = () => {
  const { getOrder } = useOrders();
  const [orderId, setOrderId] = useState('');
  const [order, setOrder] = useState<any>(null);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const foundOrder = getOrder(orderId);
    if (foundOrder) {
      setOrder(foundOrder);
      setError('');
    } else {
      setOrder(null);
      setError('ID pesanan tidak ditemukan');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6 text-primary">Cek Status Pesanan</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">ID Pesanan</label>
            <input
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="Contoh: PGA-2026-0001"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Cek Status
          </button>
        </form>
        {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
        {order && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Detail Pesanan</h2>
            <div className="space-y-2 text-sm">
              <p><strong>ID:</strong> {order.id}</p>
              <p><strong>Nama:</strong> {order.name}</p>
              <p><strong>Layanan:</strong> {order.service}</p>
              <p><strong>Tanggal:</strong> {order.createdAt}</p>
              <p><strong>Status:</strong> {order.status}</p>
            </div>
            <div className="mt-4">
              <ProgressSteps status={order.status} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatusPage;