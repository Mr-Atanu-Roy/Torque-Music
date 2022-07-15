//testing
console.log("!!!!!!!!Hello and Welcome to Spotify!!!!!!!!")
console.log("Listen to your favorite songs")

//menu control
// menu = document.getElementsByClassName('menu')
// hamburger = document.getElementById('hamburger')
// hamburger.addEventListener('click', () => {
//     if (menu.style.left != '0px') {
//         menu.style.left = '0px'
//     } else {
//         menu.style.left = '-180px'
//     }
// })


//initializing variables
let sonIndex = 0
let audioElement = new Audio("../musics/1.mp3")
let masterPlay = document.getElementById("masterPlay")
let progressBar = document.getElementById("progressBar")
let playingGif = document.getElementById("playingGif")
let songName = document.getElementById('songName');

let songs = [
    { songName: "Barbaadiyan - Shiddat", filePath: "../musics/1.mp3" },
    { songName: "Unforgettable - Diljit Dosanjh", filePath: "../musics/2.mp3" },
    { songName: "Birth Of A Hero", filePath: "../musics/3.mp3" },
    { songName: "Khoya Paaya - Dhamaka", filePath: "../musics/4.mp3" },
    { songName: "Jaihind Ki Senaa - Shershaah", filePath: "../musics/5.mp3" },
    { songName: "Dil Da Showroom - Parmish Verma", filePath: "../musics/6.mp3" },
    { songName: "Liquid Time", filePath: "../musics/7.mp3" },
    { songName: "Rait Zara Si - Atrangi Re", filePath: "../musics/8.mp3" },
    { songName: "Rait Zara Si - Atrangi Re", filePath: "../musics/9.mp3" },
    { songName: "Angel's Dream", filePath: "../musics/10.mp3" },
    { songName: "Silly Chicken.", filePath: "../musics/11.mp3" },
    { songName: "Tip Tip - Sooryavanshi", filePath: "../musics/12.mp3" },
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
        audioElement.src = `../musics/${songIndex+1}.mp3`;
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
    if (songIndex == 11) {
        songIndex = 0
    } else {
        songIndex += 1;
    }
    songName.innerHTML = songs[songIndex].songName
    audioElement.src = `../musics/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex == 0) {
        songIndex = 11
    } else {
        songIndex -= 1;
    }
    songName.innerHTML = songs[songIndex].songName
    audioElement.src = `../musics/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})