class Ball {
    constructor(x,y,r){
        var options= {
            'restitution': 0.8,
            'density' : 1.2,
            'friction' : 0.5,
            'isStatic' : false

        }
        this.x = x;
        this.y= y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        

        World.add(world,this.body);
    }

    display(){
        var pos= this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        ellipse(0, 0, this.r,this.r)
        pop();
    }

}

