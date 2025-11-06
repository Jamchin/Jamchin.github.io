// script.js

const emailContainer = document.getElementById('emailContainer');
const copyBtn = document.getElementById('copyEmailBtn');
const notice = document.getElementById('copyNotice');
const email = 'qin.ja@northeastern.edu';

// Show button when hovering over the container
emailContainer.addEventListener('mouseenter', () => {
  copyBtn.style.display = 'inline-block';
});

// Hide button when leaving the container
emailContainer.addEventListener('mouseleave', () => {
  copyBtn.style.display = 'none';
});

// Copy email when clicking the button
copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(email);
    notice.style.display = 'block';
    setTimeout(() => {
      notice.style.display = 'none';
    }, 1500);
  } catch (err) {
    alert('Could not copy email automatically.');
  }
});