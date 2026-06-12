(function () {
  // Skills tab switching
  document.querySelectorAll(".hp-tab").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var tab = this.dataset.tab;

      document.querySelectorAll(".hp-tab").forEach(function (t) {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      document.querySelectorAll(".hp-tab-panel").forEach(function (p) {
        p.classList.remove("active");
      });

      this.classList.add("active");
      this.setAttribute("aria-selected", "true");

      var panel = document.getElementById("tab-" + tab);
      if (panel) {
        panel.classList.add("active");
        animateBars(panel);
      }
    });
  });

  // Animate skill bars when a panel becomes visible
  function animateBars(panel) {
    panel.querySelectorAll(".hp-fill").forEach(function (fill) {
      var target = fill.style.width;
      fill.style.width = "0";
      requestAnimationFrame(function () {
        fill.style.width = target;
      });
    });
  }

  // Animate bars on the active panel at load via IntersectionObserver
  var skillsSection = document.querySelector(".hp-skills");
  if (skillsSection && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting) {
          animateBars(document.querySelector(".hp-tab-panel.active"));
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(skillsSection);
  }
})();
