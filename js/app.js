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
  ".section, .manifesto-card, .hero-card, .vote-section"
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

// Later, when you have the voting link, you can enable it like this:
// const voteButton = document.getElementById("voteButton");
// voteButton.disabled = false;
// voteButton.textContent = "Vote now";
// voteButton.addEventListener("click", () => {
//   window.location.href = "https://your-voting-link-here.com";
// });
