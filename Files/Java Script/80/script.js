// let obj = {
//     a:1,
//     b:"Harry"
// }

// console.log(obj)

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit._proto_ = animal; 


class Animal {
    
    constructor(name){

        this.name=name
        console.log("Object is created...")
    }

    eats(){
        console.log("I am eating")
    }
    jumps (){
        console.log("I am Jumping ")
    }

}

class Lion extends Animal{
    constructor(name){
        super(name)
        this.name=name
        console.log("Object is created...He is loin ")
    }

 eats(){
    super.eats()
        console.log("I am drinking")
    }


 } 


let a = new Animal("Motii");
console.log(a)



let l = new Lion ("Donkey ");
console.log(l)