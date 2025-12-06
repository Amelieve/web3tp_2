import Zdog from "zzz";

const illo = new Zdog.Illustration({
  element: "#ad",
  dragRotate: true,
});

new Zdog.Box({
  addTo: illo,
  width: 80,
  height: 80,
  depth: 80,
  stroke: false,
  color:" rgb(58, 78, 99)",
  leftFace:"rgba(110, 253, 255, 1)",
  rightFace:  "rgb(161, 167, 234)",
  topFace: "rgba(21, 64, 94, 1)",
  bottomFace:"rgba(99, 154, 193, 1)",
});

function animate() {
  illo.rotate.y += 0.03;
  illo.rotate.x += 0.03;
  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}

animate();
