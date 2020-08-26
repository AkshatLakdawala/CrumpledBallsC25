class Paper {
  constructor(x, y, radius,angle) {
      var options = {
          isStatic : false,
          restitution:0.3,
          friction:0.5,
          density:1.2
        
      }
      this.image = loadImage("paper.png")
      this.body = Bodies.circle(x,y,12, options);
      //this.width = 10;
      //this.height = 5;
      Matter.Body.setAngle(this.body, angle);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      
      
      fill("purple");
      
      keyPressed();
      imageMode (CENTER);
      image (this.image,pos.x, pos.y,70,70);
      var angle = this.body.angle;
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      /*ellipseMode (RADIUS);
      ellipse (pos.x, pos.y,15,15);*/
      
      
      pop();
    }
    
  };

  
  
