// Smooth scroll for nav links
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
    });
});
// Sticky nav highlight
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('a.nav-link');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});
// Contact form feedback
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    this.querySelector('.form-feedback').style.display = 'block';
    setTimeout(() => {
        this.querySelector('.form-feedback').style.display = 'none';
        this.reset();
    }, 2000);
});
// Intersection Observer for animations
function animateOnScroll(selector, visibleClass) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(visibleClass);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    document.querySelectorAll(selector).forEach(el => observer.observe(el));
}
animateOnScroll('.animate-fade-in', 'fade-in-visible');
animateOnScroll('.animate-zoom-in', 'zoom-in-visible');

function toggleDropdown(x) {
    document.getElementById('nav-links').classList.toggle('show');
    x.classList.toggle("change")
}
// Optional: close dropdown when clicking outside
window.onclick = function(event) {
    if (!event.target.closest('.menu-icon') && !event.target.closest('.dropdown-content')) {
        document.getElementById('nav-links').classList.remove('show');
        document.querySelector('.menu-icon').classList.remove('change');
    }
}
