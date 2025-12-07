import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.es.js";


const textes = [
  "Attaque!",
  "Défense!",
  "Vaisseau",
  "Ennemi",
  "Aide",
  "Au secours!",
  "Héro",
];


const textElements1 = document.querySelectorAll(".t1");

textElements1.forEach((el) => {
  setInterval(() => {
    const randomText = textes[Math.floor(Math.random() * textes.length)];
    anime({
      targets: el,
      innerHTML: randomText,
      opacity: [0, 1],
      duration: 50,
    });
  }, 800);
});


const textElements2 = document.querySelectorAll(".t2");

textElements2.forEach((el) => {
  setInterval(() => {
    const randomText = textes[Math.floor(Math.random() * textes.length)];
    anime({
      targets: el,
      innerHTML: randomText,
      opacity: [0, 1],
      duration: 50,
    });
  }, 800);
});

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


anime({
  targets: '.ligne',
  rotate: '360deg',    
  duration: 2000,      
  easing: 'linear',
  loop: true        
});


document.head.insertAdjacentHTML(
  "beforeend",
  "<style>.iv i { display: inline-block; }</style>"
);

const icone = document.querySelector(".iv i");
icone.addEventListener("click", () => {
  anime({
    targets: icone,
    translateX: [0, 24,15,-15],
    translateY: [0, 24,75,50],
    duration: 600,
    easing: "easeInOutSine",
    direction: "alternate",
  });
});



