import { Order, dummyOrders } from '../data/orders';

class OrderService {
  private orders: Order[] = [...dummyOrders];
  private nextId = 4;

  createOrder(orderData: Omit<Order, 'id' | 'status' | 'createdAt'>): Order {
    const newOrder: Order = {
      ...orderData,
      id: `PGA-2026-${String(this.nextId).padStart(4, '0')}`,
      status: 'Menunggu Konfirmasi',
      createdAt: new Date().toISOString().split('T')[0],
    };
    this.orders.push(newOrder);
    this.nextId++;
    return newOrder;
  }

  getOrderById(id: string): Order | undefined {
    return this.orders.find(order => order.id === id);
  }

  updateOrderStatus(id: string, status: Order['status']): boolean {
    const order = this.orders.find(o => o.id === id);
    if (order) {
      order.status = status;
      return true;
    }
    return false;
  }

  getAllOrders(): Order[] {
    return this.orders;
  }
}

export const orderService = new OrderService();