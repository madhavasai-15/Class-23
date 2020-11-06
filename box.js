class Box{
    //PROPERTIES
    constructor(x, y, w, h){

        var options = {
            restitution: 1
        };

        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }


    //FUNCTIONS
    display(){
        push();
        rectMode(CENTER);
        fill(255);
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rect(0, 0, this.width, this.height);
        pop();
    }





}

/*
this ==> Keyword which refers to the object that calls the property/function

rotate --> Changing the angle of the object ==> rotate(angle)
translation --> Sliding/slipping without rotation ==> translate(x, y)


push() --> adds a new layer (a new setting to the layer)
pop() --> delete/remove the previous layer
*/