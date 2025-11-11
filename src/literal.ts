let user:{
    readonly organization:string;   // access modifier only. not allow to change
    firstName:string;
    middleName?:string;  //optional 
    lastName:string;
    isMarried:boolean
}={
    organization:'Astha Source',
    firstName:'mashur',
    lastName:'Rifat',
    isMarried:false
}
// user.organization='new sorce bd'

console.log(user);