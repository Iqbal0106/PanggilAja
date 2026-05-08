# Setup Supabase (Opsi 1)

## 1) Buat project Supabase
- Buka dashboard Supabase, buat project baru.
- Ambil:
  - `Project URL`
  - `anon public key`

## 2) Buat tabel `orders`
Jalankan SQL ini di SQL Editor:

```sql
create table if not exists public.orders (
  id text primary key,
  name text not null,
  service text not null,
  address text not null,
  date text not null,
  time text not null,
  schedule text not null,
  status text not null default 'Menunggu Konfirmasi',
  status_index int not null default 0,
  created_at_epoch bigint not null,
  booked_at timestamptz not null default now()
);
```

## 3) Aktifkan policy (RLS) sederhana untuk demo
Jika RLS aktif, tambahkan policy:

```sql
alter table public.orders enable row level security;

create policy "public insert orders"
on public.orders
for insert
to anon
with check (true);

create policy "public read orders"
on public.orders
for select
to anon
using (true);
```

## 4) Isi config frontend
Edit file `supabase-client.js`:
- ganti `YOUR_SUPABASE_URL`
- ganti `YOUR_SUPABASE_ANON_KEY`

## 5) Selesai
- Booking akan simpan ke Supabase (dan tetap fallback localStorage).
- Cek Status akan cari ke Supabase dulu, lalu fallback ke localStorage jika belum ada.
