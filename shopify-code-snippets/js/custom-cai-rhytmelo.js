// Click product image -> open product via the title link
document.addEventListener('click', function(e) {
  const imageClicked = e.target.closest('.product-collection[data-js-product] .product-collection__image');
  if (imageClicked) {
    const card = e.target.closest('.product-collection[data-js-product]');
    if (!card) return;
    const titleLink = card.querySelector('.product-collection__title a');
    if (titleLink) titleLink.click();
  }
});

(function () {
  function normalizeDiscount(text) {
    const match = text && text.match(/(\d+(?:\.\d+)?)\s*%/);
    if (!match) return null;
    return "-" + match[1] + "%";
  }

  function syncDiscountBadges() {
    document.querySelectorAll('.product-collection[data-js-product]').forEach(card => {
      const saleLabel = card.querySelector('.label--sale');
      const compare = card.querySelector('.price--sale .compare');
      if (!saleLabel || !compare) return;

      const rawText = saleLabel.textContent.trim();
      const discount = normalizeDiscount(rawText);
      if (!discount) return;

      // Stable per-card key (short random suffix)
      if (!card.dataset.discountKey) {
        card.dataset.discountKey = Math.random().toString(36).slice(2,8);
      }

      const keySuffix = card.dataset.discountKey;
      const cls = 'discount-' + keySuffix;

      // Add the class (prefixed so it is a valid CSS class name)
      compare.classList.add(cls);

      // Update or create the style element for this card
      const styleId = 'discount-style-' + keySuffix;
      let style = document.getElementById(styleId);
      if (!style) {
        style = document.createElement('style');
        style.id = styleId;
        document.head.appendChild(style);
      }

      style.innerHTML = `.${cls}::after { content: "${discount}" !important; display: inline-block !important; }`;
    });
  }

  // Initial run
  syncDiscountBadges();

  // Re-run when products are updated in the DOM
  new MutationObserver(syncDiscountBadges).observe(document.body, { childList: true, subtree: true });
})();

(function() {
  // Function to center the active tab
  function centerActiveTab() {
    const navList = document.querySelector('.shopify-section.tab_product_page .nav.list-nav');
    const activeTab = document.querySelector('.shopify-section.tab_product_page .nav.list-nav li.active');

    if (!navList || !activeTab || window.innerWidth > 768) return;

    const scrollPosition = activeTab.offsetLeft - (navList.clientWidth / 2) + (activeTab.offsetWidth / 2);
    const maxScroll = Math.max(0, navList.scrollWidth - navList.clientWidth);
    const left = Math.max(0, Math.min(scrollPosition, maxScroll));

    if (typeof navList.scrollTo === 'function') {
      navList.scrollTo({ left, behavior: 'smooth' });
    } else {
      navList.scrollLeft = left;
    }
  }

  // Center on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', centerActiveTab);
  } else {
    centerActiveTab();
  }

  // Center when tabs are clicked
  document.addEventListener('click', function(e) {
    const clickedTab = e.target.closest('.shopify-section.tab_product_page .nav.list-nav li a');
    if (clickedTab) setTimeout(centerActiveTab, 50);
  });

  // Re-center on window resize (debounced)
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(centerActiveTab, 150);
  });
})();