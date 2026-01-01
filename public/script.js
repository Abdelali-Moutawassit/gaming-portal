// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Header Scroll Effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.boxShadow = 'none';
    } else {
        header.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.5)';
    }
    
    lastScroll = currentScroll;
});

// Game Cards Hover Effect
const gameCards = document.querySelectorAll('.game-card');

gameCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

// Platform Cards Animation
const platformCards = document.querySelectorAll('.platform-card');

platformCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.game-card, .platform-card, .giveaway-card').forEach(el => {
    observer.observe(el);
});

// Button Click Effects
const buttons = document.querySelectorAll('button, .app-btn, .view-games');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple CSS dynamically
const style = document.createElement('style');
style.textContent = `
    button, .app-btn, .view-games {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Loading Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Dynamic Year for Footer (if added later)
const yearElements = document.querySelectorAll('.current-year');
yearElements.forEach(el => {
    el.textContent = new Date().getFullYear();
});

// Game Card Click Handler
gameCards.forEach(card => {
    card.addEventListener('click', function() {
        const gameName = this.querySelector('h3').textContent;
        console.log(`Clicked on: ${gameName}`);
        // Add your game detail page navigation here
    });
});

// Search Functionality (placeholder for future implementation)
function searchGames(query) {
    const games = document.querySelectorAll('.game-card');
    const searchQuery = query.toLowerCase();
    
    games.forEach(game => {
        const gameName = game.querySelector('h3').textContent.toLowerCase();
        const gameDesc = game.querySelector('p').textContent.toLowerCase();
        
        if (gameName.includes(searchQuery) || gameDesc.includes(searchQuery)) {
            game.style.display = 'block';
        } else {
            game.style.display = 'none';
        }
    });
}

// Platform Filter (placeholder for future implementation)
function filterByPlatform(platform) {
    console.log(`Filtering by platform: ${platform}`);
    // Add filtering logic here
}

// Newsletter/Email Subscription (placeholder)
function subscribeNewsletter(email) {
    console.log(`Subscribing email: ${email}`);
    // Add subscription logic here
}

// Add hover sound effects (optional)
const hoverSound = new Audio('data:audio/wav;base64,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');

console.log('Gaming Portal Website Loaded Successfully! 🎮');
