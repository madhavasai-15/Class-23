class Ground{

    constructor(x, y, w, h){
        var body_options = {isStatic: true};
        this.body = Bodies.rectangle(x, y, w, h, body_options);
        World.add(world, this.body);
        this.width = w;
        this.height = h;
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(200);
        rect(pos.x, pos.y, this.width, this.height);
    }
}