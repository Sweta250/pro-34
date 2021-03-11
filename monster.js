class Monster{
    constructor(x,y,radius){
        var options={
            density:0.5,
            //friction:0.05
            frictionAir: 0.005
}
        
        this.x=x
        this.y=y
        this.radius=radius
        this.body=Bodies.circle(this.x,this.y,this.radius,options)
        World.add(world,this.body);

    }
    display()
    {
        var pos=this.body.position
        push()
        translate(pos.x,pos.y-100)
        //fill(255,0,255)
        fill("red");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        //imageMode(CENTER)

//image(this.image,0,0,this.r);
pop()    }
    

}