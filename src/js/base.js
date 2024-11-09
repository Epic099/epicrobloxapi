const hamBurger = document.querySelector(".toggle-btn");
hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function get_universes() {
  fetch("api/get_universes", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": getCookie("csrftoken"),
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const universe_list = document.querySelector(".sidebar-nav");
      universe_list.innerHTML = "";
      data.forEach((universe) => {
        universe_list.innerHTML += `<li class="sidebar-item"><a href="/create" class="sidebar-link"><i class="lni lni-plus sidebar-image"></i><span>${universe["universe_id"]}</span></a></li>`;
      });
    });
}

get_universes()

const adduniverse = document.getElementById("add_universe");
adduniverse.addEventListener("click", function () {
  const input = prompt("Enter universe id")
  const key = prompt("Input Api-Key");
  if(!isNaN(input) && key != null){
    fetch(`api/add_universe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "X-CSRFToken": getCookie('csrftoken'),
      },
      body: JSON.stringify({universe_id: input, api_key: key}),
    });
  }
}); 