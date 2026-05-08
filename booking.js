// --- BOOKING FORM ---
const bookingForm = document.getElementById('booking-form');
const successBox = document.getElementById('booking-success');
const successOrderId = document.getElementById('success-order-id');
const successOrderStatus = document.getElementById('success-order-status');
const successOrderEta = document.getElementById('success-order-eta');
const successTrackLink = document.getElementById('success-track-link');

// Pre-select service from URL
const serviceLabels = {
    'laundry': 'Laundry Kiloan',
    'cleaning': 'Cleaning Rumah',
    'deep-cleaning': 'Deep Cleaning'
};

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const service = urlParams.get('service');

    if (service && bookingForm) {
        const select = bookingForm.querySelector('select[name="layanan"]');
        const label = select ? select.closest('.form-group')?.querySelector('label') : null;
        const heading = document.querySelector('.booking-text h2');
        const serviceName = serviceLabels[service];

        if (select && serviceName) {
            const option = select.querySelector(`option[value="${service}"]`);
            if (option) {
                select.innerHTML = '';
                select.appendChild(option);
                select.value = service;
            }
        }

        if (label && serviceName) {
            label.textContent = `Layanan (${serviceName})`;
        }

        if (heading && serviceName) {
            heading.textContent = `Booking ${serviceName}`;
            document.title = `Booking ${serviceName} - Panggil Aja`;
        }
    }
});

if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(bookingForm);
        const name = formData.get('nama');
        const service = formData.get('layanan');
        const date = formData.get('tanggal');
        const alamat = formData.get('alamat');
        const waktu = formData.get('waktu');

        const now = Date.now();
        const shortId = String(now).slice(-4);
        const orderId = `PGL-${shortId}`;
        const status = 'Menunggu Konfirmasi';
        const eta = `${date} ${waktu} WITA`;

        const existingOrders = JSON.parse(localStorage.getItem('panggilAjaOrders') || '[]');
        existingOrders.push({
            id: orderId,
            name,
            service,
            address: alamat,
            date,
            time: waktu,
            status,
            eta,
            createdAt: now
        });
        localStorage.setItem('panggilAjaOrders', JSON.stringify(existingOrders));

        if (successOrderId) successOrderId.textContent = orderId;
        if (successOrderStatus) successOrderStatus.textContent = status;
        if (successOrderEta) successOrderEta.textContent = eta;
        if (successTrackLink) successTrackLink.setAttribute('href', `tracking.html?orderId=${encodeURIComponent(orderId)}`);
        if (successBox) successBox.classList.remove('hidden');
    });
}
