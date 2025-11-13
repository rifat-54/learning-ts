
type User={
    name:string,
    age:number
}

const user:User={
    name:'rifat',
    age:34
}

const user2:User={
    name:"sakib",
    age:23
}

type Role={
    role:'admin' | 'user'
}

type UserWithRole= User & Role

const userWithrole:UserWithRole={
    name:'sakib',
    age:234,
    role:'admin'
}

interface IUser{
    name:string;
    age:number;
}

const newUser:IUser={
    name:'slkdfj',
    age:234,
}


interface IUserWithRole extends IUser{
    role:"admin" | "user"
}

const user3:IUserWithRole={
    name:'aakk',
    age:234,
    role:'admin'
}

type Add=(num1:number,num2:number)=>number;

// const add:Add=((num1,num2)=>num1+num2)

interface IAdd{
    (num1:number,num2:number):number;
}

const add:IAdd=((num1,num2)=>num1+num2)

type Frineds=string[];

// const frendd:Frineds=['a','b','c']

interface IFriends{
    [index:number]:string;
}

const frendd:IFriends=['a','b','c']




