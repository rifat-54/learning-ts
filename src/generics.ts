
// type Generic=number[]
type Generic<value>=Array<value>

// const friends:string[]=['a','b','c']
// const friends:Array<string>=['a','b','c']
// const friends:Generic=['a','b','c']
const friends:Generic<string>=['a','b','c']

// const rollNumber:number[]=[1,2,3,4]
// const rollNumber:Array<number>=[1,2,3,4]
// const rollNumber:Generic=[1,2,3,4]
const rollNumber:Generic<number>=[1,2,3,4]

// const isEligibleList:boolean[]=[true,false,true]
// const isEligibleList:Array<boolean>=[true,false,true]
const isEligibleList:Generic<boolean>=[true,false,true]

// type Coordinate=[number,number]
type Coordinate<x,y>=[x,y]

const coordinate1:Coordinate<number,number>=[1,5]
const coordinate:Coordinate<string,string>=['1','5']


const users:Generic<{name:string,age:number}>=[
    {
        name:'sakib',
        age:213
    },
    {
        name:'kjsdf',
        age:234
    }
]


