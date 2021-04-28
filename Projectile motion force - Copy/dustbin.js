class dustbin {
    constructor(x, y,width,height) {
      var options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y,width,height,options);
      this.width=width;
      this.height=height;
    this.image=loadImage("files/bin.png");
      World.add(world, this.body);
    }
    display(){
      
      stroke("darkred");
      strokeWeight(5);
      fill("red");
      imageMode(CENTER);
      //rect(this.body.position.x, this.body.position.y, this.width, this.height);
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
  };
  