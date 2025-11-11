
const user={
    id:213,
    name:{
        firstName:'mashur',
        middleName:'Rahaman',
        lastName:'Rifat'
    },
    favouriteColor:'black'
}

// const myMilldeName=user.name.middleName;

// console.log(myMilldeName);

// destuctruing object

const{favouriteColor:myFaviuriteColor,name:{middleName:myMilldeName}}=user;

// console.log(myMilldeName,myFaviuriteColor);

//? array destucturing

const fruits=['apple','banana','cheery']

const[,banana]=fruits;

console.log(banana);
