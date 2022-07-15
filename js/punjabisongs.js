//testing
console.log("!!!!!!!!Hello and Welcome to Spotify!!!!!!!!")
console.log("Listen to your favorite songs")

//initializing variables
let sonIndex = 0
let audioElement = new Audio("../musics/Punjabi/1.mp3")
let masterPlay = document.getElementById("masterPlay")
let progressBar = document.getElementById("progressBar")
let playingGif = document.getElementById("playingGif")
let songName = document.getElementById('songName');

let songs = [
    { songName: "Badnam Munda - Singga", filePath: "../musics/Punjabi/1.mp3" },
    { songName: "Dil Da Showroom - Parmish Verma", filePath: "../musics/Punjabi/2.mp3" },
    { songName: "Ronna Hi Si - Ranjit Bawa", filePath: "../musics/Punjabi/3.mp3" },
    { songName: "Sira - Dilpreet Dhillon", filePath: "../musics/Punjabi/4.mp3" },
    { songName: "Teri Life Meri Life - R Nait", filePath: "../musics/Punjabi/5.mp3" },
    { songName: "Too Much - Garry Sandhu", filePath: "../musics/Punjabi/6.mp3" },
    { songName: "Unforgettable - Diljit Dosanjh", filePath: "../musics/Punjabi/7.mp3" },
    { songName: "Ve Dhola - Prabh Gill", filePath: "../musics/Punjabi/8.mp3" },
    { songName: "Wah Ji Waah - Gurnazar", filePath: "../musics/Punjabi/9.mp3" },
    { songName: "We Rollin - Shubh", filePath: "../musics/Punjabi/10.mp3" },
]


//handle play and pause
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play()
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        playingGif.style.opacity = 1

    } else {
        audioElement.pause()
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        playingGif.style.opacity = 0
    }

})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle')
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `../musics/Punjabi/${songIndex+1}.mp3`;
        songName.innerHTML = songs[songIndex].songName
        audioElement.currentTime = 0;
        audioElement.play();
        playingGif.style.opacity = 1
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
    })
})

//event listening
audioElement.addEventListener("timeupdate", () => {
    //update progressBar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    progressBar.value = progress
})

progressBar.addEventListener('change', () => {
    audioElement.currentTime = progressBar.value * audioElement.duration / 100
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex == 9) {
        songIndex = 0
    } else {
        songIndex += 1;
    }
    songName.innerHTML = songs[songIndex].songName
    audioElement.src = `../musics/Punjabi/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    playingGif.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex == 0) {
        songIndex = 9
    } else {
        songIndex -= 1;
    }
    songName.innerHTML = songs[songIndex].songName
    audioElement.src = `../musics/Punjabi/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})