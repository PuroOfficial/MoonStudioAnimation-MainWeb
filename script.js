// Smooth scrolling pattern with performance optimization
let animationId;
let scrollOffset = 0;

function updateScrollingPattern() {
    const pattern = document.querySelector('.scrolling-pattern');
    if (pattern) {
        scrollOffset += 0.5;
        if (scrollOffset >= 200) {
            scrollOffset = 0;
        }
        pattern.style.transform = `translateY(-${scrollOffset}px)`;
    }
    animationId = requestAnimationFrame(updateScrollingPattern);
}

// Start the animation when the page loads
document.addEventListener('DOMContentLoaded', () => {
    updateScrollingPattern();
    
    // Add subtle parallax effect on scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.scrolling-pattern');
        const speed = scrolled * 0.2;
        parallax.style.transform = `translateY(-${scrollOffset + speed}px)`;
    });
});

// Pause animation when tab is not visible (performance optimization)
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
    } else {
        updateScrollingPattern();
    }
});

// Add hover effects to logo
const logoIcon = document.querySelector('.logo-icon');
if (logoIcon) {
    logoIcon.addEventListener('mouseenter', () => {
        logoIcon.style.transform = 'scale(1.1) translateY(-5px)';
        logoIcon.style.filter = 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.5))';
    });
    
    logoIcon.addEventListener('mouseleave', () => {
        logoIcon.style.transform = 'scale(1) translateY(0)';
        logoIcon.style.filter = 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))';
    });
}

