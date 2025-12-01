/* 
author: Aham
filename: glUtils.js
description: ulility loader
*/

export function createGLContext(canvas) {
    const gl = canvas.getContext("webgl2");
    if (!gl) throw new Error("WebGL2 not supported");
    return gl;
}

export async function loadShaderSource(url) {
    return await fetch(url).then(r => r.text());
}