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
