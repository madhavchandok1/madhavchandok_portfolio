document.addEventListener('DOMContentLoaded', function () {
    const cursorGlow = document.querySelector('.cursor-glow');

    document.addEventListener('mousemove', function (event) {
      const { clientX, clientY } = event;
      cursorGlow.style.left = `${clientX}px`;
      cursorGlow.style.top = `${clientY}px`;
      cursorGlow.style.opacity = 0.9;
      cursorGlow.style.transform = 'translate(-50%, -50%) scale(1)';
    });

    document.addEventListener('mouseleave', function () {
      cursorGlow.style.opacity = 0;
      cursorGlow.style.transform = 'translate(-50%, -50%) scale(0)';
    });
  });