class Demon{
    constructor(x,y,width, height){
        var options ={
          'frictionAir': 1.2,
          'density':0.3
        }

        this.image = loadImage("demon.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      fill("brown");
      stroke(0);
      strokeWeight(8);
      rect(pos.x, pos.y, this.width, this.height);
  }
}