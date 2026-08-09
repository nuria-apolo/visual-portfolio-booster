(() => {
  const covers = [...document.querySelectorAll('.case-study-cover')];
  if (!covers.length) return;

  let frame = 0;
  const update = () => {
    frame = 0;
    const zoom = String(1 + Math.min(window.scrollY / window.innerHeight, 1) * 0.06);
    covers.forEach((cover) => cover.style.setProperty('--cover-zoom', zoom));
  };
  const requestUpdate = () => {
    if (!frame) frame = window.requestAnimationFrame(update);
  };

  update();
  window.addEventListener('scroll', requestUpdate, { passive: true });
})();
