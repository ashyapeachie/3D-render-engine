/* 
author: Aham
filename: mesh.js
description: mesh class
*/

export class Mesh {
    constructor(gl, vertices, normals, indices) {
        this.gl = this.gl;
        this.vao = this.gl.createVertexArray();
        this.gl.bindVertexArray(this.vao);

        /* buffer statements */
        // this.nbo = gl.createBuffer();
        // gl.bindBuffer(gl.ARRAY_BUFFER, this.nbo);
        // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
        // gl.enableVertexAttribArray(1);
        // gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 0, 0);
        // normal

        // this.vbo = gl.createBuffer();
        // gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo);
        // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        // gl.enableVertexAttribArray(0);
        // gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);
        // vertex

        // this.ibo = gl.createBuffer();
        // gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ibo);
        // gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
        // index

        // this.count = indices.length;

        // gl.bindVertexArray(null);
    }

    draw() {
        const gl = this.gl;
        gl.bindVertexArray(this.vao);
        gl.drawElements(gl.TRIANGLES, this.count, gl.UNSIGNED_SHORT, 0);
    }
}