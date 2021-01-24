class Land{
    constructor(x,y,width,height){
        var options = 
        {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("green");
        stroke(0, 255, 0);
        strokeWeight(5);
        rect(pos.x, pos.y, this.width, this.height);
    }
};