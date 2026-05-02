// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#ffffff';
        navbar.style.backdropFilter = 'none';
    }
});

// ========================================
// MOBILE MENU TOGGLE
// ========================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ========================================
// ACTIVE NAV LINK ON SCROLL
// ========================================
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-link[href*="${sectionId}"]`)?.classList.add('active');
        } else {
            document.querySelector(`.nav-link[href*="${sectionId}"]`)?.classList.remove('active');
        }
    });
});

// ========================================
// DARK THEME TOGGLE
// ========================================
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme') || 'light';
body.classList.toggle('dark-theme', currentTheme === 'dark');
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const theme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// ========================================
// TYPED.JS - TYPING ANIMATION
// ========================================
const typed = new Typed('.typing-text', {
    strings: [
        'Informatics Graduate',
        'Web Developer',
        'Network Administrator',
        'IT Enthusiast'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
});

// ========================================
// PARTICLES.JS
// ========================================
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#667eea'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#667eea',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        }
    },
    retina_detect: true
});

// ========================================
// AOS ANIMATION INITIALIZATION
// ========================================
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// ========================================
// SKILL PROGRESS ANIMATION
// ========================================
const skillProgressBars = document.querySelectorAll('.skill-progress');

const animateSkills = () => {
    skillProgressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if (barPosition < screenPosition) {
            bar.style.width = progress + '%';
        }
    });
};

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// ========================================
// CONTACT FORM
// ========================================
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // WhatsApp Integration
    const whatsappNumber = '6285706177764';
    const whatsappMessage = `*Nama:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Pesan:* ${message}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // Email Integration
    const emailSubject = `Contact Form: ${subject}`;
    const emailBody = `Nama: ${name}%0AEmail: ${email}%0A%0APesan:%0A${message}`;
    const emailURL = `mailto:mochammadzienrifqi@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    // You can choose either WhatsApp or Email
    // window.open(whatsappURL, '_blank'); // Opens WhatsApp
    window.location.href = emailURL; // Opens Email Client

    // Reset form
    contactForm.reset();

    // Show success message (optional)
    alert('Terima kasih! Pesan Anda akan segera dikirim.');
});

// ========================================
// SCROLL TO TOP BUTTON
// ========================================
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// SMOOTH SCROLL FOR ALL LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// PRELOADER (Optional)
// ========================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ========================================
// COUNTER ANIMATION FOR STATS (Optional Enhancement)
// ========================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ========================================
// PROJECT FILTER (Optional Enhancement)
// ========================================
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons?.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        projectCards.forEach(card => {
            if (filter === 'all' || card.classList.contains(filter)) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ========================================
// FORM VALIDATION
// ========================================
const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');

inputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value.trim() === '') {
            input.style.borderColor = '#e74c3c';
        } else {
            input.style.borderColor = '#10b981';
        }
    });

    input.addEventListener('focus', () => {
        input.style.borderColor = '#667eea';
    });
});

// ========================================
// CONSOLE MESSAGE
// ========================================
console.log('%c👨‍💻 Mochammad Zien Rifqi Portfolio', 
    'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%c🚀 Informatics Graduate | Web Developer | Network Administrator', 
    'color: #10b981; font-size: 14px;');
console.log('%c📧 Contact: mochammadzienrifqi@gmail.com', 
    'color: #718096; font-size: 12px;');