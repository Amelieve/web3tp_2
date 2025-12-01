import { VFX } from "vfx-js";

const vfx = new VFX();

const el = document.querySelector(".imgh");
vfx.add(el, {
  shader: "rgbShift",
  overflow: 30,
  uniforms: {
    colorShift: [0, 0.5, 1]
  }
});
