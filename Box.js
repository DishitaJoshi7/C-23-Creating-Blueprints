class Box{
    constructor(x,y,width,height){
        var op = {
            'restitution' : 0.8,
            'friction' : 0.3,
            'density' : 1.0,
        }
        this.object = Bodies.rectangle(x, y, width,height, op );
        World.add(world, this.object);

        this.w = width;
        this.h = height;
    }
    display(){
    var pos = this.object.position;
      var angle = this.object.angle;
      push()
      translate(pos.x,pos.y)
      angleMode(DEGREES)
      rotate(this.object.angle)
      rectMode(CENTER)
      rect(0,0,this.w,this.h)
      pop()
    }


}

