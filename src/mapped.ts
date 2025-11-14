const arrayOfNum:number[]=[1,4,6]

const arryOfString:string[]=['1','2','6']

const arryOfStringUsingMap:string[]=arrayOfNum.map((num)=>num.toString())

type AreaOfNumber={
    height:number;
    width:number;
}

// type AreaOfString={
//     height:string;
//     width:string;
// }

type AreaOfString ={
    [key in 'height' | 'width']:string
}
type AreaOfBoolean ={
    // [key in 'height' | 'width']:boolean
    [key in keyof AreaOfNumber]:boolean
}

type Area<T>={
    [key in keyof T]:T[key]
}

const area1:Area<{height:number;width:string}>={height:23,width:'234'}

