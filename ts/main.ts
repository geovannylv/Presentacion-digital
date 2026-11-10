const currentYear = document.querySelector<HTMLElement>("#current-year");
const menuToggle = document.querySelector<HTMLButtonElement>(".menu-toggle");
const siteNav = document.querySelector<HTMLElement>(".site-nav");
const navLinks = document.querySelectorAll<HTMLAnchorElement>(".site-nav__link");
const backToTop = document.querySelector<HTMLButtonElement>(".back-to-top");
const contactForm = document.querySelector<HTMLFormElement>("#contact-form");
const formStatus = document.querySelector<HTMLElement>("#form-status");
const sections = document.querySelectorAll<HTMLElement>("main > section[id]");

document.body.classList.add("reveal-ready");

const revealItems = document.querySelectorAll<HTMLElement>(".reveal");
const filterButtons = document.querySelectorAll<HTMLButtonElement>("[data-filter]");
const projectCards = document.querySelectorAll<HTMLElement>("[data-category]");

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

const setMenuState = (isOpen: boolean): void => {
  if (!menuToggle || !siteNav) return;
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  siteNav.classList.toggle("is-open", isOpen);
};

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  setMenuState(!isOpen);
});

navLinks.forEach((link) => link.addEventListener("click", () => setMenuState(false)));

document.addEventListener("keydown", (event: KeyboardEvent) => {
  if (event.key === "Escape") setMenuState(false);
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.toggle("site-nav__link--active", link.getAttribute("href") === `#${entry.target.id}`));
      }
    });
  },
  { rootMargin: "-42% 0px -48%", threshold: 0 },
);

sections.forEach((section) => sectionObserver.observe(section));

window.addEventListener("scroll", () => {
  backToTop?.classList.toggle("is-visible", window.scrollY > 560);
}, { passive: true });

backToTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

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

contactForm?.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();
  const fields = ["name", "email", "subject", "message"];
  let isValid = true;

  fields.forEach((fieldName) => {
    const field = document.querySelector<HTMLInputElement | HTMLTextAreaElement>(`#${fieldName}`);
    const error = document.querySelector<HTMLElement>(`[data-error-for="${fieldName}"]`);
    const value = field?.value.trim() ?? "";
    let message = "";

    if (!value) message = "Este campo es obligatorio.";
    if (fieldName === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) message = "Escribe un correo válido.";

    field?.setAttribute("aria-invalid", String(Boolean(message)));
    if (error) error.textContent = message;
    if (message) isValid = false;
  });

  if (formStatus) formStatus.textContent = isValid ? "Los datos son válidos. El envío todavía no está conectado a un servicio de correo." : "Revisa los campos marcados antes de continuar.";
});
