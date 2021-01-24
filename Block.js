class Block {
    constructor(x,y,width, height){
        var options ={
          'friction': 1.2,
          'density':0.3,
          'restitution': 0.2
        }

        this.image = loadImage("tanker.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      fill("magenta");
      stroke("white");
      strokeWeight(5);
      rect(pos.x, pos.y, this.width, this.height);
  }
}