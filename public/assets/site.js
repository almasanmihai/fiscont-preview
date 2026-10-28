/* Fiscont — comportament minim, fără dependențe. */
(function () {
  "use strict";

  function store(key, value) {
    try {
      if (value === undefined) return window.localStorage.getItem(key);
      window.localStorage.setItem(key, value);
    } catch (e) { return null; }
  }

  /* meniu pe mobil */
  var btn = document.querySelector(".menu-btn");
  var nav = document.getElementById("nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.textContent = open ? "Închide" : "Meniu";
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        btn.textContent = "Meniu";
        btn.focus();
      }
    });
  }

  /* filtrare pe categorii în blog */
  var filters = document.querySelectorAll("[data-filter]");
  var rows = document.querySelectorAll(".posts [data-cat]");
  var status = document.getElementById("filter-status");
  if (filters.length && rows.length) {
    filters.forEach(function (f) {
      f.addEventListener("click", function () {
        var cat = f.getAttribute("data-filter");
        var shown = 0;
        filters.forEach(function (o) { o.setAttribute("aria-pressed", o === f ? "true" : "false"); });
        rows.forEach(function (r) {
          var match = cat === "toate" || r.getAttribute("data-cat") === cat;
          r.hidden = !match;
          if (match) shown++;
        });
        if (status) {
          status.textContent = shown === 0
            ? "Nu există încă articole publicate în această categorie. Vezi mai jos articolele în pregătire."
            : shown + (shown === 1 ? " articol" : " articole");
        }
      });
    });
    /* blog.html?categorie=talks deschide direct categoria cerută */
    var wanted = new URLSearchParams(window.location.search).get("categorie");
    var match = wanted && document.querySelector('[data-filter="' + wanted.replace(/[^a-z]/g, "") + '"]');
    if (match) match.click();
  }

  /* timp de citire calculat din text (≈200 cuvinte/minut) */
  var prose = document.querySelector(".prose");
  var rt = document.querySelectorAll("[data-reading-time]");
  if (prose && rt.length) {
    var words = prose.textContent.trim().split(/\s+/).length;
    var mins = Math.max(1, Math.round(words / 200));
    rt.forEach(function (el) { el.textContent = mins + " min"; });
  }

  /* harta se încarcă doar la cerere (fără cookie-uri Google până atunci) */
  var mapBtn = document.querySelector("[data-load-map]");
  if (mapBtn) {
    mapBtn.addEventListener("click", function () {
      var box = mapBtn.closest(".map");
      var iframe = document.createElement("iframe");
      iframe.title = "Harta: Bd. Unirii nr. 64, București";
      iframe.loading = "lazy";
      iframe.referrerPolicy = "no-referrer-when-downgrade";
      iframe.src = "https://maps.google.com/maps?q=" + encodeURIComponent("Bulevardul Unirii 64, București") + "&z=16&output=embed";
      box.innerHTML = "";
      box.style.padding = "0";
      box.appendChild(iframe);
    });
  }

  /* săgețile opresc derularea și mută recenziile câte una */
  document.querySelectorAll("[data-quote-marquee]").forEach(function (root) {
    var track = root.querySelector(".quote-track");
    var prev = root.querySelector("[data-quote-prev]");
    var next = root.querySelector("[data-quote-next]");
    if (!track || !prev || !next) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var manual = false;
    var offset = 0;
    var raf = 0;
    var duration = 105000;

    function period() { return track.scrollWidth / 2; }
    function readOffset() {
      var m = getComputedStyle(track).transform;
      if (!m || m === "none") return offset;
      var parts = m.match(/matrix\(([^)]+)\)/);
      if (!parts) return offset;
      var x = parseFloat(parts[1].split(",")[4]);
      return isNaN(x) ? offset : x;
    }
    function wrap(x) {
      var p = period();
      if (!p) return x;
      while (x <= -p) x += p;
      while (x > 0) x -= p;
      return x;
    }
    function cardStep() {
      var card = track.querySelector(".quote");
      var gap = parseFloat(getComputedStyle(track).columnGap);
      if (isNaN(gap)) gap = parseFloat(getComputedStyle(track).gap) || 0;
      return (card ? card.getBoundingClientRect().width : 0) + gap;
    }
    function apply(x, animate) {
      offset = x;
      track.style.transition = animate ? "transform .45s ease" : "none";
      track.style.transform = "translateX(" + x + "px)";
    }
    function stopRaf() {
      if (raf) { cancelAnimationFrame(raf); raf = 0; }
    }
    function freeze() {
      stopRaf();
      if (!manual) {
        offset = readOffset();
        manual = true;
        track.style.animation = "none";
        apply(offset, false);
      } else {
        offset = readOffset();
      }
    }
    function step(sign) {
      freeze();
      var delta = cardStep();
      if (!delta) return;
      var index = -offset / delta;
      var targetIndex = sign < 0 ? Math.ceil(index - 0.02) : Math.floor(index + 0.02);
      if (Math.abs(targetIndex - index) < 0.02) targetIndex += sign < 0 ? 1 : -1;
      var from = offset;
      var target = -targetIndex * delta;
      if (target > 0) {
        from -= period();
        target -= period();
      }
      apply(from, false);
      track.getBoundingClientRect();
      apply(target, true);
    }
    function startRaf() {
      if (!manual || raf) return;
      offset = wrap(readOffset());
      apply(offset, false);
      var speed = period() / duration;
      var last = performance.now();
      function tick(now) {
        var dt = now - last;
        last = now;
        apply(wrap(offset - speed * dt), false);
        raf = requestAnimationFrame(tick);
      }
      raf = requestAnimationFrame(tick);
    }
    track.addEventListener("transitionend", function () {
      var wrapped = wrap(offset);
      if (wrapped !== offset) apply(wrapped, false);
    });
    prev.addEventListener("click", function () { step(1); });
    next.addEventListener("click", function () { step(-1); });
    root.addEventListener("mouseenter", stopRaf);
    root.addEventListener("focusin", stopRaf);
    root.addEventListener("mouseleave", startRaf);
    root.addEventListener("focusout", function (e) {
      if (!root.contains(e.relatedTarget)) startRaf();
    });
  });

  /* acord cookie-uri: ambele opțiuni la fel de vizibile */
  var consent = document.getElementById("consent");
  if (consent && !store("fiscont-consent")) {
    consent.hidden = false;
    consent.querySelectorAll("[data-consent]").forEach(function (b) {
      b.addEventListener("click", function () {
        store("fiscont-consent", b.getAttribute("data-consent"));
        consent.hidden = true;
      });
    });
  }
})();
