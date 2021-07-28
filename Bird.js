class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage = loadImage("sprites/smoke.png");
    this.Traj = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

   if(this.body.velocity.x > 10 && this.body.position.x > 220){
    var position = [this.body.position.x,this.body.position.y];
    this.Traj.push(position);
   }
    
    for(var i = 0; i < this.Traj.length; i++){
      image(this.smokeimage, this.Traj[i][0], this.Traj[i][1])
    }
    super.display();
  }
}
