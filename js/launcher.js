class Launcher{
    constructor(bodyA,bodyB){
      var options = {
          bodyA : bodyA,
          bodyB : bodyB,
          stiffness: 0.7,
          length : 5
      }
      this.boy = loadImage('images/boy.png');
      this.bodyB = bodyB;
      this.launcher = Constraint.create(options);
      World.add(world, this.launcher);
    }

    fly(){
      this.launcher.bodyA = null;
    }
    
    display(){
       image(this.boy, 500, 100);
    }
    
}