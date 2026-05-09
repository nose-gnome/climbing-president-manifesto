const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

const revealItems = document.querySelectorAll(
  ".section, .manifesto-card, .hero-card, .vote-section, .hero-media, .feature-image"
);

revealItems.forEach((item) => item.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.12,
  }
);

revealItems.forEach((item) => observer.observe(item));

const posterButton = document.getElementById("posterButton");
const posterModal = document.getElementById("posterModal");
const closePosterModal = document.getElementById("closePosterModal");

posterButton.addEventListener("click", () => {
  posterModal.classList.add("show");
});

closePosterModal.addEventListener("click", () => {
  posterModal.classList.remove("show");
});

posterModal.addEventListener("click", (event) => {
  if (event.target === posterModal) {
    posterModal.classList.remove("show");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    posterModal.classList.remove("show");
  }
});

// Later, when you have the voting link, you can enable it like this:
// const voteButton = document.getElementById("voteButton");
// voteButton.disabled = false;
// voteButton.textContent = "Vote now";
// voteButton.addEventListener("click", () => {
//   window.location.href = "https://your-voting-link-here.com";
// });
