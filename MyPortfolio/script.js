// Mobile menu toggle functionality
const mobileToggle = document.querySelector('.mobile-toggle');
const desktopNav = document.querySelector('.desktop-nav');

// Re-using the desktop nav class for simplicity in this plain example,
// but in a real scenario you might toggle a specific mobile menu class.
mobileToggle.addEventListener('click', () => {
  if (desktopNav.style.display === 'flex') {
    desktopNav.style.display = 'none';
  } else {
    desktopNav.style.display = 'flex';
    desktopNav.style.flexDirection = 'column';
    desktopNav.style.position = 'absolute';
    desktopNav.style.top = '4rem';
    desktopNav.style.left = '0';
    desktopNav.style.width = '100%';
    desktopNav.style.backgroundColor = 'var(--card)';
    desktopNav.style.padding = '1rem 1.5rem';
    desktopNav.style.borderBottom = '1px solid rgba(30, 41, 59, 0.5)';
  }
});

// Flashlight Effect
const flashlight = document.getElementById('flashlight');

window.addEventListener('mousemove', (e) => {
  if (flashlight) {
    const x = e.clientX;
    const y = e.clientY;
    flashlight.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(34, 211, 238, 0.08), transparent 80%)`;
  }
});
