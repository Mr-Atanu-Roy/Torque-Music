//testing
console.log("!!!!!!!!Hello and Welcome to Spotify!!!!!!!!")
console.log("Listen to your favorite songs")

//initializing variables
let sonIndex = 0
let audioElement = new Audio("../musics/Bollywood/1.mp3")
let masterPlay = document.getElementById("masterPlay")
let progressBar = document.getElementById("progressBar")
let playingGif = document.getElementById("playingGif")
let songName = document.getElementById('songName');

let songs = [
    { songName: "Barbaadiyan - Shiddat", filePath: "../musics/Bollywood/1.mp3" },
    { songName: "Jaihind Ki Senaa - Shershaah", filePath: "../musics/Bollywood/2.mp3" },
    { songName: "Kamli - Hum Do Hamare Do", filePath: "../musics/Bollywood/3.mp3" },
    { songName: "Kheench Te Nach - Chandigarh Kare Aashiqui", filePath: "../musics/Bollywood/4.mp3" },
    { songName: "Khoya Paaya - Dhamaka", filePath: "../musics/Bollywood/5.mp3" },
    { songName: "Maafi - Chandigarh Kare Aashiqui", filePath: "../musics/Bollywood/6.mp3" },
    { songName: "Mann Bharryaa 2 - Shershaah", filePath: "../musics/Bollywood/7.mp3" },
    { songName: "Najaa - Sooryavanshi", filePath: "../musics/Bollywood/8.mp3" },
    { songName: "Rait Zara Si - Atrangi Re", filePath: "../musics/Bollywood/9.mp3" },
    { songName: "Ranjha - Shershaah", filePath: "../musics/Bollywood/10.mp3" },
    { songName: "Shiddat - Title Song", filePath: "../musics/Bollywood/11.mp3" },
    { songName: "Tip Tip - Sooryavanshi", filePath: "../musics/Bollywood/12.mp3" },
    { songName: "Aao Kabhi Haveli Pe - Stree", filePath: "../musics/Bollywood/13.mp3" },
    { songName: "Akh Lad Jave - Loveratri", filePath: "../musics/Bollywood/14.mp3" },
    { songName: "Baarish Ban Jana", filePath: "../musics/Bollywood/15.mp3" },
    { songName: "Bansuri - Hum Do Hamare Do", filePath: "../musics/Bollywood/16.mp3" },
    { songName: "Barsaat - Armaan Malik", filePath: "../musics/Bollywood/17.mp3" },
    { songName: "Chogada - Loveratri", filePath: "../musics/Bollywood/18.mp3" },
    { songName: "Dekhte Dekhte - Batti Gul Meter Chalu", filePath: "../musics/Bollywood/19.mp3" },
    { songName: "Dil Mein Ho Tum - Cheat India", filePath: "../musics/Bollywood/20.mp3" },
    { songName: "Jaan Nisaar - Kedarnath", filePath: "../musics/Bollywood/21.mp3" },
    { songName: "Kamariya - Stree", filePath: "../musics/Bollywood/22.mp3" },
    { songName: "Mere Naam Tu - Zero", filePath: "../musics/Bollywood/23.mp3" },
    { songName: "Namo Namo - Kedarnath", filePath: "../musics/Bollywood/24.mp3" },
    { songName: "Pal - Jalebi", filePath: "../musics/Bollywood/25.mp3" },
    { songName: "Sweetheart - Kedarnath", filePath: "../musics/Bollywood/26.mp3" },
    { songName: "Tum Se - Jalebi", filePath: "../musics/Bollywood/27.mp3" },
    { songName: "Soch Liya - Radhe Shyam", filePath: "../musics/Bollywood/28.mp3" },
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
        audioElement.src = `../musics/Bollywood/${songIndex+1}.mp3`;
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
    if (songIndex == 27) {
        songIndex = 0
    } else {
        songIndex += 1;
    }
    songName.innerHTML = songs[songIndex].songName
    audioElement.src = `../musics/Bollywood/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    playingGif.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex == 0) {
        songIndex = 27
    } else {
        songIndex -= 1;
    }
    songName.innerHTML = songs[songIndex].songName
    audioElement.src = `../musics/Bollywood/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})