let heroes ={
    name  :"samay_rihana",
    power : "tt",
    age   :  30,
    city : "noida",

    userPower : function(){
    console.log(`POWER :${this.power}`);
 }
}
let hero = ["kunal"  ,"hemnshi", "darsh", "samay"];
Array.prototype.canHe = function(){
    console.log("can he beat");
}

Object.prototype.darsh = function(){
    console.log("darsh can beat");
}


//heroes.canHe()   // array can't have access to object 
hero.canHe()       // array has the access to array...............ofcourse it can access its own method
heroes.darsh()     // object has the access to object...............ofcourse it can access its own method
hero.darsh()       //object has the access to array..............ofcourse it can access the method of object because of prototype chain