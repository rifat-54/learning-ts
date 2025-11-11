//function
//normal function
function add(num1:number,num2:number):number{
   return num1+num2; 
}

//arrow functon

const addArrow=((num1:number,num2:number):number=> num1+num2)


// function in object => method

const user={
    userName:'rifat',
    balance:23,
    addBalance(value:number):number{
        return this.balance+value;
    }
}

user.addBalance(234)

// function in loop => callback function;

const num:number[]=[11,43,45,56]

const toatl=num.map((item:number):number=>item*item)

