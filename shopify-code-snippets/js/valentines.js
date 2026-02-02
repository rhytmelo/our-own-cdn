/* ======================================================
   Valentine Falling Hearts
   Single-file HTML + CSS + JS Injector
   Safe for Shopify, Head Injection Friendly
   ====================================================== */

(function () {
  if (window.__VALENTINE_JS_LOADED__) return;
  window.__VALENTINE_JS_LOADED__ = true;

  /* ================= CONFIG ================= */

  const CONFIG = {
    enabled: true,

    // Auto-enable only during Valentine window (MMDD)
    startDate: 0201,
    endDate: 0215,

    maxHearts: 40,
    spawnInterval: 420,

    minSize: 12,
    maxSize: 26,

    minDuration: 7,
    maxDuration: 14,

    opacity: 0.65,

    gradients: [
      'linear-gradient(135deg, #ffd1dc, #ff9eb5)',
      'linear-gradient(135deg, #ffe4ec, #ffb3c6)',
      'linear-gradient(135deg, #fce7f3, #f9a8d4)',
      'linear-gradient(135deg, #fff0f6, #ffb7d5)',
      'linear-gradient(135deg, #ffe6f0, #ff8fab)'
    ]
  };

  /* ============ DATE SAFETY ================= */

  const now = new Date();
  const today = parseInt(
    String(now.getMonth() + 1).padStart(2, '0') +
    String(now.getDate()).padStart(2, '0')
  );

  if (!CONFIG.enabled || today < CONFIG.startDate || today > CONFIG.endDate) {
    return;
  }

  /* ============ WAIT FOR DOM ================= */

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(() => {

    /* ============ STYLE ================= */

    const style = document.createElement('style');
    style.id = 'valentine-hearts-style';
    style.textContent = `
      #valentine-hearts-container {
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: 999999;
        overflow: hidden;
      }

      .valentine-heart {
        position: absolute;
        top: -40px;
        width: var(--size);
        height: var(--size);
        background: var(--gradient);
        opacity: ${CONFIG.opacity};
        transform: rotate(45deg);
        border-radius: 4px;
        animation: fall var(--duration) linear forwards;
        will-change: transform;
      }

      .valentine-heart::before,
      .valentine-heart::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: inherit;
        border-radius: 50%;
      }

      .valentine-heart::before {
        top: -50%;
        left: 0;
      }

      .valentine-heart::after {
        left: -50%;
        top: 0;
      }

      @keyframes fall {
        to {
          transform: translateY(120vh) rotate(45deg);
        }
      }
    `;
    document.head.appendChild(style);

    /* ============ HTML ================= */

    const container = document.createElement('div');
    container.id = 'valentine-hearts-container';
    document.body.appendChild(container);

    /* ============ HEART ENGINE ============ */

    function createHeart() {
      if (container.children.length >= CONFIG.maxHearts) return;

      const heart = document.createElement('div');
      heart.className = 'valentine-heart';

      const size =
        Math.random() * (CONFIG.maxSize - CONFIG.minSize) + CONFIG.minSize;

      const duration =
        Math.random() * (CONFIG.maxDuration - CONFIG.minDuration) +
        CONFIG.minDuration;

      heart.style.setProperty('--size', `${size}px`);
      heart.style.setProperty('--duration', `${duration}s`);
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.setProperty(
        '--gradient',
        CONFIG.gradients[
          Math.floor(Math.random() * CONFIG.gradients.length)
        ]
      );

      container.appendChild(heart);

      setTimeout(() => heart.remove(), duration * 1000);
    }

    const interval = setInterval(createHeart, CONFIG.spawnInterval);

    /* ============ CLEANUP ================= */

    window.addEventListener('beforeunload', () => {
      clearInterval(interval);
      container.remove();
      style.remove();
    });
  });
})();
