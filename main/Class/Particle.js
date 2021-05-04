class Particle{
    constructor(id = 0, position = new Coords(0,0)) {
        this.gameObject = new GameObject();
        this.gameObject.position = position;
        this.color = PARTICLE_COLOR[id];
        this.id = id;
    }
    addVelocity(x) {
        this.gameObject.velocity = new Coords(x,x);
    }
    draw() {
        noFill();
        fill(this.color[0], this.color[1], this.color[2]) 
        rect(this.gameObject.position.x * PARTICLE_SIZE, 
             this.gameObject.position.y * PARTICLE_SIZE,
             PARTICLE_SIZE,
             PARTICLE_SIZE);
    }
    update() {
        this.gameObject.position.x += this.gameObject.velocity.x;
        this.gameObject.position.y += this.gameObject.velocity.y;
    }
    changeType(id) {
        this.id = id;
        this.color = PARTICLE_COLOR[id]
    }
}