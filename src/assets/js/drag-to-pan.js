function enableDragPan(selector, options = {}) {
  const speed = options.speed || 1.5;

  const elements = typeof selector === 'string' ? document.querySelectorAll(selector) : [selector];

  elements.forEach((container) => {
    let isDown = false;
    let startX;
    let scrollLeft;

    container.style.cursor = 'grab';

    container.addEventListener('mousedown', (e) => {
      isDown = true;
      container.classList.add('is-dragging');
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
      container.style.cursor = 'grabbing';
    });

    container.addEventListener('mouseleave', () => {
      isDown = false;
      container.style.cursor = 'grab';
    });

    container.addEventListener('mouseup', () => {
      isDown = false;
      container.style.cursor = 'grab';
    });

    container.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * speed;
      container.scrollLeft = scrollLeft - walk;
    });
  });
}
