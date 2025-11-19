
//* type guard   => it check type

type Alphaneumeric=number | string;

const add=(num1:Alphaneumeric,num2:Alphaneumeric)=>{
    if(typeof(num1)==='number' && typeof(num2)==='number'){

        return num1+num2;
    }else{
        return num1.toString()+num2.toString();
    }
}

// console.log(add(2,'3'));




//*  in Guard  => it check if value exit on that 

type NormalUser={
    name:string;
}
type AdminUser={
    name:string,
    role:"Admin"
}

const getUserInfo=(user:NormalUser | AdminUser)=>{

    if("role" in user){

        console.log(`he is ${user.name} and his role is -> ${user.role}`);
    }else{
        console.log(`he is ${user.name} and he has no role`);
    }
}

getUserInfo({name:'rakib',role:"Admin"})