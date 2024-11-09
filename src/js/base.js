const hamBurger = document.querySelector(".toggle-btn");
hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

const adduniverse = document.getElementById("add_universe");
adduniverse.addEventListener("click", function () {
  const input = prompt("Enter universe id")
});