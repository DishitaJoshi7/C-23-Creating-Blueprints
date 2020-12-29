class Ground{
    constructor(x,y,w,h){

        this.ground = Bodies.rectangle(x,y,w,h , { isStatic : true});
        World.add(world, this.ground);

        this.w = w;
        this.h = h;
    }

    show(){
        var p = this.ground.position;
        rectMode(CENTER);
        fill('yellow');
        rect(p.x, p.y , this.w, this.h );
    }
}