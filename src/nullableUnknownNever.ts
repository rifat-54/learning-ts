//! nullable => use null as a type

const getUser=(input:string | null)=>{  // here null use as type
    if(input){
        console.log(`From DB : ${input}`);
    }else{
        console.log('From DB : All User');
    }
}

// getUser(null)

//! unknown type

const discountCalculator=(input:unknown)=>{
    if(typeof input==='number'){
      const  discountPrice=input*.1;
      console.log(discountPrice);
    }else if(typeof input ==='string'){
        const [discountPrice]=input.split(" ")
        console.log(Number(discountPrice)*.1);
    }else{
        console.log('wrong input');
    }
}

// discountCalculator(100)
// discountCalculator('100 TK')
// discountCalculator(null)

//! never

const throwError=(msg:string):never=>{
    throw new Error(msg)
}

throwError('error ....')