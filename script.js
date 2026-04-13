const introPage = document.getElementById("intro-page");
const songPage = document.getElementById("song-page");
const friendNameInput = document.getElementById("friendName");
const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");
const greeting = document.getElementById("greeting");
const nameInLyrics = document.getElementById("nameInLyrics");
const songPlayer = document.getElementById("songPlayer");

function showSongPage(name) {
  const safeName = name.trim() || "Best Friend";
  greeting.textContent = `Happy day, ${safeName}!`;
  nameInLyrics.textContent = safeName;
  introPage.classList.add("hidden");
  songPage.classList.remove("hidden");
  setTimeout(() => {
    songPlayer.play().catch(() => {
      // Autoplay may be blocked, but the player is still available.
    });
  }, 150);
}

startButton.addEventListener("click", () => {
  showSongPage(friendNameInput.value);
});

friendNameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    showSongPage(friendNameInput.value);
  }
});

restartButton.addEventListener("click", () => {
  friendNameInput.value = "";
  songPage.classList.add("hidden");
  introPage.classList.remove("hidden");
  songPlayer.pause();
  songPlayer.currentTime = 0;
  friendNameInput.focus();
});
