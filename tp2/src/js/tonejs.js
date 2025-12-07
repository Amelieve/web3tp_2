import * as Tone from "tone.js";

const synth = new Tone.Synth({
  oscillator: { type: "sawtooth" },
  envelope: { attack: 0.1, decay: 0.2, sustain: 0.3, release: 0.8 }
}).toDestination();
/* Mélodie inspirée de Star Wars */
const melody = [
  ["C4", 0],  
  ["G3", 0.5],
  ["F3", 1],
  ["E3", 1.5],
  ["D3", 2],
  ["C3", 3],
];

const bouton = document.querySelector(".m1"); 

bouton.addEventListener("click", async () => {
  /* Problèmes durant l'installation alors console.log pour tester le code */
  console.log("CLICK DÉTECTÉ");
  /*Doit avoir une attente pour le code sinon la musique ne se lance pas à cause des réglages du site */
  await Tone.start();
  /* Problèmes durant l'installation alors console.log pour tester le code */
  console.log("Tone démarré");

  const now = Tone.now();

  melody.forEach(([note, time]) => {
    synth.triggerAttackRelease(note, "8n", now + time);
  });
});
