class Person{

getSleep(){
    console.log(`I am a normal person. I sleep for 12 hour`);
}
}

class Student extends Person{
    getSleep(){
        console.log(`I am a student. I sleep for 8 hour`);
    }
}

class NextLevelDeveloper extends Person{
    getSleep(){
        console.log(`I am next level Developer. I sleep for 6 hour`);
    }

}

const getSleepingHour=(params:Person)=>{
    params.getSleep()
}

const person1=new Person()
const person2=new Student()
const person3=new NextLevelDeveloper()


getSleepingHour(person1)


//! polymorphism using shape expample 

class Shape{
    getArea():number{
        return 0;
    }
}

class Circle extends Shape{
    radius:number;

    constructor(radius:number){
        super()
        this.radius=radius;
    }

    getArea():number{
        return Math.PI*this.radius*this.radius;
    }

}

class Rectangle extends Shape{
    height:number;
    width:number;

    constructor(height:number,width:number){
        super()
        this.width=width;
        this.height=height;
    }

    getArea():number{
        return  this.height*this.width;
    }
}

const getArea=(params:Shape)=>{
    console.log(params.getArea());
}


const normalSlape=new Shape()
const circle =new Circle(4)
const rectangle=new Rectangle(3,5)

// getArea(normalSlape)
// getArea(circle)
getArea(rectangle)
