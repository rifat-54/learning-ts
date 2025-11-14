
type Product={
    id:number;
    name:string;
    price:number;
    stock:number;
    color?:string;
}

//! Pick => only this
type ProductSummary=Pick<Product,'id'|'name' | "price">

//! Omit => without this 
type ProductWithoutStock=Omit<Product,"stock" | "color">


//! Required => required all
type ProductWithColor=Required<Product>

const product:ProductWithColor={
    id:234,
    name:'mouse',
    price:234,
    stock:234,
    color:'black'
}

//! Partial => optional all
type OptionalProduct=Partial<Product>


//! Readonly => only read
type ReadoOnlyProduct=Readonly<Product>

//! Record => key here string and value is unkown . it can be any type
const emptyObj:Record<string,unknown>={}

