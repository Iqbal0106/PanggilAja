import { useState } from 'react';
import { Order } from '../data/orders';
import { orderService } from '../services/orderService';

export const useOrders = () => {
  const [orders, setOrders] = useState<Order[]>(orderService.getAllOrders());

  const createOrder = (orderData: Omit<Order, 'id' | 'status' | 'createdAt'>) => {
    const newOrder = orderService.createOrder(orderData);
    setOrders(prev => [...prev, newOrder]);
    return newOrder;
  };

  const getOrder = (id: string) => {
    return orderService.getOrderById(id);
  };

  const updateStatus = (id: string, status: Order['status']) => {
    const success = orderService.updateOrderStatus(id, status);
    if (success) {
      setOrders(prev => prev.map(order =>
        order.id === id ? { ...order, status } : order
      ));
    }
    return success;
  };

  return {
    orders,
    createOrder,
    getOrder,
    updateStatus,
  };
};