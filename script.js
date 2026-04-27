const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
// 花瓣生成
for (let i = 0; i < 20; i++) {
  const petal = document.createElement("div");
  petal.className = "petal";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = 5 + Math.random() * 5 + "s";
  document.body.appendChild(petal);
}
