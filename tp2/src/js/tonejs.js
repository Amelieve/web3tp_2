import * as Tone from "tone.js";


const synth = new Tone.Synth({
  oscillator: { type: "sawtooth" },
  envelope: { attack: 0.1, decay: 0.2, sustain: 0.3, release: 0.8 }
}).toDestination();


const melody = [
  ["C4", 0],  
  ["G3", 0.5],
  ["F3", 1],
  ["E3", 1.5],
  ["D3", 2],
  ["C3", 3],
];

document.getElementById(".m1").addEventListener("click", async () => {
  console.log("CLICK DÉTECTÉ");

  
  await Tone.start();
  console.log("Tone démarré");

  const now = Tone.now();

  melody.forEach(([note, time]) => {
    synth.triggerAttackRelease(note, "8n", now + time);
  });
});
