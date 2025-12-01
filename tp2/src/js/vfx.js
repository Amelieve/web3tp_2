import { VFX } from "vfx-js";

const vfx = new VFX();

const el = document.querySelector(".h");
vfx.add(el, {
  shader: "glitch",
  overflow: 30
});