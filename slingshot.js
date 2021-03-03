class slingshot{
    constructor(bodyA,bodyB){

        var slingshot1={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10
        }
        
        this.slingshot=Constraint.create(slingshot1);
        World.add(world,this.slingshot);

    }
    display(){
 var pointA=this.slingshot.bodyA.position;
 var pointB=this.slingshot.bodyA.position;

 line(pointA.x,pointA.y,pointB.x,pointB.y);
}

}