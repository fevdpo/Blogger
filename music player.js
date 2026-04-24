<script>
let playlist = [
"https://www.youtube.com/embed/JSFG-IE8n_c",
"https://www.youtube.com/embed/2V6lvCUPT8I",
"https://www.youtube.com/embed/CgCVZdcKcqY",
"https://www.youtube.com/embed/yebNIHKAC4A",
"https://www.youtube.com/embed/5f5Kt8KSxI0",
"https://www.youtube.com/embed/j7_lSP8Vc3o",
"https://www.youtube.com/embed/9bZkp7q19f0",
"https://www.youtube.com/embed/ASO_zypdnsQ",
"https://www.youtube.com/embed/FrG4TEcSuRg",
"https://www.youtube.com/embed/8dJyRm2jJ-U",
"https://www.youtube.com/embed/phXoKJqo670",
"https://www.youtube.com/embed/MWsuHKUgZ98",
"https://www.youtube.com/embed/ALZHF5UqnU4",
"https://www.youtube.com/embed/kffacxfA7G4",
"https://www.youtube.com/embed/_Z5-P9v3F8w",
"https://www.youtube.com/embed/CHVhwcOg6y8",
"https://www.youtube.com/embed/uS_y_65CcpA",
"https://www.youtube.com/embed/bpOR_HuHRNs",
"https://www.youtube.com/embed/6TpyRE_juyA",
"https://www.youtube.com/embed/qVqFuokjRMc",
"https://www.youtube.com/embed/evJ6gX1lp2o",
"https://www.youtube.com/embed/jD97hNDiyvI",
"https://www.youtube.com/embed/pDBufJcvkDU",
"https://www.youtube.com/embed/wfNDK_WH2_Q",
"https://www.youtube.com/embed/wKVJi-FLvak",
"https://www.youtube.com/embed/xREK6gZxYLQ",
"https://www.youtube.com/embed/I4rtcJnRd6s"
];

let current = 0;

function loadTrack(index) {
  current = index;
  document.getElementById("fevd-music-frame").src = playlist[current] + "?autoplay=1";
  highlight();
}

function selectTrack(index) {
  loadTrack(index);
}

function nextTrack() {
  current = (current + 1) % playlist.length;
  loadTrack(current);
}

function prevTrack() {
  current = (current - 1 + playlist.length) % playlist.length;
  loadTrack(current);
}

function highlight() {
  let items = document.querySelectorAll(".fevd-playlist li");
  items.forEach(i => i.classList.remove("active"));
  items[current].classList.add("active");
}

/* AUTO NEXT (3 menit default) */
setInterval(() => {
  nextTrack();
}, 180000);
</script>
