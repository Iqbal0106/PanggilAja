// --- HAMBURGER MENU ---
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        const icon = hamburgerBtn.querySelector('i');
        if (navMenu.classList.contains('show')) {
            icon.setAttribute('data-lucide', 'x');
        } else {
            icon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons();
    });
}

// Close menu when clicking nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) navMenu.classList.remove('show');
        if (hamburgerBtn) {
            const icon = hamburgerBtn.querySelector('i');
            icon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        }
    });
});

// --- SCROLL ANIMATIONS ---
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.card, .feature-card, .ba-card, .section h2, .calculator-container, .booking-wrapper');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
        observer.observe(el);
    });

    const style = document.createElement('style');
    style.innerHTML = `.animate-in { opacity: 1 !important; transform: translateY(0) !important; }`;
    document.head.appendChild(style);
});

// --- STICKY HEADER ---
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (!header) return;
    if (window.scrollY > 50) {
        header.style.padding = '0.5rem 0';
        header.style.background = 'var(--white)';
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.padding = '0.8rem 0';
        header.style.background = 'var(--white)';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    }
});
