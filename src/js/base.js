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
  const key = prompt("Input Api-Key");
  if(!isNaN(input) && key != null){
    const encodedKey = key.replace(/\+/gi, '%2B');
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