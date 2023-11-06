const songName = document.getElementById('song-name'); 
const song = document.getElementById('audio');
const play = document.getElementById('play');

songName.innerText = 'Jet To The West';

function playsong(){
    song.play();
}