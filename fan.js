class Fan{
    constructor(x,y,w,h){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w
        this.h = h
        this.a = angle
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position
        Matter.Body.rotate(this.body,angle)

        push()
        translate(pos.x,pos.y)
        rotate(angle)
        fill("gray")
        rect(0,0,this.w,this.h);
        pop()
    }
}