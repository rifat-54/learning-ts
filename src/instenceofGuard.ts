class Person{
    name:string;

    constructor(name:string){
        this.name=name
    }

    getSleep(hour:number){
        console.log(`${this.name} sleep ${hour} hour everyday`);
    }
}

class Student extends Person{
    constructor(name:string){
        super(name)
    }

    doStudy(hour:number){
        console.log(`${this.name} do ${hour} study every day`);
    }
}

class Teacher extends Person{
    constructor(name:string){
        super(name)
    }

    takeClass(hour:number){
        console.log(`${this.name} take ${hour} class`);
    }
}

//* when create a normal object from a class than it called instance . oi class ar instance

const isStudent=(user:Person)=>{
    return user instanceof Student;
}

const isTeacher=(user:Person)=>{
    return user instanceof Teacher;
}

const getUserInfo=(user:Person)=>{
    if(isStudent(user)){
        user.doStudy(14)
    }else if(isTeacher(user)){
        user.takeClass(4)
    }else{
        user.getSleep(5)
    }
}

const studend1=new Student('mr. student')
const teacher1=new Teacher('mr. Teacher')
const person1=new Person('mr. Person')

getUserInfo(studend1)
getUserInfo(teacher1)
getUserInfo(person1 )

