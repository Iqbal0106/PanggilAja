const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
const ORDERS_TABLE = 'orders';

const isSupabaseConfigured = () =>
    SUPABASE_URL.startsWith('https://') && SUPABASE_ANON_KEY && SUPABASE_ANON_KEY !== 'YOUR_SUPABASE_ANON_KEY';

const buildClient = () => {
    if (!window.supabase || !isSupabaseConfigured()) return null;
    return window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
};

const client = buildClient();

const normalizeRow = (row) => {
    if (!row) return null;
    return {
        id: row.id,
        name: row.name,
        service: row.service,
        address: row.address,
        date: row.date,
        time: row.time,
        schedule: row.schedule,
        status: row.status,
        statusIndex: row.status_index,
        createdAt: row.created_at_epoch,
        bookedAt: row.booked_at
    };
};

window.PanggilAjaDB = {
    isConfigured: () => Boolean(client),
    async createOrder(order) {
        if (!client) return { ok: false, reason: 'Supabase belum dikonfigurasi' };
        const payload = {
            id: order.id,
            name: order.name,
            service: order.service,
            address: order.address,
            date: order.date,
            time: order.time,
            schedule: order.schedule,
            status: order.status,
            status_index: order.statusIndex ?? 0,
            created_at_epoch: order.createdAt,
            booked_at: order.bookedAt
        };
        const { error } = await client.from(ORDERS_TABLE).insert(payload);
        if (error) return { ok: false, reason: error.message };
        return { ok: true };
    },
    async getOrderById(orderId) {
        if (!client) return { ok: false, reason: 'Supabase belum dikonfigurasi', data: null };
        const { data, error } = await client
            .from(ORDERS_TABLE)
            .select('*')
            .eq('id', orderId)
            .maybeSingle();
        if (error) return { ok: false, reason: error.message, data: null };
        return { ok: true, data: normalizeRow(data) };
    }
};
