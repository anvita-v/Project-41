class Drops{
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution:0.1,
            isStatic : false

        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x,this.y,3);
        this.radius = 3;
        World.add(world,this.body);
    }
    updateY(){     
        if(this.body.position.y > height){

            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
        }
    }

    showDrops(){
        fill("blue")
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }

}