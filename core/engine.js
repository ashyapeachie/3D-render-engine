/* 
author: Aham
filename: engine.js
description: program
*/

export class Engine {
    constructor(gl, vertexShader, fragmentShader) {
        this.gl = gl;
        this.program = gl.createProgram();

        gl.attachShader(this.program, vertexShader.shader);
        gl.attachShader(this.program, fragmentShader.shader);
        gl.linkProgram(this.program);

        if(!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
            throw new Error("Program link error: " + gl.getProgramInfoLog(this.program));
        }
    }

    // use

    // uniform 
}