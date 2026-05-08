import React, { useState } from 'react';
import BookingForm from '../components/BookingForm';
import SuccessModal from '../components/SuccessModal';
import { useOrders } from '../hooks/useOrders';
import { Order } from '../data/orders';

const BookingPage: React.FC = () => {
  const { createOrder } = useOrders();
  const [showModal, setShowModal] = useState(false);
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);

  const handleBookingSubmit = (data: Omit<Order, 'id' | 'status' | 'createdAt'>) => {
    const newOrder = createOrder(data);
    setCurrentOrder(newOrder);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentOrder(null);
  };

  const handleCheckStatus = () => {
    // Navigate to status page, but for now just close modal
    setShowModal(false);
    // In a real app, navigate to /status or pass order id
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="text-center text-3xl font-extrabold text-primary">Panggil Aja</h1>
          <p className="mt-2 text-center text-sm text-gray-600">
            Solusi Laundry & Cleaning Profesional
          </p>
        </div>
        <BookingForm onSubmit={handleBookingSubmit} />
      </div>
      {showModal && currentOrder && (
        <SuccessModal
          order={currentOrder}
          onClose={handleCloseModal}
          onCheckStatus={handleCheckStatus}
        />
      )}
    </div>
  );
};

export default BookingPage;