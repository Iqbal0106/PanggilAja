// --- UTILS ---
const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(number);
};

// --- LAUNDRY CALCULATOR ---
const weightInput = document.getElementById('calc-weight');
const serviceSelect = document.getElementById('calc-service');
const totalDisplay = document.getElementById('calc-total');
const calcCta = document.getElementById('calc-cta');

const calculatePrice = () => {
    const weight = parseFloat(weightInput.value) || 0;
    const pricePerKg = parseInt(serviceSelect.value);
    const total = weight * pricePerKg;
    totalDisplay.textContent = formatRupiah(total);

    // Show/Hide CTA button
    if (weight > 0 && calcCta) {
        calcCta.classList.remove('hidden');
    } else if (calcCta) {
        calcCta.classList.add('hidden');
    }
};

if (weightInput && serviceSelect) {
    weightInput.addEventListener('input', calculatePrice);
    serviceSelect.addEventListener('change', calculatePrice);
}
