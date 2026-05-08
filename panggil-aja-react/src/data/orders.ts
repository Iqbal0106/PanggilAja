export interface Order {
  id: string;
  name: string;
  whatsapp: string;
  address: string;
  service: string;
  notes: string;
  status: 'Menunggu Konfirmasi' | 'Diproses' | 'Petugas Menuju Lokasi' | 'Selesai';
  createdAt: string;
}

export const dummyOrders: Order[] = [
  {
    id: 'PGA-2026-0001',
    name: 'John Doe',
    whatsapp: '081234567890',
    address: 'Jl. Sudirman No. 1, Jakarta',
    service: 'Laundry Kiloan',
    notes: 'Cuci cepat',
    status: 'Selesai',
    createdAt: '2026-05-01',
  },
  {
    id: 'PGA-2026-0002',
    name: 'Jane Smith',
    whatsapp: '081234567891',
    address: 'Jl. Thamrin No. 2, Jakarta',
    service: 'Cleaning Rumah',
    notes: 'Fokus kamar mandi',
    status: 'Diproses',
    createdAt: '2026-05-05',
  },
  {
    id: 'PGA-2026-0003',
    name: 'Bob Johnson',
    whatsapp: '081234567892',
    address: 'Jl. Gatot Subroto No. 3, Jakarta',
    service: 'Laundry Satuan',
    notes: 'Jas kantor',
    status: 'Menunggu Konfirmasi',
    createdAt: '2026-05-08',
  },
];

export const services = [
  'Laundry Kiloan',
  'Laundry Satuan',
  'Cleaning Rumah',
  'Cleaning Kantor',
  'Deep Cleaning',
];