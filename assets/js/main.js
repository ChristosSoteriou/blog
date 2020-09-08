(() => {
  // Theme switch
  const body = document.body;
  const lamp = document.getElementById("mode");
  const data = body.getAttribute("data-theme");

  const initTheme = (state) => {
    if (state === "dark") {
      body.setAttribute("data-theme", "dark");
    } else if (state === "light") {
      body.removeAttribute("data-theme");
    } else {
      localStorage.setItem("theme", data);
    }
  };

  const toggleTheme = (state) => {
    if (state === "dark") {
      localStorage.setItem("theme", "light");
      body.removeAttribute("data-theme");
    } else if (state === "light") {
      localStorage.setItem("theme", "dark");
      body.setAttribute("data-theme", "dark");
    } else {
      initTheme(state);
    }
  };

  initTheme(localStorage.getItem("theme"));

  lamp.addEventListener("click", () =>
    toggleTheme(localStorage.getItem("theme"))
  );

  // Blur the content when the menu is open
  const cbox = document.getElementById("menu-trigger");

  cbox.addEventListener("change", function () {
    const area = document.querySelector(".wrapper");
    this.checked
      ? area.classList.add("blurry")
      : area.classList.remove("blurry");
  });

  //Reading progress bar
  let scrollPercent;
  let scrollListener = () => {
    let scrollTop = document.documentElement["scrollTop"] || document.body["scrollTop"];
    let scrollBottom = (document.documentElement["scrollHeight"] ||
      document.body["scrollHeight"]) - document.documentElement.clientHeight;
    scrollPercent = scrollTop / scrollBottom * 100 + "%";
    let progress = document.getElementById("_progress");
    progress && progress.style.setProperty("--scroll", scrollPercent);
  };
  document.addEventListener("scroll", scrollListener, { passive: true });

})();
