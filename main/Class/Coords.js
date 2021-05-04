class Coords {
    constructor(x, y) {
        if (! x instanceof Number || ! y instanceof Number) { return; }
        this.x = x;
        this.y = y;
    }
}