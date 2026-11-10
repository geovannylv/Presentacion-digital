const currentYear = document.querySelector("#current-year");

document.body.classList.add("reveal-ready");

const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

revealItems.forEach((item) => revealObserver.observe(item));

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}
