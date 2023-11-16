const songName = document.getElementById('song-name'); 
const song = document.getElementById('audio');
const play = document.getElementById('play');

songName.innerText = 'Jet To The West';
let isPlaying = false;

function playsong(){
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play();
    isPlaying = true;
}

function pausesong(){
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    song.pause();
    isPlaying = false;
}

function playPauseDecider(){
    if(isPlaying === true){
        pausesong();
    }
    else{
        playsong();
    }
}

play.addEventListener('click', playPauseDecider); 