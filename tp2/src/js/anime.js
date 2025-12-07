import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.es.js";

/* mot affichés dans l'aléatoire */
const textes = [
  "Attaque!",
  "Défense!",
  "Vaisseau",
  "Ennemi",
  "Aide",
  "Au secours!",
  "Héro",
];

/* Code pour mot aléatoire */
const textElements1 = document.querySelectorAll(".t1");

textElements1.forEach((el) => {
  setInterval(() => {
    const randomText = textes[Math.floor(Math.random() * textes.length)];
    anime({
      targets: el,
       /* aléatoire */
      innerHTML: randomText,
      opacity: [0, 1],
       /* durée */
      duration: 50,
    });
  }, 800);
});

/* Code pour l'autre mot aléatoire */
const textElements2 = document.querySelectorAll(".t2");

textElements2.forEach((el) => {
  setInterval(() => {
    const randomText = textes[Math.floor(Math.random() * textes.length)];
    anime({
      targets: el,
      /* aléatoire */
      innerHTML: randomText,
      opacity: [0, 1],
      /* durée */
      duration: 50,
    });
  }, 800);
});
 /* Code pour chiffre aléatoire */
const numberElements = document.querySelectorAll(".n1");

numberElements.forEach((el) => {
  setInterval(() => {
    const value = Math.floor(Math.random() * 9999);

    anime({
      targets: el,
      innerHTML: value,
      round: 1,
      duration: 50,
    });
  }, 1000);
});

 /* Animation de la ligne du radar */
anime({
  targets: '.ligne',
  rotate: '360deg',    
  duration: 2000,      
  easing: 'linear',
  loop: true        
});

 /* Animation pour la cible */
document.head.insertAdjacentHTML(
  "beforeend",
  "<style>.iv i { display: inline-block; }</style>"
);

const icone = document.querySelector(".iv i");
icone.addEventListener("click", () => {
  anime({
    targets: icone,
     /* mouvement de la cible */
    translateX: [0, 24,15,-15],
    translateY: [0, 24,75,50],
     /* durée */
    duration: 600,
    easing: "easeInOutSine",
    direction: "alternate",
  });
});



