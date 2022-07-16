let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let gif = document.getElementById('gif');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName("songItem"));
let masterSongName = "Warriya-Mortals";
let songItemPlay = document.getElementsByClassName("songItemPlay")
let songs = [{
    songName: "Warriya-Mortals",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg"
  },
  {
    songName: "Cielo-Huma-huma",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg"
  },
  {
    songName: "Deaf KEV",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg"
  },
  {
    songName: "Differnet Heaven and Ehide",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg"
  },
  {
    songName: "janji",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg"
  },
  {
    songName: "Rabba-Salam-e-Ishq",
    filePath: "songs/6.mp3",
    coverPath: "covers/6.jpg"
  },
  {
    songName: "sakhiyaan - Salam-e-Ishq",
    filePath: "songs/7.mp3",
    coverPath: "covers/7.jpg"
  },
  {
    songName: "bhula dena Salam-e-Ishq",
    filePath: "songs/8.mp3",
    coverPath: "covers/8.jpg"
  },
  {
    songName: "tumhari kasam Salam-e-Ishq",
    filePath: "songs/9.mp3",
    coverPath: "covers/9.jpg"
  },
  {
    songName: "na jaana Salam-e-Ishq",
    filePath: "songs/10.mp3",
    coverPath: "covers/10.jpg"
  },
];

function makeAllPlay() {
  for (var i = 0; i < songItemPlay.length; i++) {
    songItemPlay[i].classList.remove("fa-pause-circle");
    songItemPlay[i].classList.add("fa-circle-play");
  }

}

songItems.forEach((element, i) => {
  // console.log(songs[i].coverPath);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

for (var i = 0; i < songItemPlay.length; i++)
  songItemPlay[i].addEventListener('click', (e) => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
      makeAllPlay();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = "songs/" + (songIndex + 1) + ".mp3";
      audioElement.currentTime = 0;
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-pause-circle');
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.play();
      gif.style.opacity = 1;
      songItemPlay[songIndex].classList.remove("fa-circle-play");
      songItemPlay[songIndex].classList.add("fa-pause-circle");
    }
    else {
      audioElement.pause();
      masterPlay.classList.add('fa-circle-play');
      masterPlay.classList.remove('fa-pause-circle');
      gif.style.opacity = 0;
      songItemPlay[songIndex].classList.add("fa-circle-play");
      songItemPlay[songIndex].classList.remove("fa-pause-circle");
    }
  })

masterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
    songItemPlay[songIndex].classList.remove("fa-circle-play");
    songItemPlay[songIndex].classList.add("fa-pause-circle");
  } else {
    audioElement.pause();
    masterPlay.classList.add('fa-circle-play');
    masterPlay.classList.remove('fa-pause-circle');
    gif.style.opacity = 0;
    songItemPlay[songIndex].classList.add("fa-circle-play");
    songItemPlay[songIndex].classList.remove("fa-pause-circle");
  }
});
audioElement.addEventListener('timeupdate', () => {

  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', () => {
  audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else songIndex += 1;

  audioElement.src = "songs/" + (songIndex + 1) + ".mp3";
  audioElement.currentTime = 0;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-pause-circle');
})

document.getElementById("previous").addEventListener("click", () => {
  console.log("Hey");
  if (songIndex <= 0) {
    songIndex = 9;
  } else {
    songIndex -= 1;
  }

  audioElement.src = "songs/" + (songIndex + 1) + ".mp3";
  audioElement.currentTime = 0;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-pause-circle');
  console.log(masterPlay.classList);
})
