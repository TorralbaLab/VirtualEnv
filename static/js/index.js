/* Minimal JS inspired by the Nerfies project-page template. */

document.addEventListener('DOMContentLoaded', () => {
  // Burger menu toggle.
  const burgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  burgers.forEach((burger) => {
    burger.addEventListener('click', () => {
      const targetId = burger.dataset.target;
      const target = document.getElementById(targetId);
      burger.classList.toggle('is-active');
      if (target) target.classList.toggle('is-active');
    });
  });

  // Initialize Bulma carousels (optional).
  if (typeof bulmaCarousel !== 'undefined') {
    bulmaCarousel.attach('.carousel', {
      slidesToScroll: 1,
      slidesToShow: 1,
      loop: true,
    });
  }

  // Initialize Bulma sliders (optional).
  if (typeof bulmaSlider !== 'undefined') {
    bulmaSlider.attach();
  }
});
