class Smoke {
     constructor(x, y, width, height, angle) {
            var options = {
                isStatic : true,
                'restitution':0,
                'friction':1.0,
                'density':1.0
            }
            this.body = Bodies.rectangle(x, y, width, height, options);
            this.width = width;
            this.height = height;
            this.image = loadImage("smoke.png");
            World.add(world, this.body);
          }
          display(){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            fill("blue");
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop();

            
          }

          for (var i = 40; i<=width; i=i+50;){
            smoke1.push(new Smoke(j,50));
          }
        
      