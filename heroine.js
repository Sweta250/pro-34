class Heroine{
    constructor(x,y,radius){
var options={
    density: 1,
    frictionAir: 0.005
}
this.x=x
this.y=y
this.radius=radius
this.body=Bodies.circle(this.x,this.y,this.radius,options)
World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("yellow");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();

    }
}