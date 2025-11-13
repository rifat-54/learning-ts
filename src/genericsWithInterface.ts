
interface Developer<T,X=null>{
    name:string,
    salary:number,
    device:{
        brand:string,
        price:number
    },
    smartWatch:T, 
    bike?:X
}

// type watchWithoutBrand ={
// brand:string,
//     price:number
// }

interface watchWithoutBrand{
    brand:string,
    price:number
}

const poorDev:Developer<watchWithoutBrand>={
    name:'a',
    salary:12332,
    device:{
        brand:'lenevo',
        price:20000
    },
    smartWatch:{
        brand:"unkown",
        price:234,
    }
}

// type watchWithBrand={
//  brand:string,
//     price:number,
//     freture:{
//         stopWatch:boolean,
//         AiFeature:boolean
//     }
// }

interface watchWithBrand{
    brand:string,
    price:number,
    freture:{
        stopWatch:boolean,
        AiFeature:boolean
    }
}

const richDev:Developer<watchWithBrand,{
    brand:string,
    engineCapacity:number
}>={
    name:'b',
    salary:12332,
    device:{
        brand:'jp',
        price:20000
    },
    smartWatch:{
        brand:"apple",
        price:234,
        freture:{
            stopWatch:true,
            AiFeature:false
        }
    },
    bike:{
        brand:'honda',
        engineCapacity:234
    }
}