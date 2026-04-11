document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');

  if (!cursor || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;

    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
  });

  function animate() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;

    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';

    requestAnimationFrame(animate);
  }

  animate();

  document.addEventListener('mouseover', (e) => {
    const interactive = e.target.closest('a, button, [onclick]');

    if (interactive) {
      ring.style.width = '56px';
      ring.style.height = '56px';
      ring.style.borderColor = 'rgba(201,168,76,0.6)';
    } else {
      ring.style.width = '36px';
      ring.style.height = '36px';
      ring.style.borderColor = 'rgba(245,243,239,0.5)';
    }
  });
});