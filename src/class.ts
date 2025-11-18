class Animal{
    name:string
    species:string
    sound:string

    constructor(name:string,species:string,sound:string){
        this.name=name,
        this.species=species,
        this.sound=sound

    }

    makeSound(){
        console.log(`${this.name} is making sound : ${this.sound}`);
    }
}

const dog=new Animal('dogesh','dog',"ghew ghew")
const cat=new Animal('catish','cat','mew mews')

// console.log(dog.sound);

// console.log(cat.sound);

// cat.makeSound()
// dog.makeSound()


//! parameter properties

class Animal2{
    constructor(public name:string, public sound:string){

    }
}

const cat2=new Animal2('cat','mews mewa')
console.log(cat2.sound);
