const searchInput = document.querySelector(".searchInput");
const searchButton = document.querySelector(".searchButton");

const games = {
  "grow a garden": "../Updates/Updates.html",
  "blox fruits": "../Updates/Updates.html",
  "blue lock rivals": "../Updates/Updates.html",
  fisch: "../Updates/Updates.html",
  doors: "../Updates/Updates.html",
  arsenal: "../Updates/Updates.html",
  "adopt me": "../Updates/Updates.html",
  "bee swarm simulator": "../Updates/Updates.html",
  brookhaven: "../Updates/Updates.html",
  evade: "../Updates/Updates.html",
  "dragon adventures": "../Updates/Updates.html",
  "anime vanguards": "../Updates/Updates.html",
  islands: "../Updates/Updates.html",
  "pet simulator": "../Updates/Updates.html",
  jailbreak: "../Updates/Updates.html",
  "car crushers 2": "../Updates/Updates.html",
  "dead rails": "../Updates/Updates.html",
  "creatures of sonaria": "../Updates/Updates.html",
};

function searchGame() {
  const value = searchInput.value.trim().toLowerCase();

  if (value === "") {
    alert("Please enter a Roblox game!");
    return;
  }

  if (games[value]) {
    window.location.href = games[value];
  } else {
    alert("Game not found in the R.U.S.H database.");
  }
}

searchButton.addEventListener("click", searchGame);

searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    searchGame();
  }
});
