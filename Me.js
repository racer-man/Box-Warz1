class Me {
    constructor(x,y,width, height){
        var options ={
          isStatic : false,
          'frictionAir': 0.2,
          'density':0.3
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
      fill(255, 230, 0);
      stroke(255, 0, 0);
      strokeWeight(4);
      rect(pos.x, pos.y, this.width, this.height);
  }
}