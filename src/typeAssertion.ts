
const convertKgToGram=(input:string | number)=>{
    if(typeof input==='number'){
        return input*1000;
    }else if(typeof input==='string'){
        const [num]=input.split(" ");
        const gm=Number(num)*1000;
        return `kg to gram: ${gm}`
    }
}


const result1=convertKgToGram(1) as number
// result1.toFixed   //? now it show number method

console.log(result1);

const result2=convertKgToGram('1 Kg') as string
// result2.length    //! now it sow string method

console.log(result2);

type CustomError={
    message:string 
}


try{

}catch(err){
    console.log((err as CustomError).message);
}
