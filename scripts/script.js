import createMajorScale from './music-scales.js';

let whiteNotes = document.querySelectorAll(".whiteNote");
let blackNotes = document.querySelectorAll(".blackNote");

function playNote(note){
  if(note[1] === '#'){
    note = note[0] + "_sharp";
  }
  let audio = new Audio('./audios/'+note+'.mp3');
  
  audio.play();
}

function playScale(scale){
  let index=0;
  scale.forEach((note, index) => {
    setTimeout(() => playNote(note), 1000 * (index+1));
  });
}

function addListener(key){
  key.addEventListener("click", event => {
    let note = event.target.id.toUpperCase();
    let scale = createMajorScale(note);
    playScale(scale);
  });
}

whiteNotes.forEach(key => addListener(key));
blackNotes.forEach(key => addListener(key));