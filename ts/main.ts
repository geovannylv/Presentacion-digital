const currentYear = document.querySelector<HTMLElement>("#current-year");

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}
