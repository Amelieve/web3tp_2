import { VFX } from "vfx-js";

const vfx = new VFX();

const el = document.querySelector(".imgh");
vfx.add(el, {
  shader: "rgbShift",
  overflow: 50,
  uniforms: {
    colorShift: [0.3, 0.3, 1] 
  },
    animate:true
});
vfx.add(el, {
  shader: "glitch",
 uniforms: { amount: 0.05, angle: 0.2 , tint: [0, 0, 1]}
});

 vfx.add(el, {
    shader: "scanline",
    uniforms: { lineCount: 50, speed: 1,  color: [0, 0.5, 1] }
  });