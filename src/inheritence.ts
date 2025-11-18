
class Person{
    name:string;
    age:number;
    address:string

    constructor(name:string,age:number,address:string){
        this.name=name;
        this.age=age;
        this.address=address
    }

    getSleep(hour:number){
        console.log(`${this.name} ${hour} gonta ghumai`);
    }
}

class Student extends Person{   
    rollNo:number;

    constructor(name:string,age:number,address:string,rollNO:number){
        super(name,age,address)
        this.rollNo=rollNO;
    }

    checkRoll(){
        console.log(`${this.name} role is : ${this.rollNo}`);
    }
}

class Teacher extends Person{
   
    designation:string;
 

    constructor(name:string,age:number,address:string,designation:string){
       
        super(name ,age ,address)
        this.designation=designation
    }


    takeClass(hour:number){
        console.log(`${this.name} take class ${hour} hour`);
    }

}

const student1=new Student('Mr. Fakibaz',25,'Bangladesh',343)

const teacher1=new Teacher('Mr Smart',54,'dhaka','teacher')

console.log(teacher1.takeClass(3)); 

// student1.getSleep(250)

student1.checkRoll()
 