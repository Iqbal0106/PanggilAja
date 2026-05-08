# Panggil Aja - React Booking App

Website booking dan cek status untuk jasa laundry & cleaning "Panggil Aja" menggunakan React + Tailwind CSS.

## Fitur

- Form booking dengan validasi
- Generate ID pesanan otomatis
- Modal sukses setelah booking
- Halaman cek status pesanan
- Progress step UI untuk status pesanan
- Desain modern minimalis

## Struktur Proyek

```
src/
├── components/
│   ├── BookingForm.tsx
│   ├── SuccessModal.tsx
│   └── ProgressSteps.tsx
├── pages/
│   ├── BookingPage.tsx
│   └── StatusPage.tsx
├── services/
│   └── orderService.ts
├── hooks/
│   └── useOrders.ts
├── data/
│   └── orders.ts
├── App.tsx
├── index.tsx
└── index.css
```

## Instalasi dan Menjalankan

1. Install dependencies:
   ```
   npm install
   ```

2. Jalankan aplikasi:
   ```
   npm start
   ```

Aplikasi akan berjalan di `http://localhost:3000`.

## Dummy Data

Aplikasi menggunakan dummy data untuk testing. Beberapa ID pesanan contoh:
- PGA-2026-0001 (Selesai)
- PGA-2026-0002 (Diproses)
- PGA-2026-0003 (Menunggu Konfirmasi)

## Teknologi

- React 18
- TypeScript
- Tailwind CSS
- React Router DOM