class CanvasHelper{
    constructor() {
        this.width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        this.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        this.grid = []
        for(let x = 0; x < this.width/PARTICLE_SIZE; x++) {
            this.grid.push([])
            for(let y = 0; y < this.height/PARTICLE_SIZE; y++)
                this.grid[x].push(
                    new Particle(
                        PARTICLE_ID.VOID, 
                        new Coords(x, y)
                    )
                )
        }
        this.perf = [];
    }
    start() {
        createCanvas(this.width, this.height);
        noStroke()
    }

    nextGrid() {
        background(0);
        for(let x = 0; x < this.width/PARTICLE_SIZE; x++) {
            for(let y = 0; y < this.height/PARTICLE_SIZE; y++) {
                if (this.grid[x][y].id === PARTICLE_ID.VOID) continue;
                this.grid[x][y].draw()
            }
        }
    }

    click(xpos, ypos) {
        const t0 = performance.now()
        const RADIUS_SQUARED = RADIUS * RADIUS
        for(let x = xpos-RADIUS; x <= xpos+RADIUS; x++) {     
            for(let y = ypos-RADIUS; y <= ypos+RADIUS; y++){
                if(Math.random() < FREQUENCY && (x - xpos)*(x - xpos) + (y - ypos)*(y - ypos) <= RADIUS_SQUARED){
                    if(!(x < 0 || x > this.width/PARTICLE_SIZE)){
                        if(!(y < 0 || y > this.width/PARTICLE_SIZE)){
                            this.grid[x][y].changeType(PARTICLE_ID.SAND);
                        }
                    }    
                }
            }
        }
        const t1 = performance.now()
        this.perf.push(t1-t0);
    }
}