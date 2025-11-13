// when string use as a type than it stay string literature


type RichPropleVahicle={
    car:string;
    bike:string;
    cng:string
}

type MyVehicle1='bike' | 'car' | 'cng'

type MyVehicle2=keyof RichPropleVahicle;   // here key use a type


const myVehicale:MyVehicle2='car'

type User={
    id:number;
    name:string;
    address:{
        city:string;
    }
}

const user:User={
    id:234234,
    name:'rifat',
    address:{
        city:'Dhaka'
    }
}

const myId=user['id']
const myName=user['name']
const myAddress=user['address']

// console.log(myId,myAddress);

const getPropertyFromObj=<X>(obj:X,key:keyof X)=>{
    return obj[key]
}

const result=getPropertyFromObj(user,'name')

const product={
    brand:'Hp',
    price:234234
}

const result1=getPropertyFromObj(product,'brand')
console.log(result1);



