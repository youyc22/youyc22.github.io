(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const cards = document.querySelectorAll(".honor-card");
  const backToTop = document.querySelector(".back-to-top");
  const lightbox = document.querySelector(".image-lightbox");
  const lightboxTriggers = Array.from(document.querySelectorAll("[data-lightbox-trigger]"));

  cards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const bounds = card.getBoundingClientRect();
      card.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
      card.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
    });
  });

  if (lightbox && lightboxTriggers.length) {
    const lightboxImage = lightbox.querySelector(".image-lightbox__image");
    const closeButton = lightbox.querySelector(".image-lightbox__close");
    const previousButton = lightbox.querySelector(".image-lightbox__nav--previous");
    const nextButton = lightbox.querySelector(".image-lightbox__nav--next");
    const counter = lightbox.querySelector(".image-lightbox__counter");
    let currentIndex = 0;

    const showImage = (index) => {
      currentIndex = (index + lightboxTriggers.length) % lightboxTriggers.length;
      const trigger = lightboxTriggers[currentIndex];
      const thumbnail = trigger.querySelector("img");

      lightboxImage.src = trigger.dataset.lightboxSrc || thumbnail.currentSrc || thumbnail.src;
      lightboxImage.alt = thumbnail.alt;
      counter.textContent = `${currentIndex + 1} / ${lightboxTriggers.length}`;
      previousButton.hidden = lightboxTriggers.length < 2;
      nextButton.hidden = lightboxTriggers.length < 2;
    };

    const openLightbox = (index) => {
      showImage(index);
      lightbox.showModal();
      closeButton.focus();
    };

    lightboxTriggers.forEach((trigger, index) => {
      trigger.addEventListener("click", () => openLightbox(index));
    });

    closeButton.addEventListener("click", () => lightbox.close());
    previousButton.addEventListener("click", () => showImage(currentIndex - 1));
    nextButton.addEventListener("click", () => showImage(currentIndex + 1));

    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) lightbox.close();
    });

    lightbox.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        lightbox.close();
        return;
      }
      if (event.key === "ArrowLeft") showImage(currentIndex - 1);
      if (event.key === "ArrowRight") showImage(currentIndex + 1);
    });

    lightbox.addEventListener("close", () => {
      lightboxImage.removeAttribute("src");
    });
  }

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
