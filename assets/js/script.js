// Footer year + "last updated" date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("updated").textContent = new Date().toLocaleDateString("en-GB");

// Fake visitor counter (stored per-browser; swap for a real counter service if you like)
(function () {
  const el = document.getElementById("counter");
  let n = 1;
  try {
    n = (parseInt(localStorage.getItem("visits"), 10) || 0) + 1;
    localStorage.setItem("visits", n);
  } catch (e) {}
  el.textContent = String(n).padStart(6, "0");
})();

// Sparkle cursor trail (disabled for reduced-motion users and touch devices)
(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (window.matchMedia("(pointer: coarse)").matches) return;
  const glyphs = ["✦", "★", "✧", "✿", "♥"];
  const colors = ["#ff7ad9", "#3a9be8", "#b6ff5c", "#ffffff"];
  let last = 0;
  document.addEventListener("mousemove", (e) => {
    const now = Date.now();
    if (now - last < 40) return;
    last = now;
    const s = document.createElement("span");
    s.className = "sparkle";
    s.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
    s.style.left = e.clientX + "px";
    s.style.top = e.clientY + "px";
    s.style.color = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 800);
  });
})();
