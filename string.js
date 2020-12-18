class String{
    constructor(bodyA,pointB)
    {
        var option= {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:1
        }
        this.pointB=pointB;
        this.string= Constraint.create(option)
        World.add(world,this.string) 
    }
    display(){
        if(this.string.bodyA){
        var pointA=this.string.bodyA.position
        var pointB=this.pointB
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }
    fly(){
        this.string.bodyA=null
    }
    attach(body){
this.string.bodyA=body
    }
}
