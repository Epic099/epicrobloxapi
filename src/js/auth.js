const input = prompt("Enter API Key");
const encodedkey = input.replace(/\+/gi, '%2B');

const urlParams = new URLSearchParams(window.location.search);
const universe_id = urlParams.get('id');

window.location.href = `/universe/${universe_id}?api_key=${encodedkey}`;