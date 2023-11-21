const songName = document.getElementById('song-name'); 
const bandName = document.getElementById('band-name');
const song = document.getElementById('audio');
const cover = document.getElementById('cover');
const play = document.getElementById('play');
const next = document.getElementById('next');
const previous = document.getElementById('previous');

const JetToTheWest = {
    songName : 'Jet To The West',
    artist : 'Lil Mosey',
    file : 'Jet_To_The_West'
};

const LuxoNoMorro = {
    songName : 'LUXO NO MORRO',
    artist : 'Veigh',
    file : 'Luxo_No_Morro'
};

const LouisV = {
    songName : 'louis v, menina linda ',
    artist : 'Sidoka',
    file : 'Louis_V'
};

const Planos = {
    songName : 'Planos ft. Nate Shawty!',
    artist : 'Pedrwthekid',
    file : 'planos'
};

const Sommelier = {
    songName : 'Sommelier',
    artist : 'Sidoka',
    file : 'sommelier'
};

const Bando = {
    songName : 'Bando',
    artist : 'Vinnte$',
    file : 'bando'
};

let isPlaying = false;
const playlist = [JetToTheWest, LuxoNoMorro, LouisV, Planos, Sommelier, Bando];
let index = 0;


function playsong(){
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play();
    isPlaying = true;
}

function pausesong(){
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    song.pause();
    isPlaying = false;
}

function playPauseDecider(){
    if(isPlaying === true){
        pausesong();
    }
    else {
        playsong();
    }
}

function initializeSong(){
    cover.src = `images/${playlist[index].file}.jpeg`;
    song.src = `songs/${playlist[index].file}.mp3`;
    songName.innerText = playlist[index].songName;
    bandName.innerText = playlist[index].artist;
}

initializeSong();

play.addEventListener('click', playPauseDecider); 