
function openModal(id) {
    document.getElementById(id).classList.add("active");
  }

  function closeModal(id) {
    document.getElementById(id).classList.remove("active");
  }

  // Dark Mode Toggle Logic
  const iconToggle = document.getElementById("darkModeIcon");
  iconToggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    iconToggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("darkMode", isDark);
  });

  // On load: set theme
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
    iconToggle.textContent = "☀️";
  }

  // Menu toggle
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("navMenu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });