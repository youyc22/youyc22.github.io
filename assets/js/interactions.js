(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const cards = document.querySelectorAll(".honor-card");
  const backToTop = document.querySelector(".back-to-top");

  cards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const bounds = card.getBoundingClientRect();
      card.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
      card.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
    });
  });

  if (!backToTop) return;

  const updateBackToTop = () => {
    backToTop.classList.toggle("visible", window.scrollY > 560);
  };

  window.addEventListener("scroll", updateBackToTop, { passive: true });
  updateBackToTop();

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  });
})();
