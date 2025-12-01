import anime from "https://esm.sh/animejs";

const chiffreElements = document.querySelectorAll(".bi");

chiffreElements.forEach((el) => {
  setInterval(() => {
    const randomValue = Math.floor(Math.random() * 10000);
    anime({
      targets: el,
      innerHTML: randomValue,
      duration: 400,     
      easing: "linear"
    });
  }, 800)
});