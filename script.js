// Lightbox Functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

document.querySelectorAll('.gallery-container img').forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', e => {
    if (e.target === lightbox) lightbox.style.display = 'none';
});

// Animate Sections on Scroll (includes titles)
const sections = document.querySelectorAll('section');

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible'); // fades in section + title
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => sectionObserver.observe(section));

// Scroll Spy & Smooth Scroll
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) current = section.getAttribute('id');
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) link.classList.add('active');
    });
});

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});
