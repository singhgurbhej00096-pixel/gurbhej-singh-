/* IRONFORGE MARKET — shared UI, homepage and product page logic (demo only) */

(function () {
  "use strict";

  const { render, CATEGORIES, SELLERS, PRODUCTS, HERITAGE, HERITAGE_TYPES, ERAS, REVIEWS, PRODUCT_REVIEWS, BRANDS } = window.IF;
  const ALL = PRODUCTS.concat(HERITAGE);
  const TYPE_ART = { arms: "tulwar", instruments: "compass", medals: "medal", documents: "map", campaign: "chest" };

  /* ------------------------------------------------------------------------
     Icons (24×24 stroke set)
     ------------------------------------------------------------------------ */

  const P = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
    cart: '<path d="M3 4h2.5l2.2 11.2a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.8L20 8H6.4"/><circle cx="9.5" cy="20" r="1.3"/><circle cx="17" cy="20" r="1.3"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h10"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
    crosshair: '<circle cx="12" cy="12" r="8"/><path d="M12 2v5M12 17v5M2 12h5M17 12h5"/><circle cx="12" cy="12" r="1.2"/>',
    mountain: '<path d="M3 20l6.5-11 4 6.5L16 12l5 8z"/><path d="M8 11.5l1.5 1.5 1.5-1.5"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>',
    wrench: '<path d="M14.5 6.5a4 4 0 0 0-5.3 5.2L3.5 17.4l3.1 3.1 5.7-5.7a4 4 0 0 0 5.2-5.3l-2.6 2.6-2.5-.5-.5-2.5z"/>',
    lock: '<rect x="4.5" y="10.5" width="15" height="10" rx="1"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/><path d="M12 14.5v2.5"/>',
    badge: '<path d="M12 2.5l2.4 1.8 3-.2.9 2.9 2.4 1.8-.9 2.9.9 2.9-2.4 1.8-.9 2.9-3-.2L12 21.5l-2.4-1.8-3 .2-.9-2.9-2.4-1.8.9-2.9-.9-2.9 2.4-1.8.9-2.9 3 .2z"/><path d="M8.5 12l2.4 2.4 4.6-4.8"/>',
    award: '<circle cx="12" cy="9" r="6"/><path d="M8.5 13.8L7 22l5-3 5 3-1.5-8.2"/>',
    headset: '<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="4" height="6" rx="1"/><rect x="17" y="14" width="4" height="6" rx="1"/><path d="M19 20c0 1.5-2 2-5 2"/>',
    star: '<path d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3-4.6-4.4 6.3-.9z"/>',
    bookmark: '<path d="M6 3h12v18l-6-4-6 4z"/>',
    truck: '<path d="M2 6h12v10H2zM14 9h4l4 4v3h-8"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
    refresh: '<path d="M20 11a8 8 0 0 0-14.5-4.5L4 8M4 4v4h4M4 13a8 8 0 0 0 14.5 4.5L20 16M20 20v-4h-4"/>',
    alert: '<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.01"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.01"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    radio: '<rect x="3" y="8" width="18" height="13" rx="1"/><path d="M7 8l9-5"/><circle cx="15.5" cy="14.5" r="3"/><path d="M6.5 12.5h3M6.5 16h3"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="1"/><path d="M3 7l9 6 9-6"/>',
    phone: '<path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"/>',
    pin: '<path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    zoom: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5M11 8v6M8 11h6"/>',
    package: '<path d="M3 7.5L12 3l9 4.5v9L12 21l-9-4.5z"/><path d="M3 7.5l9 4.5 9-4.5M12 12v9"/>',
    chat: '<path d="M4 4h16v12H8l-4 4z"/><path d="M8 9h8M8 12h5"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5v.01"/>',
    youtube: '<rect x="2.5" y="5" width="19" height="14" rx="4"/><path d="M10 9l5 3-5 3z"/>',
    xsocial: '<path d="M4 4l16 16M20 4L4 20"/>',
    facebook: '<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>',
  };

  function icon(name, cls) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"${cls ? ` class="${cls}"` : ""}>${P[name] || ""}</svg>`;
  }

  const logoMark = `<svg class="logo-mark" viewBox="0 0 40 40" aria-hidden="true">
      <defs><linearGradient id="lg-metal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f1f2f3"/><stop offset=".5" stop-color="#8d939a"/><stop offset="1" stop-color="#c9cdd1"/></linearGradient></defs>
      <path d="M20 2l16 7v11c0 9.5-7 15.5-16 18C11 35.5 4 29.5 4 20V9z" fill="none" stroke="url(#lg-metal)" stroke-width="1.6"/>
      <path d="M13 13h14v3.2h-9.8v3.4h8.2v3.2h-8.2V29H13z" fill="url(#lg-metal)"/>
      <path d="M24 26h4v3h-4z" fill="#b4c27a"/>
    </svg>`;

  /* ------------------------------------------------------------------------
     Helpers
     ------------------------------------------------------------------------ */

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const money = (n) => "$" + n.toLocaleString("en-US", { minimumFractionDigits: 0 });
  const priceHTML = (n) => `<sup>$</sup>${n.toLocaleString("en-US")}`;
  const catName = (key) => (CATEGORIES.find((c) => c.key === key) || {}).name || key;
  const byId = (id) => ALL.find((p) => p.id === id);
  const typeName = (key) => (HERITAGE_TYPES.find((t) => t.key === key) || {}).name || key;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  const AVAIL = {
    in: { label: "In Stock", cls: "" },
    low: { label: "Low Stock", cls: "low" },
    pre: { label: "Pre-Order", cls: "pre" },
  };
  const AVAIL_H = {
    in: { label: "Available", cls: "" },
    low: { label: "Under Offer", cls: "low" },
    pre: { label: "Reserved", cls: "pre" },
  };
  const availFor = (p) => (p.heritage ? AVAIL_H : AVAIL)[p.stock];

  function stars(rating) {
    let out = "";
    for (let i = 1; i <= 5; i++) {
      out += `<svg viewBox="0 0 24 24" class="${rating >= i - 0.25 ? "" : "off"}" fill="currentColor" aria-hidden="true">${P.star}</svg>`;
    }
    return `<span class="stars" aria-label="${rating} out of 5 stars">${out}</span>`;
  }

  const store = {
    get(key, fallback) {
      try {
        const v = localStorage.getItem("ironforge:" + key);
        return v ? JSON.parse(v) : fallback;
      } catch (e) {
        return fallback;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem("ironforge:" + key, JSON.stringify(value));
      } catch (e) {
        /* storage unavailable — state simply won't persist */
      }
    },
  };

  /* ------------------------------------------------------------------------
     Toasts
     ------------------------------------------------------------------------ */

  function toast(msg, ic = "check") {
    let wrap = $(".toast-wrap");
    if (!wrap) {
      wrap = document.createElement("div");
      wrap.className = "toast-wrap";
      wrap.setAttribute("role", "status");
      wrap.setAttribute("aria-live", "polite");
      document.body.appendChild(wrap);
    }
    const t = document.createElement("div");
    t.className = "toast";
    t.innerHTML = icon(ic) + `<span>${msg}</span>`;
    wrap.appendChild(t);
    setTimeout(() => {
      t.classList.add("out");
      t.addEventListener("animationend", () => t.remove(), { once: true });
    }, 2800);
  }

  /* ------------------------------------------------------------------------
     Header / footer
     ------------------------------------------------------------------------ */

  function renderHeader() {
    const host = $("[data-site-header]");
    if (!host) return;
    const page = document.body.dataset.page;
    const viewingHeritage = page === "product" && (byId(new URLSearchParams(location.search).get("id")) || {}).heritage;
    const links = [
      ["Home", "index.html", page === "home"],
      ["Marketplace", "index.html#marketplace", page === "product" && !viewingHeritage],
      ["Heritage", "heritage.html", page === "heritage" || !!viewingHeritage],
      ["Categories", "index.html#categories", false],
      ["About", "index.html#about", false],
      ["Support", "index.html#support", false],
    ];
    host.outerHTML = `
      <div class="demo-ribbon"><a class="ribbon-back" href="/">← Gurbhej Singh Khalsa</a><span><strong>DEMO INTERFACE</strong> — product listings are illustrative. No orders, payments, or transfers are processed.</span></div>
      <header class="site-header">
        <nav class="wrap nav" aria-label="Primary">
          <a href="index.html" class="logo" aria-label="IronForge Market home">
            ${logoMark}
            <span class="logo-word">IRONFORGE<small>MARKET</small></span>
          </a>
          <ul class="nav-links" id="nav-links">
            ${links.map(([label, href, active]) => `<li><a href="${href}"${active ? ' class="active" aria-current="page"' : ""}>${label}</a></li>`).join("")}
          </ul>
          <div class="nav-actions">
            <button class="nav-login" type="button" data-open-login>${icon("user")}<span>Login</span></button>
            <button class="icon-btn" type="button" data-open-cart aria-label="Open cart">${icon("cart")}<span class="badge-count" data-cart-count>0</span></button>
            <button class="icon-btn nav-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="nav-links">${icon("menu")}</button>
          </div>
        </nav>
      </header>`;

    const header = $(".site-header");
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const toggle = $(".nav-toggle");
    const menu = $("#nav-links");
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.innerHTML = icon(open ? "x" : "menu");
    });
    menu.addEventListener("click", (e) => {
      if (e.target.closest("a")) {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.innerHTML = icon("menu");
      }
    });
  }

  function renderFooter() {
    const host = $("[data-site-footer]");
    if (!host) return;
    host.outerHTML = `
      <footer class="site-footer">
        <div class="wrap">
          <div class="footer-grid">
            <div class="footer-brand">
              <a href="index.html" class="logo">${logoMark}<span class="logo-word">IRONFORGE<small>MARKET</small></span></a>
              <p>A curated marketplace for professional-grade tactical, protective and outdoor equipment — connecting verified sellers with informed buyers.</p>
              <div class="socials">
                <a href="#" aria-label="Instagram">${icon("instagram")}</a>
                <a href="#" aria-label="YouTube">${icon("youtube")}</a>
                <a href="#" aria-label="X">${icon("xsocial")}</a>
                <a href="#" aria-label="Facebook">${icon("facebook")}</a>
                <a href="#" aria-label="LinkedIn">${icon("linkedin")}</a>
              </div>
            </div>
            <div class="footer-col">
              <h5>Marketplace</h5>
              <ul>
                ${CATEGORIES.map((c) => `<li><a href="index.html?cat=${c.key}#marketplace">${c.name}</a></li>`).join("")}
                <li><a href="heritage.html">Historic &amp; Prestige</a></li>
                <li><a href="heritage.html#sell">Sell a Historic Piece</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h5>Support</h5>
              <ul>
                <li><a href="/">Gurbhej Singh Khalsa — Heritage</a></li>
                <li><a href="index.html#support">Help Center</a></li>
                <li><a href="#">Order Status</a></li>
                <li><a href="#">Shipping &amp; Delivery</a></li>
                <li><a href="#">Returns</a></li>
                <li><a href="#">Become a Seller</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h5>Policies</h5>
              <ul>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Compliance &amp; Eligibility</a></li>
                <li><a href="#">Prohibited Items</a></li>
                <li><a href="#">Seller Standards</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h5>Contact</h5>
              <ul>
                <li class="contact-line">${icon("mail")}<span>support@ironforge.example</span></li>
                <li class="contact-line">${icon("phone")}<span>+1 (555) 014-2290</span></li>
                <li class="contact-line">${icon("pin")}<span>Mon–Fri, 08:00–18:00 MT</span></li>
              </ul>
            </div>
          </div>
          <div class="footer-legal">
            <p>© 2026 IronForge Market — demonstration interface. All products, sellers and reviews shown are illustrative. Buyers are responsible for complying with all federal, state and local laws; regulated items require age and eligibility verification and may not ship to all regions.</p>
            <span class="mono">v1.0 · DEMO BUILD</span>
          </div>
        </div>
      </footer>`;
  }

  /* ------------------------------------------------------------------------
     Cart (demo only — no checkout)
     ------------------------------------------------------------------------ */

  let cart = store.get("cart", []);

  function cartCount() {
    return cart.reduce((n, l) => n + l.qty, 0);
  }

  function updateBadge(bump) {
    const el = $("[data-cart-count]");
    if (!el) return;
    const n = cartCount();
    el.textContent = n;
    el.classList.toggle("show", n > 0);
    if (bump) {
      el.classList.remove("bump");
      void el.offsetWidth;
      el.classList.add("bump");
    }
  }

  function addToCart(id, qty = 1) {
    const p = byId(id);
    if (!p) return;
    const line = cart.find((l) => l.id === id);
    if (p.heritage && line) {
      toast("This one-of-a-kind piece is already in your cart", "info");
      return;
    }
    if (line) line.qty = Math.min(9, line.qty + qty);
    else cart.push({ id, qty: p.heritage ? 1 : qty });
    store.set("cart", cart);
    updateBadge(true);
    renderCart();
    toast(`${esc(p.name)} ${p.heritage ? "reserved in your cart" : "added to cart"}`, "cart");
  }

  function buildOverlays() {
    const el = document.createElement("div");
    el.innerHTML = `
      <div class="scrim" data-scrim></div>
      <aside class="drawer" id="cart-drawer" aria-label="Cart" aria-hidden="true">
        <div class="drawer-head">
          <h3>Your Cart</h3>
          <button class="icon-btn" type="button" data-close aria-label="Close cart">${icon("x")}</button>
        </div>
        <div class="drawer-body" data-cart-body></div>
        <div class="drawer-foot" data-cart-foot></div>
      </aside>
      <div class="modal" id="login-modal" role="dialog" aria-modal="true" aria-labelledby="login-title" aria-hidden="true">
        <button class="icon-btn close" type="button" data-close aria-label="Close">${icon("x")}</button>
        <span class="eyebrow">Secure Access</span>
        <h3 id="login-title">Sign in</h3>
        <p>Access your saved lists, verified seller messages and order history.</p>
        <form data-login-form>
          <div class="field"><label for="li-email">Email</label><input id="li-email" class="control" type="email" placeholder="you@example.com" autocomplete="off"></div>
          <div class="field"><label for="li-pass">Password</label><input id="li-pass" class="control" type="password" placeholder="••••••••" autocomplete="off"></div>
          <button class="btn btn-primary btn-block" type="submit">Sign In ${icon("arrow")}</button>
          <div class="notice">${icon("info")}<span><b>Demo interface.</b> Authentication is disabled and nothing you enter is stored or transmitted.</span></div>
        </form>
      </div>
      <div class="modal" id="offer-modal" role="dialog" aria-modal="true" aria-labelledby="offer-title" aria-hidden="true">
        <button class="icon-btn close" type="button" data-close aria-label="Close">${icon("x")}</button>
        <span class="eyebrow">Private Offer</span>
        <h3 id="offer-title">Make an offer</h3>
        <p data-offer-for></p>
        <form data-offer-form novalidate>
          <div class="field"><label for="of-amount">Your offer (USD)</label><input id="of-amount" class="control" type="number" inputmode="numeric" min="1" step="50" required></div>
          <div class="offer-hint" data-offer-hint></div>
          <div class="field"><label for="of-msg">Note to seller (optional)</label><textarea id="of-msg" class="control" rows="3" placeholder="Questions about provenance, condition, viewing…"></textarea></div>
          <button class="btn btn-primary btn-block" type="submit">Submit Offer ${icon("arrow")}</button>
          <div class="notice">${icon("info")}<span><b>Demo interface.</b> Offers are not sent to sellers and no funds are held.</span></div>
        </form>
      </div>`;
    document.body.append(...el.children);

    const scrim = $("[data-scrim]");
    const drawer = $("#cart-drawer");
    const modal = $("#login-modal");
    const offerModal = $("#offer-modal");
    let lastFocus = null;

    function open(panel) {
      lastFocus = document.activeElement;
      closeAll();
      panel.classList.add("show");
      panel.setAttribute("aria-hidden", "false");
      scrim.classList.add("show");
      document.body.style.overflow = "hidden";
      const f = panel.querySelector("input, button");
      if (f) setTimeout(() => f.focus(), 50);
    }
    function closeAll() {
      [drawer, modal, offerModal].forEach((p) => {
        p.classList.remove("show");
        p.setAttribute("aria-hidden", "true");
      });
      scrim.classList.remove("show");
      document.body.style.overflow = "";
    }
    function close() {
      closeAll();
      if (lastFocus) lastFocus.focus();
    }

    document.addEventListener("click", (e) => {
      if (e.target.closest("[data-open-cart]")) open(drawer);
      else if (e.target.closest("[data-open-login]")) open(modal);
      else if (e.target.closest("[data-open-offer]")) {
        const p = byId(e.target.closest("[data-open-offer]").dataset.openOffer);
        offerModal.dataset.id = p.id;
        $("[data-offer-for]").innerHTML = `${esc(p.name)} · listed at <b>${money(p.price)}</b>. The seller can accept, decline or counter within 48 hours.`;
        $("#of-amount").value = Math.round((p.price * 0.9) / 50) * 50;
        $("#of-amount").dispatchEvent(new Event("input"));
        open(offerModal);
      } else if (e.target.closest("[data-close]") || e.target === scrim) close();
    });

    $("#of-amount").addEventListener("input", (e) => {
      const p = byId(offerModal.dataset.id);
      if (!p) return;
      const v = Number(e.target.value) || 0;
      const pct = Math.round((v / p.price) * 100);
      const hint = $("[data-offer-hint]");
      hint.className = "offer-hint" + (pct < 70 ? " warn" : "");
      hint.textContent = v ? `${pct}% of asking price${pct < 70 ? " — offers below 70% are rarely accepted" : ""}` : "";
    });
    $("[data-offer-form]").addEventListener("submit", (e) => {
      e.preventDefault();
      const v = Number($("#of-amount").value);
      if (!v || v < 1) {
        $("#of-amount").focus();
        toast("Enter an offer amount", "alert");
        return;
      }
      e.target.reset();
      close();
      toast(`Demo mode — your ${money(v)} offer was not sent`, "info");
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && scrim.classList.contains("show")) close();
    });

    $("[data-login-form]").addEventListener("submit", (e) => {
      e.preventDefault();
      e.target.reset();
      close();
      toast("Demo mode — sign-in is disabled", "info");
    });

    $("[data-cart-body]").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-act]");
      if (!btn) return;
      const line = cart.find((l) => l.id === btn.dataset.id);
      if (!line) return;
      if (btn.dataset.act === "inc") line.qty = Math.min(byId(line.id).heritage ? 1 : 9, line.qty + 1);
      if (btn.dataset.act === "dec") line.qty -= 1;
      if (btn.dataset.act === "rm" || line.qty < 1) cart = cart.filter((l) => l !== line);
      store.set("cart", cart);
      updateBadge(false);
      renderCart();
    });

    renderCart();
    updateBadge(false);
  }

  function renderCart() {
    const body = $("[data-cart-body]");
    const foot = $("[data-cart-foot]");
    if (!body) return;
    const lines = cart.filter((l) => byId(l.id));
    if (!lines.length) {
      body.innerHTML = `<div class="cart-empty">${icon("package")}<p>Your cart is empty.</p><a class="btn btn-ghost btn-sm" href="index.html#marketplace" data-close>Browse Marketplace</a></div>`;
      foot.innerHTML = "";
      return;
    }
    body.innerHTML = lines
      .map((l) => {
        const p = byId(l.id);
        return `<div class="cart-line">
          <div class="thumb">${render(p.art)}</div>
          <div>
            <b>${esc(p.name)}</b>
            <span>${money(p.price)} · ${esc(p.brand)}</span>
            <div class="qty"><button type="button" data-act="dec" data-id="${p.id}" aria-label="Decrease quantity">−</button><output>${l.qty}</output><button type="button" data-act="inc" data-id="${p.id}" aria-label="Increase quantity">+</button></div>
          </div>
          <button class="remove" type="button" data-act="rm" data-id="${p.id}">Remove</button>
        </div>`;
      })
      .join("");
    const subtotal = lines.reduce((s, l) => s + byId(l.id).price * l.qty, 0);
    foot.innerHTML = `
      <div class="subtotal"><span>Subtotal</span><b class="price">${priceHTML(subtotal)}</b></div>
      <div class="notice">${icon("alert")}<span><b>Checkout is disabled.</b> This is a visual demo marketplace — no purchases, payments, or shipments are processed.</span></div>
      <button class="btn btn-primary btn-block" type="button" disabled>Checkout Unavailable</button>`;
  }

  /* ------------------------------------------------------------------------
     Saved items
     ------------------------------------------------------------------------ */

  let saved = new Set(store.get("saved", []));

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-save]");
    if (!btn) return;
    e.preventDefault();
    const id = btn.dataset.save;
    const on = !saved.has(id);
    on ? saved.add(id) : saved.delete(id);
    store.set("saved", [...saved]);
    $$(`[data-save="${id}"]`).forEach((b) => {
      b.classList.toggle("saved", on);
      b.setAttribute("aria-pressed", String(on));
    });
    toast(on ? "Saved to your list" : "Removed from your list", "bookmark");
  });

  /* ------------------------------------------------------------------------
     Product card
     ------------------------------------------------------------------------ */

  function heritageCard(p) {
    const a = availFor(p);
    const isSaved = saved.has(p.id);
    return `<article class="p-card h-card">
      <div class="p-media">
        <div class="p-tags">
          ${p.badge ? `<span class="tag brass">${icon("badge")}${p.badge}</span>` : `<span class="tag">${p.year}</span>`}
          <button class="save-btn${isSaved ? " saved" : ""}" type="button" data-save="${p.id}" aria-pressed="${isSaved}" aria-label="Save ${esc(p.name)}">${icon("bookmark")}</button>
        </div>
        ${render(p.art)}
      </div>
      <div class="p-body">
        <div class="p-meta"><span>${typeName(p.type)}</span><span>${esc(p.year)}</span></div>
        <h3 class="p-name"><a href="product.html?id=${p.id}">${esc(p.name)}</a></h3>
        <div class="p-prov">${icon("pin")}<span>${esc(p.origin)} · Provenance to ${p.provenance[1] ? p.provenance[1][0] : p.provenance[0][0]}</span></div>
        <span class="avail ${a.cls}">${a.label}${p.offers ? " · Accepts offers" : ""}</span>
        <div class="p-foot">
          <span class="price">${priceHTML(p.price)}</span>
          <a class="btn btn-view" href="product.html?id=${p.id}">View Piece</a>
        </div>
      </div>
    </article>`;
  }

  function productCard(p) {
    if (p.heritage) return heritageCard(p);
    const a = AVAIL[p.stock];
    const isSaved = saved.has(p.id);
    return `<article class="p-card">
      <div class="p-media">
        <div class="p-tags">
          ${p.badge ? `<span class="tag olive">${p.badge}</span>` : p.restricted ? `<span class="tag amber">Restricted</span>` : "<span></span>"}
          <button class="save-btn${isSaved ? " saved" : ""}" type="button" data-save="${p.id}" aria-pressed="${isSaved}" aria-label="Save ${esc(p.name)}">${icon("bookmark")}</button>
        </div>
        ${render(p.art)}
      </div>
      <div class="p-body">
        <div class="p-meta"><span>${catName(p.category)}</span><span>${esc(p.brand)}</span></div>
        <h3 class="p-name"><a href="product.html?id=${p.id}">${esc(p.name)}</a></h3>
        <div class="p-rating">${stars(p.rating)}<span>${p.rating.toFixed(1)} (${p.reviews.toLocaleString()})</span></div>
        <span class="avail ${a.cls}">${a.label}</span>
        <div class="p-foot">
          <span class="price">${priceHTML(p.price)}</span>
          <a class="btn btn-view" href="product.html?id=${p.id}">View Details</a>
        </div>
      </div>
    </article>`;
  }

  /* ------------------------------------------------------------------------
     Reveal on scroll
     ------------------------------------------------------------------------ */

  let io = null;
  function observeReveals(root = document) {
    const els = $$(".reveal, .reveal-stagger, .bars", root).filter((el) => !el.classList.contains("in"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    io =
      io ||
      new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("in");
              io.unobserve(en.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
    els.forEach((el) => io.observe(el));
  }

  function hydrateIcons(root = document) {
    $$("[data-icon]", root).forEach((el) => {
      el.innerHTML = icon(el.dataset.icon) + el.innerHTML;
      el.removeAttribute("data-icon");
    });
  }

  /* ------------------------------------------------------------------------
     Homepage
     ------------------------------------------------------------------------ */

  function initHome() {
    // hero visual + card
    const heroP = byId("sentinel-high-cut-helmet");
    $("[data-hero-stage]").innerHTML = render(heroP.art);
    $("[data-hero-card]").innerHTML = `
      <div class="thumb">${render("timer")}</div>
      <div><small>New Arrival</small><strong>Shot Timer Pro</strong><span class="price mono">${money(byId("shot-timer-pro").price)} · 4.8 ★</span></div>`;

    // categories
    $("[data-categories]").innerHTML = CATEGORIES.map((c, i) => {
      const count = PRODUCTS.filter((p) => p.category === c.key).length;
      return `<a class="cat-card" href="?cat=${c.key}#marketplace" data-cat-link="${c.key}">
        <span class="idx">0${i + 1} / 05</span>
        <span class="cat-icon">${icon(c.icon)}</span>
        <h3>${c.name}</h3>
        <p>${c.blurb}</p>
        <span class="more"><span>${count} listings</span>${icon("arrow")}</span>
      </a>`;
    }).join("");

    // featured
    $("[data-featured]").innerHTML = PRODUCTS.filter((p) => p.featured).slice(0, 4).map(productCard).join("");

    // prestige teaser
    $("[data-prestige-art]").innerHTML = render("dhal");
    $("[data-prestige]").innerHTML = HERITAGE.filter((p) => p.badge).slice(0, 3).map(productCard).join("");

    // marketplace filters
    const catSel = $("#f-cat");
    catSel.innerHTML = `<option value="">All categories</option>` + CATEGORIES.map((c) => `<option value="${c.key}">${c.name}</option>`).join("");

    const state = { q: "", cat: "", price: "", avail: "", sort: "featured" };
    const params = new URLSearchParams(location.search);
    if (params.get("cat")) state.cat = params.get("cat");
    catSel.value = state.cat;

    const grid = $("[data-market]");
    const count = $("[data-count]");

    function apply() {
      const q = state.q.trim().toLowerCase();
      let list = PRODUCTS.filter((p) => {
        if (state.cat && p.category !== state.cat) return false;
        if (state.avail && p.stock !== state.avail) return false;
        if (state.price) {
          const [lo, hi] = state.price.split("-").map(Number);
          if (p.price < lo || (hi && p.price > hi)) return false;
        }
        if (q) {
          const hay = `${p.name} ${p.brand} ${catName(p.category)} ${p.tagline}`.toLowerCase();
          if (!q.split(/\s+/).every((w) => hay.includes(w))) return false;
        }
        return true;
      });
      const sorters = {
        featured: (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || b.reviews - a.reviews,
        "price-asc": (a, b) => a.price - b.price,
        "price-desc": (a, b) => b.price - a.price,
        rating: (a, b) => b.rating - a.rating || b.reviews - a.reviews,
      };
      list = list.slice().sort(sorters[state.sort]);
      count.innerHTML = `Showing <b>${list.length}</b> of ${PRODUCTS.length} listings${state.cat ? ` in <b>${catName(state.cat)}</b>` : ""}`;
      grid.innerHTML = list.length
        ? list.map(productCard).join("")
        : `<div class="empty-state"><h3>No matches</h3><p>Try a broader search or clear your filters.</p><button class="btn btn-ghost btn-sm" type="button" data-clear>Clear Filters</button></div>`;
      grid.classList.remove("in");
      void grid.offsetWidth;
      grid.classList.add("in");
      $$(".chip[data-avail]").forEach((c) => c.classList.toggle("on", c.dataset.avail === state.avail));
      $$(".chip[data-cat]").forEach((c) => c.classList.toggle("on", c.dataset.cat === state.cat));
    }

    $("#f-q").addEventListener("input", (e) => { state.q = e.target.value; apply(); });
    catSel.addEventListener("change", (e) => { state.cat = e.target.value; apply(); });
    $("#f-price").addEventListener("change", (e) => { state.price = e.target.value; apply(); });
    $("#f-avail").addEventListener("change", (e) => { state.avail = e.target.value; apply(); });
    $("#f-sort").addEventListener("change", (e) => { state.sort = e.target.value; apply(); });
    $("[data-search-form]").addEventListener("submit", (e) => {
      e.preventDefault();
      apply();
      grid.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    const chips = $("[data-chips]");
    chips.innerHTML =
      `<span class="mono" style="font-size:10.5px;letter-spacing:.14em;color:var(--dim);margin-right:4px">QUICK</span>` +
      CATEGORIES.map((c) => `<button type="button" class="chip" data-cat="${c.key}">${c.name}</button>`).join("") +
      `<button type="button" class="chip" data-avail="in">In stock only</button>`;
    chips.addEventListener("click", (e) => {
      const c = e.target.closest(".chip");
      if (!c) return;
      if (c.dataset.cat !== undefined) {
        state.cat = state.cat === c.dataset.cat ? "" : c.dataset.cat;
        catSel.value = state.cat;
      } else {
        state.avail = state.avail === c.dataset.avail ? "" : c.dataset.avail;
        $("#f-avail").value = state.avail;
      }
      apply();
    });

    document.addEventListener("click", (e) => {
      const link = e.target.closest("[data-cat-link]");
      if (link) {
        e.preventDefault();
        state.cat = link.dataset.catLink;
        catSel.value = state.cat;
        apply();
        history.replaceState(null, "", `?cat=${state.cat}#marketplace`);
        $("#marketplace").scrollIntoView({ behavior: "smooth" });
      }
      if (e.target.closest("[data-clear]")) {
        Object.assign(state, { q: "", cat: "", price: "", avail: "" });
        $("#f-q").value = "";
        catSel.value = "";
        $("#f-price").value = "";
        $("#f-avail").value = "";
        apply();
      }
    });

    apply();

    // brands
    $("[data-brands]").innerHTML = BRANDS.map((b) => `<div class="brand">${icon(b.icon)}<b>${b.name}</b><small>${b.sub}</small></div>`).join("");

    // reviews
    $("[data-reviews]").innerHTML = REVIEWS.map(
      (r) => `<article class="review">
        <div class="head">${stars(r.rating)}<span class="verified">${icon("badge")}Verified buyer</span></div>
        <blockquote>“${esc(r.text)}”</blockquote>
        <div class="who"><span class="avatar">${r.name[0]}</span><div><b>${esc(r.name)}</b><span>${esc(r.role)} · ${esc(r.product)}</span></div></div>
      </article>`
    ).join("");

    initFaq();
    $("[data-newsletter]").addEventListener("submit", (e) => {
      e.preventDefault();
      e.target.reset();
      toast("Demo mode — no email was collected", "info");
    });
  }

  function initFaq() {
    $$(".faq-q").forEach((q) => {
      q.addEventListener("click", () => {
        const item = q.closest(".faq-item");
        const open = !item.classList.contains("open");
        $$(".faq-item.open").forEach((i) => {
          i.classList.remove("open");
          $(".faq-q", i).setAttribute("aria-expanded", "false");
        });
        item.classList.toggle("open", open);
        q.setAttribute("aria-expanded", String(open));
      });
    });
  }

  /* ------------------------------------------------------------------------
     Product page
     ------------------------------------------------------------------------ */

  function initProduct() {
    const id = new URLSearchParams(location.search).get("id");
    const p = byId(id) || PRODUCTS[0];
    const s = SELLERS[p.seller];
    const a = availFor(p);
    document.title = `${p.name} — IronForge Market`;

    $("[data-crumbs]").innerHTML = p.heritage
      ? `<a href="index.html">Home</a><span class="sep">/</span>
      <a href="heritage.html">Historic &amp; Prestige</a><span class="sep">/</span>
      <a href="heritage.html?type=${p.type}#collection">${typeName(p.type)}</a><span class="sep">/</span>
      <span class="here">${esc(p.name)}</span>`
      : `
      <a href="index.html">Home</a><span class="sep">/</span>
      <a href="index.html#marketplace">Marketplace</a><span class="sep">/</span>
      <a href="index.html?cat=${p.category}#marketplace">${catName(p.category)}</a><span class="sep">/</span>
      <span class="here">${esc(p.name)}</span>`;

    // gallery
    const views = [
      { cls: "", label: "Studio · Front" },
      { cls: "v-detail", label: "Detail · Close-up" },
      { cls: "v-field", label: "Field · Ambient" },
      { cls: "v-scale", label: "Scale · Reference" },
    ];
    $("[data-gallery]").innerHTML = `
      <div class="thumbs" role="tablist" aria-label="Product images">
        ${views.map((v, i) => `<button class="thumb-btn${i ? "" : " on"}" type="button" role="tab" aria-selected="${!i}" aria-label="${v.label}" data-view="${i}"><span class="view ${v.cls}">${render(p.art)}</span></button>`).join("")}
      </div>
      <div class="main-view" data-main-view>
        ${views.map((v, i) => `<div class="view ${v.cls}" data-pane="${i}" style="${i ? "opacity:0" : ""}">${render(p.art)}</div>`).join("")}
        <span class="tag zoom-hint">${icon("zoom")} Click to zoom</span>
        <span class="view-label" data-view-label>${views[0].label}</span>
        <span class="view-label view-count" data-view-count>01 / 04</span>
      </div>`;

    const main = $("[data-main-view]");
    let current = 0;
    function show(i) {
      current = i;
      $$("[data-pane]").forEach((el) => {
        const on = Number(el.dataset.pane) === i;
        el.style.opacity = on ? "1" : "0";
        el.style.transform = on ? "none" : "scale(0.97)";
      });
      $$("[data-view]").forEach((b) => {
        const on = Number(b.dataset.view) === i;
        b.classList.toggle("on", on);
        b.setAttribute("aria-selected", String(on));
      });
      $("[data-view-label]").textContent = views[i].label;
      $("[data-view-count]").textContent = `0${i + 1} / 04`;
    }
    $(".thumbs").addEventListener("click", (e) => {
      const b = e.target.closest("[data-view]");
      if (b) show(Number(b.dataset.view));
    });
    main.addEventListener("click", () => main.classList.toggle("zoom"));
    main.addEventListener("mousemove", (e) => {
      if (!main.classList.contains("zoom")) return;
      const r = main.getBoundingClientRect();
      const pane = $(`[data-pane="${current}"] svg`);
      pane.style.transformOrigin = `${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`;
    });
    document.addEventListener("keydown", (e) => {
      if (e.target.closest("input, select, textarea")) return;
      if (e.key === "ArrowRight") show((current + 1) % 4);
      if (e.key === "ArrowLeft") show((current + 3) % 4);
    });

    // info column
    const isSaved = saved.has(p.id);
    const sellerCard = `
      <div class="seller-card">
        <div class="seller-top">
          <span class="avatar">${s.initials}</span>
          <div><b>${esc(s.name)}</b><span class="verified">${icon("badge")}Verified Seller · since ${s.since}</span></div>
          <button class="btn btn-ghost btn-sm" type="button" data-contact>View Store</button>
        </div>
        <div class="seller-stats">
          <div><b>${s.rating.toFixed(1)}</b><span>Rating</span></div>
          <div><b>${s.sales}</b><span>Sales</span></div>
          <div><b>${s.response}</b><span>Response</span></div>
          <div><b style="font-size:16px;line-height:1.5">${s.location}</b><span>Ships from</span></div>
        </div>
      </div>`;

    $("[data-info]").innerHTML = p.heritage
      ? `
      <span class="eyebrow brass-eyebrow">${typeName(p.type)} · ${esc(p.year)}</span>
      <h1>${esc(p.name)}</h1>
      <div class="pdp-rating">
        <span class="h-fact">${icon("pin")}${esc(p.origin)}</span>
        <span class="h-fact">${icon("badge")}COA ${p.certificate}</span>
        <a href="#details" data-goto-tab="prov">View provenance</a>
      </div>
      <p class="pdp-lede">${esc(p.tagline)}</p>

      <div class="price-block">
        <div>
          <span class="price">${priceHTML(p.price)}</span>
          <small>${p.offers ? "Asking price · seller accepts private offers" : "Fixed price · offers not accepted"}</small>
        </div>
        <div style="text-align:right"><span class="avail ${a.cls}">${a.label} · One of one</span></div>
      </div>

      <div class="auth-strip">
        <div>${icon("shield")}<span><b>Authenticated</b>Specialist-examined</span></div>
        <div>${icon("package")}<span><b>Insured handover</b>Escrow + white-glove</span></div>
        <div>${icon("refresh")}<span><b>14-day review</b>Return if not as described</span></div>
      </div>

      <section class="compliance" aria-labelledby="compliance-title">
        <div class="c-head" id="compliance-title">${icon("alert")} Compliance &amp; Legal Notice</div>
        <p>This is a <b>historic collectible</b> offered for display, study and preservation. ${p.type === "arms" ? "Antique edged weapons and armour are regulated in many jurisdictions." : "Historic objects may be subject to cultural-property rules."}</p>
        <ul>
          <li>Buyers must be 18+ and complete identity verification before handover.</li>
          <li>Export licences or cultural-property permits may be required for cross-border sales.</li>
          <li>The seller warrants lawful ownership; title and provenance are reviewed by IronForge.</li>
          <li>This is a demo interface — no orders, offers, payments, or transfers are processed.</li>
        </ul>
      </section>

      <div class="buy-row h-buy">
        ${p.offers ? `<button class="btn btn-primary" type="button" data-open-offer="${p.id}">${icon("chat")} Make an Offer</button>` : ""}
        <button class="btn ${p.offers ? "btn-ghost" : "btn-primary"}" type="button" data-add${p.stock === "pre" ? " disabled" : ""}>${icon("cart")} ${p.stock === "pre" ? "Reserved" : "Reserve Piece"}</button>
      </div>
      <div class="secondary-actions">
        <button class="btn btn-ghost btn-sm${isSaved ? " saved" : ""}" type="button" data-save="${p.id}" aria-pressed="${isSaved}">${icon("bookmark")} Save to List</button>
        <button class="btn btn-ghost btn-sm" type="button" data-viewing>${icon("eye")} Request Viewing</button>
      </div>
      <p class="demo-note">${icon("info")} Demo marketplace — offers and checkout are disabled.</p>
      ${sellerCard}`
      : `
      <span class="eyebrow">${catName(p.category)} · ${esc(p.brand)}</span>
      <h1>${esc(p.name)}</h1>
      <div class="pdp-rating">${stars(p.rating)}<span><b style="color:var(--text)">${p.rating.toFixed(1)}</b> / 5</span><a href="#tab-reviews" data-goto-reviews>${p.reviews.toLocaleString()} reviews</a><span class="mono" style="font-size:11px;letter-spacing:.1em">SKU IF-${p.id.slice(0, 3).toUpperCase()}-${String(p.price).padStart(4, "0")}</span></div>
      <p class="pdp-lede">${esc(p.tagline)}</p>

      <div class="price-block">
        <div>
          <span class="price">${priceHTML(p.price)}</span>${p.was ? `<span class="was">${money(p.was)}</span>` : ""}
          <small>Listed price · taxes and shipping calculated by seller</small>
        </div>
        <div style="text-align:right">
          <span class="avail ${a.cls}">${a.label}${p.stock === "low" ? " · 3 left" : p.stock === "pre" ? " · ships Nov 2026" : ""}</span>
        </div>
      </div>

      <section class="compliance" aria-labelledby="compliance-title">
        <div class="c-head" id="compliance-title">${icon("alert")} Compliance &amp; Legal Notice</div>
        <p>${p.restricted ? "This item is <b>subject to regional restrictions</b>." : "This listing is subject to standard marketplace compliance checks."} Purchase eligibility, age requirements and shipping availability are governed by federal, state and local law.</p>
        <ul>
          <li>Buyers must be 18+ (21+ where required) and pass identity verification.</li>
          <li>Sellers may decline orders to jurisdictions where an item is restricted.</li>
          <li>This is a demo interface — no orders, payments, or transfers are processed.</li>
        </ul>
      </section>

      <div class="buy-row">
        <div class="qty"><button type="button" data-q="-1" aria-label="Decrease quantity">−</button><output data-qty>1</output><button type="button" data-q="1" aria-label="Increase quantity">+</button></div>
        <button class="btn btn-primary" type="button" data-add>${icon("cart")} Add to Cart</button>
      </div>
      <div class="secondary-actions">
        <button class="btn btn-ghost btn-sm${isSaved ? " saved" : ""}" type="button" data-save="${p.id}" aria-pressed="${isSaved}">${icon("bookmark")} Save to List</button>
        <button class="btn btn-ghost btn-sm" type="button" data-contact>${icon("chat")} Contact Seller</button>
      </div>
      <p class="demo-note">${icon("info")} Demo marketplace — checkout is disabled.</p>

      <div class="assurances">
        <div>${icon("lock")}<span>Encrypted, escrow-protected transactions</span></div>
        <div>${icon("truck")}<span>Tracked, discreet shipping</span></div>
        <div>${icon("refresh")}<span>30-day seller-backed returns</span></div>
      </div>

      <div class="seller-card">
        <div class="seller-top">
          <span class="avatar">${s.initials}</span>
          <div><b>${esc(s.name)}</b><span class="verified">${icon("badge")}Verified Seller · since ${s.since}</span></div>
          <button class="btn btn-ghost btn-sm" type="button" data-contact>View Store</button>
        </div>
        <div class="seller-stats">
          <div><b>${s.rating.toFixed(1)}</b><span>Rating</span></div>
          <div><b>${s.sales}</b><span>Sales</span></div>
          <div><b>${s.response}</b><span>Response</span></div>
          <div><b style="font-size:16px;line-height:1.5">${s.location}</b><span>Ships from</span></div>
        </div>
      </div>`;

    let qty = 1;
    $("[data-info]").addEventListener("click", (e) => {
      const q = e.target.closest("[data-q]");
      if (q) {
        qty = Math.max(1, Math.min(9, qty + Number(q.dataset.q)));
        $("[data-qty]").textContent = qty;
      }
      if (e.target.closest("[data-add]")) addToCart(p.id, qty);
      if (e.target.closest("[data-contact]")) toast("Demo mode — seller messaging is disabled", "info");
      if (e.target.closest("[data-viewing]")) toast("Demo mode — viewing requests are disabled", "info");
      const goto = e.target.closest("[data-goto-reviews], [data-goto-tab]");
      if (goto) {
        e.preventDefault();
        selectTab(goto.dataset.gotoTab || "reviews");
        $("#details").scrollIntoView({ behavior: "smooth" });
      }
    });

    // tabs
    const specEntries = Object.entries(p.specs);
    const half = Math.ceil(specEntries.length / 2);
    const specTable = (rows) => `<table class="spec-table"><tbody>${rows.map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td>${esc(v)}</td></tr>`).join("")}</tbody></table>`;

    const dist = [0.78, 0.15, 0.04, 0.02, 0.01];
    $("[data-tabs]").innerHTML = p.heritage
      ? `
      <div class="tabs" role="tablist">
        <button class="tab on" role="tab" type="button" data-tab="prov" aria-selected="true">Provenance</button>
        <button class="tab" role="tab" type="button" data-tab="desc" aria-selected="false">Description</button>
        <button class="tab" role="tab" type="button" data-tab="specs" aria-selected="false">Specifications</button>
        <button class="tab" role="tab" type="button" data-tab="ship" aria-selected="false">Handover &amp; Compliance</button>
      </div>

      <div class="tab-panel on" data-panel="prov" role="tabpanel">
        <div class="prov-cols">
          <ol class="timeline">
            ${p.provenance.map(([when, what]) => `<li><span class="t-when">${esc(when)}</span><p>${esc(what)}</p></li>`).join("")}
          </ol>
          <div class="coa">
            <div class="coa-head"><span class="eyebrow brass-eyebrow">Certificate of Authenticity</span>${icon("badge")}</div>
            <div class="coa-id">${p.certificate}</div>
            <dl>
              <div><dt>Object</dt><dd>${esc(p.name)}</dd></div>
              <div><dt>Date</dt><dd>${esc(p.year)}</dd></div>
              <div><dt>Origin</dt><dd>${esc(p.origin)}</dd></div>
              <div><dt>Examined by</dt><dd>IronForge Heritage Desk &amp; independent specialist</dd></div>
            </dl>
            <h4>Condition report</h4>
            <p>${esc(p.condition)}</p>
          </div>
        </div>
      </div>

      <div class="tab-panel" data-panel="desc" role="tabpanel">
        <div class="desc-cols">
          <div><p>${esc(p.description)}</p><p>Historic &amp; Prestige listings are reviewed by the IronForge Heritage Desk for authenticity, lawful title and accurate description before they go live.</p></div>
          <ul class="features">${p.features.map((f) => `<li>${icon("check")}<span>${esc(f)}</span></li>`).join("")}</ul>
        </div>
      </div>

      <div class="tab-panel" data-panel="specs" role="tabpanel">
        <div class="spec-cols">${specTable(specEntries.slice(0, half))}${specTable(specEntries.slice(half))}</div>
      </div>

      <div class="tab-panel" data-panel="ship" role="tabpanel">
        <div class="ship-grid">
          <div>${icon("package")}<h4>Insured handover</h4><p>Funds are held in escrow while the piece travels by fine-art courier, fully insured, from ${esc(s.location)}. In-person collection can be arranged.</p></div>
          <div>${icon("shield")}<h4>Eligibility &amp; export</h4><p>Identity and age checks are completed before release. Where an export licence or cultural-property permit is required, the sale completes only once it is granted.</p></div>
          <div>${icon("refresh")}<h4>14-day review</h4><p>If the piece differs materially from its description or certificate, return it within 14 days for a full refund.</p></div>
        </div>
      </div>`
      : `
      <div class="tabs" role="tablist">
        <button class="tab on" role="tab" type="button" data-tab="desc" aria-selected="true">Description</button>
        <button class="tab" role="tab" type="button" data-tab="specs" aria-selected="false">Specifications</button>
        <button class="tab" role="tab" type="button" data-tab="ship" aria-selected="false">Shipping &amp; Compliance</button>
        <button class="tab" role="tab" type="button" data-tab="reviews" aria-selected="false" id="tab-reviews">Reviews (${p.reviews.toLocaleString()})</button>
      </div>

      <div class="tab-panel on" data-panel="desc" role="tabpanel">
        <div class="desc-cols">
          <div><p>${esc(p.description)}</p><p>Every IronForge listing is reviewed for accuracy before going live, and sellers must hold all licences required to offer regulated equipment in their jurisdiction.</p></div>
          <ul class="features">${p.features.map((f) => `<li>${icon("check")}<span>${esc(f)}</span></li>`).join("")}</ul>
        </div>
      </div>

      <div class="tab-panel" data-panel="specs" role="tabpanel">
        <div class="spec-cols">${specTable(specEntries.slice(0, half))}${specTable(specEntries.slice(half))}</div>
      </div>

      <div class="tab-panel" data-panel="ship" role="tabpanel">
        <div class="ship-grid">
          <div>${icon("truck")}<h4>Shipping</h4><p>Ships from ${esc(s.location)} in 1–3 business days via tracked carrier. Signature may be required on delivery.</p></div>
          <div>${icon("shield")}<h4>Eligibility</h4><p>Identity and age verification are completed before a seller can release an order. Some items cannot ship to certain states or countries.</p></div>
          <div>${icon("refresh")}<h4>Returns</h4><p>Unused items may be returned within 30 days in original packaging. Regulated items may carry additional return conditions.</p></div>
        </div>
      </div>

      <div class="tab-panel" data-panel="reviews" role="tabpanel">
        <div class="rv-head">
          <div class="score-panel" style="position:static">
            <div class="big">${p.rating.toFixed(1)}</div>
            ${stars(p.rating)}
            <p>Based on ${p.reviews.toLocaleString()} verified purchase reviews</p>
            <div class="bars">${dist.map((d, i) => `<div class="bar-row"><span>${5 - i}★</span><div class="bar"><i style="width:${d * 100}%"></i></div><span>${Math.round(d * 100)}%</span></div>`).join("")}</div>
          </div>
          <div class="rv-list">
            ${PRODUCT_REVIEWS.map(
              (r) => `<article class="review">
                <div class="head">${stars(r.rating)}<span>${r.date}</span></div>
                <h4>${esc(r.title)}</h4>
                <blockquote>${esc(r.text)}</blockquote>
                <div class="who"><span class="avatar">${r.name[0]}</span><div><b>${esc(r.name)}</b><span class="verified">${icon("badge")}Verified purchase</span></div></div>
              </article>`
            ).join("")}
          </div>
        </div>
      </div>`;

    function selectTab(name) {
      $$(".tab").forEach((t) => {
        const on = t.dataset.tab === name;
        t.classList.toggle("on", on);
        t.setAttribute("aria-selected", String(on));
      });
      $$(".tab-panel").forEach((pn) => pn.classList.toggle("on", pn.dataset.panel === name));
      if (name === "reviews") setTimeout(() => $$(".tab-panel.on .bars").forEach((b) => b.classList.add("in")), 30);
    }
    $(".tabs").addEventListener("click", (e) => {
      const t = e.target.closest("[data-tab]");
      if (t) selectTab(t.dataset.tab);
    });

    // related
    if (p.heritage) {
      $("[data-related-title]").textContent = "More from the collection";
      $("[data-related-back]").href = "heritage.html#collection";
      $("[data-related-back]").textContent = "Back to Collection";
      const others = HERITAGE.filter((x) => x.id !== p.id);
      $("[data-related]").innerHTML = others
        .filter((x) => x.type === p.type)
        .concat(others.filter((x) => x.type !== p.type))
        .slice(0, 4)
        .map(productCard)
        .join("");
      return;
    }
    const related = PRODUCTS.filter((x) => x.id !== p.id && x.category === p.category)
      .concat(PRODUCTS.filter((x) => x.id !== p.id && x.category !== p.category && x.featured))
      .slice(0, 4);
    $("[data-related]").innerHTML = related.map(productCard).join("");
  }

  /* ------------------------------------------------------------------------
     Historic & Prestige page — browse + sell
     ------------------------------------------------------------------------ */

  const COMMISSION = 0.08;
  const AUTH_FEE = 95;

  function initHeritage() {
    // hero piece
    $("[data-h-stage]").innerHTML = render("tulwar");

    /* ---------- browse ---------- */
    const state = { type: new URLSearchParams(location.search).get("type") || "", era: "", price: "", sort: "newest" };
    const grid = $("[data-h-grid]");

    $("[data-h-types]").innerHTML =
      `<button type="button" class="chip" data-type="">All pieces</button>` +
      HERITAGE_TYPES.map((t) => `<button type="button" class="chip" data-type="${t.key}">${t.name}</button>`).join("");
    $("#h-era").innerHTML = `<option value="">Any era</option>` + ERAS.map((e) => `<option>${e}</option>`).join("");

    function apply() {
      let list = HERITAGE.filter((p) => {
        if (state.type && p.type !== state.type) return false;
        if (state.era && p.era !== state.era) return false;
        if (state.price) {
          const [lo, hi] = state.price.split("-").map(Number);
          if (p.price < lo || (hi && p.price > hi)) return false;
        }
        return true;
      });
      const sorters = {
        newest: () => 0,
        "price-desc": (a, b) => b.price - a.price,
        "price-asc": (a, b) => a.price - b.price,
        oldest: (a, b) => ERAS.indexOf(a.era) - ERAS.indexOf(b.era),
      };
      list = list.slice().sort(sorters[state.sort]);
      $("[data-h-count]").innerHTML = `<b>${list.length}</b> ${list.length === 1 ? "piece" : "pieces"}${state.type ? ` in <b>${typeName(state.type)}</b>` : ""}`;
      grid.innerHTML = list.length
        ? list.map(productCard).join("")
        : `<div class="empty-state"><h3>No pieces match</h3><p>Try a different era or price range.</p></div>`;
      grid.classList.remove("in");
      void grid.offsetWidth;
      grid.classList.add("in");
      $$("[data-h-types] .chip").forEach((c) => c.classList.toggle("on", c.dataset.type === state.type));
    }

    $("[data-h-types]").addEventListener("click", (e) => {
      const c = e.target.closest(".chip");
      if (!c) return;
      state.type = c.dataset.type;
      apply();
    });
    $("#h-era").addEventListener("change", (e) => { state.era = e.target.value; apply(); });
    $("#h-price").addEventListener("change", (e) => { state.price = e.target.value; apply(); });
    $("#h-sort").addEventListener("change", (e) => { state.sort = e.target.value; apply(); });
    apply();

    /* ---------- sell ---------- */
    const form = $("[data-sell-form]");
    const typeSel = $("#s-type");
    const eraSel = $("#s-era");
    typeSel.innerHTML = `<option value="">Select a category</option>` + HERITAGE_TYPES.map((t) => `<option value="${t.key}">${t.name}</option>`).join("");
    eraSel.innerHTML = `<option value="">Select an era</option>` + ERAS.map((e) => `<option>${e}</option>`).join("");

    let photoURL = null;
    const photos = $("#s-photos");
    const thumbs = $("[data-photo-thumbs]");
    photos.addEventListener("change", () => {
      thumbs.innerHTML = "";
      if (photoURL) URL.revokeObjectURL(photoURL);
      photoURL = null;
      Array.from(photos.files)
        .filter((f) => f.type.startsWith("image/"))
        .slice(0, 6)
        .forEach((f, i) => {
          const url = URL.createObjectURL(f);
          if (i === 0) photoURL = url;
          const img = document.createElement("img");
          img.src = url;
          img.alt = "";
          thumbs.appendChild(img);
        });
      $("[data-drop-label]").textContent = photos.files.length ? `${photos.files.length} photo${photos.files.length > 1 ? "s" : ""} selected` : "Drag photos here or click to browse";
      preview();
    });

    function values() {
      return {
        title: $("#s-title").value.trim(),
        type: typeSel.value,
        era: eraSel.value,
        year: $("#s-year").value.trim(),
        origin: $("#s-origin").value.trim(),
        price: Math.max(0, Number($("#s-price").value) || 0),
        offers: $("#s-offers").checked,
        condition: $("#s-condition").value,
        provenance: $("#s-provenance").value.trim(),
      };
    }

    function preview() {
      const v = values();
      const art = TYPE_ART[v.type] || "compass";
      $("[data-preview]").innerHTML = `
        <article class="p-card h-card preview-card">
          <div class="p-media">
            <div class="p-tags"><span class="tag amber">Pending authentication</span><span></span></div>
            ${photoURL ? `<img class="preview-photo" src="${photoURL}" alt="">` : render(art)}
          </div>
          <div class="p-body">
            <div class="p-meta"><span>${v.type ? typeName(v.type) : "Category"}</span><span>${esc(v.year || v.era || "Date")}</span></div>
            <h3 class="p-name">${esc(v.title || "Your piece title")}</h3>
            <div class="p-prov">${icon("pin")}<span>${esc(v.origin || "Origin")}${v.provenance ? " · Provenance supplied" : ""}</span></div>
            <span class="avail">${v.offers ? "Accepts offers" : "Fixed price"}${v.condition ? " · " + esc(v.condition) : ""}</span>
            <div class="p-foot"><span class="price">${priceHTML(v.price || 0)}</span><span class="btn btn-view" aria-hidden="true">View Piece</span></div>
          </div>
        </article>`;
      const fee = v.price * COMMISSION;
      $("[data-fees]").innerHTML = `
        <div><span>Asking price</span><b>${money(v.price)}</b></div>
        <div><span>Commission (8%)</span><b>− ${money(Math.round(fee))}</b></div>
        <div><span>Authentication fee</span><b>− ${money(AUTH_FEE)}<small> refunded on sale</small></b></div>
        <div class="total"><span>You receive (est.)</span><b>${money(Math.max(0, Math.round(v.price - fee)))}</b></div>`;
    }

    form.addEventListener("input", preview);
    form.addEventListener("change", preview);
    preview();

    /* submissions are kept in this browser only */
    let subs = store.get("submissions", []);

    function renderSubs() {
      const host = $("[data-subs]");
      $("[data-subs-wrap]").hidden = !subs.length;
      host.innerHTML = subs
        .map(
          (s) => `<div class="sub-row">
            <div class="thumb">${render(TYPE_ART[s.type] || "compass")}</div>
            <div class="sub-main"><b>${esc(s.title)}</b><span>${typeName(s.type)} · ${esc(s.year || s.era)} · ${money(s.price)}</span></div>
            <div class="sub-status"><span class="tag amber">Pending authentication</span><span class="mono">${s.ref}</span></div>
            <button class="remove" type="button" data-withdraw="${s.ref}">Withdraw</button>
          </div>`
        )
        .join("");
    }
    $("[data-subs]").addEventListener("click", (e) => {
      const b = e.target.closest("[data-withdraw]");
      if (!b) return;
      subs = subs.filter((s) => s.ref !== b.dataset.withdraw);
      store.set("submissions", subs);
      renderSubs();
      toast("Submission withdrawn", "info");
    });
    renderSubs();

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const v = values();
      const errs = [];
      if (v.title.length < 4) errs.push(["#s-title", "Add a descriptive title"]);
      if (!v.type) errs.push(["#s-type", "Choose a category"]);
      if (!v.era) errs.push(["#s-era", "Choose an era"]);
      if (!v.origin) errs.push(["#s-origin", "Add the place of origin"]);
      if (v.price < 100) errs.push(["#s-price", "Asking price must be at least $100"]);
      if (v.provenance.length < 20) errs.push(["#s-provenance", "Describe the provenance (at least 20 characters)"]);
      if (!$("#s-confirm").checked) errs.push(["#s-confirm", "Confirm ownership and lawful sale"]);
      $$(".field.err", form).forEach((f) => f.classList.remove("err"));
      $$(".err-msg", form).forEach((m) => m.remove());
      if (errs.length) {
        errs.forEach(([sel, msg]) => {
          const field = $(sel).closest(".field, .check");
          field.classList.add("err");
          field.insertAdjacentHTML("beforeend", `<span class="err-msg">${msg}</span>`);
        });
        $(errs[0][0]).focus();
        return;
      }
      const ref = "IF-SUB-" + Date.now().toString(36).toUpperCase().slice(-6);
      subs.unshift({ ...v, ref });
      store.set("submissions", subs);
      renderSubs();
      form.reset();
      thumbs.innerHTML = "";
      if (photoURL) URL.revokeObjectURL(photoURL);
      photoURL = null;
      $("[data-drop-label]").textContent = "Drag photos here or click to browse";
      preview();
      toast(`Submitted for authentication · ${ref}`, "badge");
      $("[data-subs-wrap]").scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  /* ------------------------------------------------------------------------
     Boot
     ------------------------------------------------------------------------ */

  renderHeader();
  renderFooter();
  buildOverlays();
  hydrateIcons();
  if (document.body.dataset.page === "home") initHome();
  if (document.body.dataset.page === "product") initProduct();
  if (document.body.dataset.page === "heritage") initHeritage();
  observeReveals();
})();
