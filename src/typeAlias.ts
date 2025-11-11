
type User={
    id:number,
    name:{
        firstName:string;
        lastName:string;
    },
    gender:'male' | 'female',
    address:{
        division:string;
        city:string
    },
    phone:number
}

const user:User={
    id:234,
    name:{
        firstName:'mashur',
        lastName:'Rifat'
    },
    gender:'male',
    address:{
        division:"Dhaka",
        city:"Tangail"
    },
    phone:234234
}

const user2:User={
    id:234234,
    name:{
        firstName:'mrs',
        lastName:'y'
    },
    gender:'female',
    address:{
        division:"chittragram",
        city:"cox-bazer"
    },
    phone:234234234
}


type Add=(num1:number,num2:number)=>number

const add:Add=(num1,num2)=>num1+num2

type Name=string

const name:Name='sdrew'
