/* 
author: Aham
filename: entity.js
description: entity class
*/

export class Entity {
    constructor(mesh, material) {
        this.mesh = mesh;
        this.material = material;
        this.transform = new Transform();
    }

    update() {
         this.transform.updateMatrix();
    }

    draw(renderer, camera) {
        this.material.bind(this.transform.modelMatrix, camera);
        this.mesh.draw();
    }
}