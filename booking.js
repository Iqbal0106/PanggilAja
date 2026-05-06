// --- BOOKING FORM ---
const bookingForm = document.getElementById('booking-form');

// Pre-select service from URL
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const service = urlParams.get('service');
    if (service && bookingForm) {
        const select = bookingForm.querySelector('select[name="layanan"]');
        if (select) {
            select.value = service;
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
        
        // Create WhatsApp Message
        const message = `Halo Panggil Aja, saya ingin memesan layanan:%0A%0A` +
                        `Nama: ${name}%0A` +
                        `Alamat: ${alamat}%0A` +
                        `Layanan: ${service}%0A` +
                        `Tanggal: ${date}%0A` +
                        `Waktu: ${waktu}%0A%0A` +
                        `Mohon konfirmasinya. Terima kasih!`;
        
        const waUrl = `https://wa.me/62895413318989?text=${message}`;
        
        // Redirect to WA
        window.open(waUrl, '_blank');
        alert('Terima kasih! Anda akan diarahkan ke WhatsApp untuk konfirmasi.');
        bookingForm.reset();
    });
}
