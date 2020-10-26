class Block {
    constructor(x, y, width, height, angle) {
      var options = {
          isState: false,
          friction : 0.6
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      push();
      translate(pos.x, pos.y);
      rect(0,0, this.width, this.height);
      pop();
    }
  };
  