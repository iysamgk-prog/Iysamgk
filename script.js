// Fade-in animation
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

faders.forEach(fader => observer.observe(fader));

// Success message
const form = document.querySelector("form");
const successMsg = document.getElementById("success");

if (form) {
  form.addEventListener("submit", () => {
    successMsg.style.display = "block";
  });
}
