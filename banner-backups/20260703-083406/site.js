(function () {
  const hero = document.querySelector(".hero");
  const canvas = document.querySelector(".deposition-canvas");
  if (!hero || !canvas) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ctx = canvas.getContext("2d", { alpha: true });
  const particles = [];
  const beams = [];
  let width = 0;
  let height = 0;
  let dpr = 1;
  let lastTime = 0;

  function resize() {
    const rect = hero.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(1, Math.floor(rect.width));
    height = Math.max(1, Math.floor(rect.height));
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seed();
  }

  function random(min, max) {
    return min + Math.random() * (max - min);
  }

  function seed() {
    particles.length = 0;
    beams.length = 0;

    const count = width < 700 ? 34 : 72;
    for (let i = 0; i < count; i += 1) {
      particles.push({
        x: random(width * 0.55, width * 1.04),
        y: random(height * 0.08, height * 0.7),
        vx: random(-18, -56),
        vy: random(10, 34),
        r: random(0.8, 2.3),
        phase: random(0, Math.PI * 2),
        speed: random(0.6, 1.4),
        alpha: random(0.14, 0.58),
      });
    }

    for (let i = 0; i < 5; i += 1) {
      beams.push({
        x: random(width * 0.48, width * 0.82),
        y: random(height * 0.22, height * 0.62),
        length: random(width * 0.26, width * 0.48),
        angle: random(-0.42, -0.16),
        phase: random(0, Math.PI * 2),
        speed: random(0.7, 1.2),
      });
    }
  }

  function drawWafer(time) {
    const cx = width * 0.78;
    const cy = height * 0.72;
    const radius = Math.min(width, height) * 0.19;
    const pulse = Math.sin(time * 0.0011) * 0.04;

    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(1.42, 0.38);
    ctx.rotate(-0.08);

    const ring = ctx.createRadialGradient(0, 0, radius * 0.18, 0, 0, radius * (1 + pulse));
    ring.addColorStop(0, "rgba(57,213,199,0.04)");
    ring.addColorStop(0.62, "rgba(47,127,232,0.08)");
    ring.addColorStop(1, "rgba(57,213,199,0.24)");

    ctx.strokeStyle = ring;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.arc(0, 0, radius * (1 + pulse), 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = "rgba(185,217,255,0.12)";
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.62, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  function drawBeams(time) {
    beams.forEach((beam) => {
      const sweep = (Math.sin(time * 0.001 * beam.speed + beam.phase) + 1) / 2;
      const alpha = 0.06 + sweep * 0.32;
      const x2 = beam.x + Math.cos(beam.angle) * beam.length;
      const y2 = beam.y + Math.sin(beam.angle) * beam.length;
      const gradient = ctx.createLinearGradient(beam.x, beam.y, x2, y2);
      gradient.addColorStop(0, "rgba(57,213,199,0)");
      gradient.addColorStop(0.5, `rgba(57,213,199,${alpha})`);
      gradient.addColorStop(1, "rgba(47,127,232,0)");

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(beam.x, beam.y);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    });
  }

  function drawParticles(dt, time) {
    particles.forEach((particle) => {
      particle.x += particle.vx * dt * particle.speed;
      particle.y += particle.vy * dt * particle.speed;

      if (particle.x < width * 0.38 || particle.y > height * 0.86) {
        particle.x = random(width * 0.65, width * 1.08);
        particle.y = random(height * 0.1, height * 0.46);
      }

      const shimmer = (Math.sin(time * 0.003 + particle.phase) + 1) / 2;
      const alpha = particle.alpha * (0.45 + shimmer * 0.75);
      ctx.fillStyle = `rgba(200,255,248,${alpha})`;
      ctx.shadowColor = "rgba(57,213,199,0.85)";
      ctx.shadowBlur = 11;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.shadowBlur = 0;
  }

  function drawScan(time) {
    const y = height * (0.26 + ((time * 0.00005) % 0.44));
    const gradient = ctx.createLinearGradient(width * 0.46, y, width * 0.98, y);
    gradient.addColorStop(0, "rgba(57,213,199,0)");
    gradient.addColorStop(0.55, "rgba(57,213,199,0.18)");
    gradient.addColorStop(1, "rgba(57,213,199,0)");
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(width * 0.48, y);
    ctx.lineTo(width * 0.98, y - height * 0.12);
    ctx.stroke();
  }

  function draw(time) {
    const dt = Math.min((time - lastTime) / 1000 || 0.016, 0.04);
    lastTime = time;
    ctx.clearRect(0, 0, width, height);
    drawWafer(time);
    drawBeams(time);
    drawParticles(dt, time);
    drawScan(time);
    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);

  if (prefersReducedMotion) {
    drawWafer(0);
    drawBeams(0);
    return;
  }

  requestAnimationFrame(draw);
})();
