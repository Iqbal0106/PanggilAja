// --- SOCIAL PROOF NOTIFICATION ---
const socialProof = document.getElementById('social-proof');
const spData = [
    { name: "Budi", city: "Jakarta", service: "Deep Cleaning" },
    { name: "Siska", city: "Tangerang", service: "Laundry Kiloan" },
    { name: "Andi", city: "Depok", service: "Cleaning Rumah" },
    { name: "Rina", city: "Bekasi", service: "Laundry Ekspres" }
];

const showSocialProof = () => {
    if (!socialProof) return;
    const random = spData[Math.floor(Math.random() * spData.length)];
    const spText = socialProof.querySelector('.sp-text');
    
    spText.innerHTML = `<p><strong>${random.name} (${random.city})</strong> baru saja memesan ${random.service}</p><span>Baru saja</span>`;
    
    socialProof.classList.add('show');
    
    setTimeout(() => {
        socialProof.classList.remove('show');
    }, 5000);
};

// Show every 15-25 seconds
if (socialProof) {
    setInterval(showSocialProof, 20000);
    // Initial show after 5s
    setTimeout(showSocialProof, 5000);
}
