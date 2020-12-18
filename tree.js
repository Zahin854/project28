class Tree{
  constructor(x, y) {
      var options = {
        isStatic:true
         //'restitution':0.8,
         // 'friction':1.0,
         // 'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 450, 10, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("images/tree.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y+10);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, -300, 450, 600);
      pop();
    }
}