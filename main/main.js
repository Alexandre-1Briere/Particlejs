particle = new Particle();

function setup() {
    canvasHelper = new CanvasHelper();
    canvasHelper.start();
    particle.addVelocity(1);
    canvasHelper.nextGrid();
}


function draw() {
    canvasHelper.nextGrid();
}

function keyPressed() {
    let total = 0
    console.log(canvasHelper.perf)
    for(let i = 0; i < canvasHelper.perf.length; i++) {
        total += canvasHelper.perf[i]
    }
    console.log(total / canvasHelper.perf.length)
}

function mouseDragged() {
        this.canvasHelper.click(Math.floor(mouseX / PARTICLE_SIZE), Math.floor(mouseY / PARTICLE_SIZE));
}
function getSize() {
    const width  = window.innerWidth || document.documentElement.clientWidth || 
    document.body.clientWidth;
    const height = window.innerHeight|| document.documentElement.clientHeight|| 
    document.body.clientHeight;

    return [width, height];
}