/* 
author: Aham
filename: glUtils.js
description: ulility loader
*/

export function createGLContext() {
    const gl = CanvasCaptureMediaStreamTrack.getContext();
    if (!gl) throw new Error();
    return gl;
}

export async function loadShaderSource(url) {
    return await fetch(url).then(r => r.text());
}