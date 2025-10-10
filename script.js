const cursor = document.querySelector('.cursor');

// Move cursor with mouse
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Hide cursor when mouse leaves the window
document.addEventListener('mouseleave', () => {
    cursor.style.opacity = 0;
});

// Show cursor when mouse enters the window
document.addEventListener('mouseenter', () => {
    cursor.style.opacity = 1;
});

// Optional: enlarge cursor on hover for interactive elements
const interactiveElements = document.querySelectorAll('a, button, .interactive');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.width = '40px';
        cursor.style.height = '40px';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
    });
});
