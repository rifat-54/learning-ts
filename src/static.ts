class Counter{
   static count:number=0;  //* static => same memory for all instence

   static increment(){
        return Counter.count=Counter.count+1;
    }

    decrement(){
        return Counter.count=Counter.count-1;
    }
}

// const instence1=new Counter()
// console.log(instence1.increment());
// console.log(instence1.increment());
// console.log(instence1.increment());
// console.log(instence1.increment());

// const instence2=new Counter()
// console.log(instence2.increment());
// console.log(instence2.increment());
// console.log(instence2.increment());

// const instence1=new Counter()
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());

// const instence2=new Counter()
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());