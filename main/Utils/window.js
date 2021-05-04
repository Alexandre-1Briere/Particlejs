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

    update() {
        for(let x = this.grid.length - 2; x > 0; x--) {
            for(let y = this.grid[x].length - 2; y > 0; y--) {
                if (this.grid[x][y].id === PARTICLE_ID.VOID) continue;
                if (this.grid[x][y + 1].id === PARTICLE_ID.VOID){
                    this.grid[x][y+1].changeType(PARTICLE_ID.SAND);
                    this.grid[x][y].changeType(PARTICLE_ID.VOID);
                } else if (this.grid[x + 1][y + 1].id === PARTICLE_ID.VOID){
                    this.grid[x + 1][y+1].changeType(PARTICLE_ID.SAND);
                    this.grid[x][y].changeType(PARTICLE_ID.VOID);
                } else if (this.grid[x - 1][y + 1].id === PARTICLE_ID.VOID){
                    this.grid[x - 1][y+1].changeType(PARTICLE_ID.SAND);
                    this.grid[x][y].changeType(PARTICLE_ID.VOID);
                }
            }
        }
    }

    click(xpos, ypos) {
        const RADIUS_SQUARED = RADIUS * RADIUS
        for(let x = xpos-RADIUS; x <= xpos+RADIUS; x++) {     
            for(let y = ypos-RADIUS; y <= ypos+RADIUS; y++){
                if(Math.random() < FREQUENCY ){
                    if((x - xpos)*(x - xpos) + (y - ypos)*(y - ypos) <= RADIUS_SQUARED){
                        if(!(x < 0 || x > this.width/PARTICLE_SIZE)){
                            if(!(y < 0 || y > this.width/PARTICLE_SIZE)){
                                this.grid[x][y].changeType(PARTICLE_ID.SAND);
                            }
                        }    
                    }
                }
            }
        } 
    }
}