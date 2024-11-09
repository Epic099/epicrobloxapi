const hamBurger = document.querySelector(".toggle-btn");
hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

const adduniverse = document.getElementById("add_universe");
adduniverse.addEventListener("click", function () {
  const input = prompt("Enter universe id")
  console.log(getCookie('csrftoken'));
  if(!isNaN(input)){
    fetch('/api/add_universe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({universe_id: input, csrfmiddlewaretoken: getCookie('csrftoken')}),
    });
    window.location.href = `/universe/${input}`;
  }
});