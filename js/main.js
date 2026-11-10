const currentYear = document.querySelector("#current-year");

document.body.classList.add("reveal-ready");

const revealItems = document.querySelectorAll(".reveal");
const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll("[data-category]");

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

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("filter-button--active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });

    projectCards.forEach((card) => {
      const categories = card.dataset.category?.split(" ") ?? [];
      const shouldShow = selectedFilter === "todos" || categories.includes(selectedFilter ?? "");
      card.classList.toggle("is-filtered-out", !shouldShow);
    });
  });
});

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}
