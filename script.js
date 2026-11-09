/* ---------- Sidebar menu ---------- */
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

function openMenu() {
  sidebar.classList.add("open");
  overlay.classList.add("show");
}

function closeMenu() {
  sidebar.classList.remove("open");
  overlay.classList.remove("show");
}

document.getElementById("menu-btn").addEventListener("click", openMenu);
document.getElementById("close-btn").addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);   // click outside the menu to close it

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});
