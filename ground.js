class Ground{

    constructor(x, y, w, h)
{
    let options = {
        isStatic:true
      };
this.body = Bodies.rectangle(x,y,w,h,options);
this.w = w;
this.h = h;
World.add(world, this.body);
}
display(){
fill("blue")
rectMode(CENTER);
rect(this.body.position.x, this.body.positon.y,this.w,this.h);





}



}