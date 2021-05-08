class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY = offsetY
        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:offsetX,y:offsetY}
        
        }
        this.rope=Matter.Constraint.create(options)
        World.add(world,this.rope)
    }

    display(){
        var point1=this.rope.bodyA.position
        var point2=this.rope.bodyB.position
        push()
        strokeWeight(2)
        stroke("white")
        line(point1.x,point1.y,point2.x+this.offsetX,point2.y+this.offsetY)
        pop()
    }
}