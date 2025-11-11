// ? : ternary operator : decision making
// ?? : nullish coalescing operator => null or undefine seshabe kaj korbe
// ?.  optional chaining


const isEligebal=(age:number)=>{
    // if(age>=21){
    //     console.log('you are eligible');
    // }else{
    //     console.log('you are not eligible for marry');
    // }

    const result=age>=21?'you are eligible':'you are not elegible'

    console.log(result);
}

// isEligebal(22)

const theme='kasdjfkj';

const currentTheme=theme??'light theme'

// console.log(currentTheme);

const isAuthenticated='';

const resultWithTarnary=isAuthenticated?isAuthenticated:'guest user'

const resultWithNulish=isAuthenticated??'Guest user'

// console.log({resultWithTarnary},{resultWithNulish});

// ?? -> nulish coalescing => it work only null and undefined => if value is null or undified it give the value after ?? (after question mark value give) orher wise it return the original value. like here ''


//! optional chaining

const user:{
    address:{
        division:string,
        city:string,
        postCode?:number
    }
}={
    address:{
        division:'Dhaka',
        city:'Tangail'
    }
}

const postalCode=user?.address?.postCode

console.log(postalCode);