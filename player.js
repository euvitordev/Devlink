var player = document.getElementById("player");
let playBtn = document.getElementById("playbtn");

var playPause = function () {
  if (player.paused) {
    player.play();
  }
  else {
    player.pause();
  }
}

playBtn.addEventListener("click", playPause);

player.onplay =  function () {
    playBtn.classList.remove("fa-circle-play")
    playBtn.classList.add("fa-circle-pause")
}

player.onpause =  function () {
    playBtn.classList.add("fa-circle-play")
    playBtn.classList.remove("fa-circle-pause")
}